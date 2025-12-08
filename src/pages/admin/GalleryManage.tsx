import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Image, Loader2, Plus, Trash2, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  category: string | null;
  sort_order: number | null;
  is_active: boolean;
}

const GalleryManage = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    image_url: '',
    category: '',
  });
  const { toast } = useToast();

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
      toast({
        title: "Error",
        description: "Failed to load gallery images",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.image_url) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('gallery_images')
        .insert({
          title: formData.title,
          image_url: formData.image_url,
          category: formData.category || null,
          sort_order: images.length,
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Image added successfully",
      });
      setFormData({ title: '', image_url: '', category: '' });
      setIsDialogOpen(false);
      fetchImages();
    } catch (error) {
      console.error('Error adding image:', error);
      toast({
        title: "Error",
        description: "Failed to add image",
        variant: "destructive",
      });
    }
  };

  const toggleActive = async (id: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('gallery_images')
        .update({ is_active: !isActive })
        .eq('id', id);

      if (error) throw error;

      setImages(images.map(img => img.id === id ? { ...img, is_active: !isActive } : img));
      toast({
        title: "Success",
        description: `Image ${!isActive ? 'activated' : 'deactivated'}`,
      });
    } catch (error) {
      console.error('Error toggling image:', error);
      toast({
        title: "Error",
        description: "Failed to update image",
        variant: "destructive",
      });
    }
  };

  const deleteImage = async (id: string) => {
    try {
      const { error } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setImages(images.filter(img => img.id !== id));
      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gallery</h1>
          <p className="text-muted-foreground">Manage gallery images</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Image
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Image</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Image title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image_url">Image URL *</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., Piaggio, City Life"
                />
              </div>
              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Add Image</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {images.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <Image className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No gallery images yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <Card key={image.id} className={!image.is_active ? 'opacity-50' : ''}>
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={image.image_url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">{image.title}</h3>
                {image.category && (
                  <p className="text-sm text-muted-foreground">{image.category}</p>
                )}
                <div className="flex gap-2 mt-3">
                  <Button
                    size="sm"
                    variant={image.is_active ? 'outline' : 'default'}
                    onClick={() => toggleActive(image.id, image.is_active)}
                  >
                    {image.is_active ? 'Deactivate' : 'Activate'}
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteImage(image.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryManage;
