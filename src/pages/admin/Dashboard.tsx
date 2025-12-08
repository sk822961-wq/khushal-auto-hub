import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { MessageSquare, Image, Package, TrendingUp } from 'lucide-react';

interface Stats {
  enquiries: number;
  products: number;
  galleryImages: number;
  pageViews: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({
    enquiries: 0,
    products: 0,
    galleryImages: 0,
    pageViews: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [enquiriesRes, productsRes, galleryRes, analyticsRes] = await Promise.all([
          supabase.from('enquiries').select('id', { count: 'exact', head: true }),
          supabase.from('products').select('id', { count: 'exact', head: true }).eq('is_active', true),
          supabase.from('gallery_images').select('id', { count: 'exact', head: true }).eq('is_active', true),
          supabase.from('analytics').select('id', { count: 'exact', head: true }).eq('event_type', 'page_view'),
        ]);

        setStats({
          enquiries: enquiriesRes.count || 0,
          products: productsRes.count || 0,
          galleryImages: galleryRes.count || 0,
          pageViews: analyticsRes.count || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: 'Total Enquiries', value: stats.enquiries, icon: MessageSquare, color: 'text-primary' },
    { label: 'Active Products', value: stats.products, icon: Package, color: 'text-secondary' },
    { label: 'Gallery Images', value: stats.galleryImages, icon: Image, color: 'text-accent' },
    { label: 'Page Views', value: stats.pageViews, icon: TrendingUp, color: 'text-success' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to KHUSHAL ELECTRIC AUTO Admin Panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {isLoading ? '...' : stat.value}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Use the sidebar to navigate to different sections of the admin panel.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
