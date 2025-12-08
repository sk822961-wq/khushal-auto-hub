import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MessageSquare, Loader2, Trash2 } from 'lucide-react';

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  vehicle_type: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchEnquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnquiries(data || []);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      toast({
        title: "Error",
        description: "Failed to load enquiries",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('enquiries')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setEnquiries(enquiries.map(e => e.id === id ? { ...e, status } : e));
      toast({
        title: "Success",
        description: "Status updated successfully",
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const deleteEnquiry = async (id: string) => {
    try {
      const { error } = await supabase
        .from('enquiries')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setEnquiries(enquiries.filter(e => e.id !== id));
      toast({
        title: "Success",
        description: "Enquiry deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting enquiry:', error);
      toast({
        title: "Error",
        description: "Failed to delete enquiry",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'contacted': return 'bg-accent text-accent-foreground';
      case 'completed': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
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
      <div>
        <h1 className="text-3xl font-bold text-foreground">Enquiries</h1>
        <p className="text-muted-foreground">Manage customer enquiries</p>
      </div>

      {enquiries.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No enquiries yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {enquiries.map((enquiry) => (
            <Card key={enquiry.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{enquiry.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {new Date(enquiry.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <Badge className={getStatusColor(enquiry.status)}>
                    {enquiry.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href={`tel:${enquiry.phone}`} className="flex items-center gap-2 text-primary hover:underline">
                    <Phone className="h-4 w-4" />
                    {enquiry.phone}
                  </a>
                  {enquiry.email && (
                    <a href={`mailto:${enquiry.email}`} className="flex items-center gap-2 text-primary hover:underline">
                      <Mail className="h-4 w-4" />
                      {enquiry.email}
                    </a>
                  )}
                  {enquiry.vehicle_type && (
                    <span className="text-muted-foreground">
                      Interested in: {enquiry.vehicle_type}
                    </span>
                  )}
                </div>

                {enquiry.message && (
                  <p className="text-foreground bg-muted p-3 rounded-lg">
                    {enquiry.message}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant={enquiry.status === 'pending' ? 'default' : 'outline'}
                    onClick={() => updateStatus(enquiry.id, 'pending')}
                  >
                    Pending
                  </Button>
                  <Button
                    size="sm"
                    variant={enquiry.status === 'contacted' ? 'default' : 'outline'}
                    onClick={() => updateStatus(enquiry.id, 'contacted')}
                  >
                    Contacted
                  </Button>
                  <Button
                    size="sm"
                    variant={enquiry.status === 'completed' ? 'default' : 'outline'}
                    onClick={() => updateStatus(enquiry.id, 'completed')}
                  >
                    Completed
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteEnquiry(enquiry.id)}
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

export default Enquiries;
