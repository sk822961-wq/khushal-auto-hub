import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { BarChart3, Loader2, Eye, MousePointer } from 'lucide-react';

interface AnalyticsEvent {
  id: string;
  event_type: string;
  page_url: string | null;
  created_at: string;
}

interface PageStats {
  page: string;
  views: number;
}

const Analytics = () => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [pageStats, setPageStats] = useState<PageStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const { data, error } = await supabase
          .from('analytics')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(100);

        if (error) throw error;
        setEvents(data || []);

        // Calculate page stats
        const stats: Record<string, number> = {};
        (data || []).forEach((event) => {
          if (event.page_url) {
            stats[event.page_url] = (stats[event.page_url] || 0) + 1;
          }
        });
        
        const pageStatsArray = Object.entries(stats)
          .map(([page, views]) => ({ page, views }))
          .sort((a, b) => b.views - a.views);
        
        setPageStats(pageStatsArray);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const totalPageViews = events.filter(e => e.event_type === 'page_view').length;
  const totalClicks = events.filter(e => e.event_type === 'click').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">View website analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Page Views
            </CardTitle>
            <Eye className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{totalPageViews}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Clicks
            </CardTitle>
            <MousePointer className="h-5 w-5 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{totalClicks}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
        </CardHeader>
        <CardContent>
          {pageStats.length === 0 ? (
            <div className="text-center py-8">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No page views recorded yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pageStats.slice(0, 10).map((stat, index) => (
                <div key={stat.page} className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-6">{index + 1}.</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{stat.page}</p>
                    <div className="mt-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(stat.views / pageStats[0].views) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground">{stat.views}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Events</CardTitle>
        </CardHeader>
        <CardContent>
          {events.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">No events recorded yet</p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {events.slice(0, 20).map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div>
                    <span className="text-sm font-medium text-foreground capitalize">
                      {event.event_type.replace('_', ' ')}
                    </span>
                    {event.page_url && (
                      <span className="text-sm text-muted-foreground ml-2">
                        on {event.page_url}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(event.created_at).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
