import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { BarChart3, Eye, TrendingUp, Globe } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { StatsSkeleton, ChartSkeleton, TableSkeleton } from '@/components/skeletons';

interface PageView {
  id: string;
  page_path: string;
  referrer: string | null;
  created_at: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Analytics() {
  const { isAdmin } = useAuth();

  const { data: pageViews, isLoading } = useQuery({
    queryKey: ['analytics-page-views'],
    queryFn: async (): Promise<PageView[]> => {
      const { data, error } = await supabase
        .from('page_views')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1000);
      
      if (error) throw error;
      return data || [];
    },
    enabled: isAdmin,
  });

  if (!isAdmin) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <p className="text-muted-foreground">You don't have access to view analytics.</p>
      </motion.div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-serif mb-2">Analytics</h1>
          <p className="text-muted-foreground">Track your portfolio performance</p>
        </div>
        <StatsSkeleton />
        <div className="grid lg:grid-cols-2 gap-6">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
        <TableSkeleton rows={10} columns={3} />
      </div>
    );
  }

  // Calculate stats
  const totalViews = pageViews?.length || 0;
  const today = new Date().toDateString();
  const todayViews = pageViews?.filter(v => new Date(v.created_at).toDateString() === today).length || 0;
  
  // Group by page
  const pageStats = pageViews?.reduce((acc, view) => {
    acc[view.page_path] = (acc[view.page_path] || 0) + 1;
    return acc;
  }, {} as Record<string, number>) || {};

  const topPages = Object.entries(pageStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([path, count]) => ({ path, count }));

  // Group by day for chart
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toDateString();
  });

  const viewsByDay = last7Days.map(day => {
    const count = pageViews?.filter(v => new Date(v.created_at).toDateString() === day).length || 0;
    const shortDay = new Date(day).toLocaleDateString('en-US', { weekday: 'short' });
    return { day: shortDay, views: count };
  });

  // Unique sessions (approximate)
  const uniqueSessions = new Set(pageViews?.map(v => v.referrer)).size;

  const stats = [
    { label: 'Total Views', value: totalViews, icon: Eye, color: 'primary' },
    { label: 'Today', value: todayViews, icon: TrendingUp, color: 'green-500' },
    { label: 'Unique Sources', value: uniqueSessions, icon: Globe, color: 'blue-500' },
    { label: 'Pages Tracked', value: Object.keys(pageStats).length, icon: BarChart3, color: 'purple-500' },
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-serif mb-2">Analytics</h1>
        <p className="text-muted-foreground">Track your portfolio performance</p>
      </motion.div>

      {/* Stats cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm cursor-default transition-shadow hover:shadow-lg hover:shadow-primary/5"
          >
            <motion.div 
              className="flex items-center justify-between mb-4"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              <stat.icon className={`w-5 h-5 text-${stat.color}`} />
            </motion.div>
            <motion.p 
              className="text-3xl font-serif mb-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
            >
              {stat.value}
            </motion.p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Views over time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
        >
          <h3 className="text-lg font-serif mb-6">Views (Last 7 Days)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={viewsByDay}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Top pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
        >
          <h3 className="text-lg font-serif mb-6">Top Pages</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topPages} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis 
                  type="category" 
                  dataKey="path" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  width={100}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent views */}
      <motion.div
        variants={itemVariants}
        className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
      >
        <h3 className="text-lg font-serif mb-6">Recent Page Views</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Page</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Referrer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Time</th>
              </tr>
            </thead>
            <tbody>
              {pageViews?.slice(0, 10).map((view, index) => (
                <motion.tr 
                  key={view.id} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ backgroundColor: "hsl(var(--muted) / 0.3)" }}
                  className="border-b border-border/30 transition-colors"
                >
                  <td className="py-3 px-4 text-sm">{view.page_path}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{view.referrer || 'Direct'}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {new Date(view.created_at).toLocaleString()}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
