import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Calendar, ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { CardSkeleton } from "@/components/skeletons";
import { usePageTracking } from "@/hooks/usePageTracking";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  read_time: string | null;
  published_at: string | null;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const imageVariants = {
  rest: { scale: 1, filter: "brightness(1)" },
  hover: { 
    scale: 1.1, 
    filter: "brightness(1.1)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function Blog() {
  usePageTracking();

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['all-blog-posts'],
    queryFn: async (): Promise<BlogPost[]> => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, cover_image, read_time, published_at')
        .eq('published', true)
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
            <Link to="/" className="text-lg font-semibold tracking-tight">
              RD
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-40 w-8 h-8 border-2 border-primary/20 rounded-lg rotate-12"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6"
            >
              <BookOpen className="w-6 h-6 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4">
              Blog & <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Thoughts on product management, technology, and building great digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Loading state */}
            {isLoading && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <CardSkeleton key={i} hasImage lines={3} />
                ))}
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="text-center py-20 text-muted-foreground">
                Unable to load blog posts. Please try again later.
              </div>
            )}

            {/* Blog posts grid */}
            {posts && posts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    whileHover="hover"
                    className="group"
                  >
                    <Link to={`/blog/${post.slug}`} className="block h-full">
                      <article className="h-full rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <motion.img
                            src={post.cover_image || "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"}
                            alt={post.title}
                            variants={imageVariants}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                          
                          {/* Read more indicator */}
                          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                            Read more
                            <ArrowUpRight className="w-3 h-3" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3 h-3" />
                              {formatDate(post.published_at)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <BookOpen className="w-3 h-3" />
                              {post.read_time || '5 min read'}
                            </span>
                          </div>
                          <h2 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Empty state */}
            {posts && posts.length === 0 && (
              <div className="text-center py-20">
                <BookOpen className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-serif mb-2">No blog posts yet</h3>
                <p className="text-muted-foreground">Check back soon for new content!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
