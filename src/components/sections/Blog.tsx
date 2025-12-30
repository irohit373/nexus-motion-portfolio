import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { CardSkeleton } from "@/components/skeletons";

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
      delay: i * 0.12,
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

export function Blog() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async (): Promise<BlogPost[]> => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, cover_image, read_time, published_at')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(6);
      
      if (error) throw error;
      return data || [];
    },
  });

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-40 w-8 h-8 border-2 border-primary/20 rounded-lg rotate-12"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-primary/20"
      />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-warm/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6"
            >
              <BookOpen className="w-5 h-5 text-primary" />
            </motion.div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">
              Blog
            </p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">
              Recent <span className="text-gradient">writings</span>
            </h2>
          </motion.div>

          {/* Loading state */}
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <CardSkeleton key={i} hasImage lines={2} />
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                  <article className="h-full rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={post.cover_image || "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"}
                        alt={post.title}
                        variants={imageVariants}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                      
                      {/* Read more indicator */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                      >
                        Read more
                        <ArrowUpRight className="w-3 h-3" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.h3 
                          className="text-lg font-serif group-hover:text-primary transition-colors duration-300 line-clamp-2"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          {post.title}
                        </motion.h3>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="flex-shrink-0"
                        >
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </motion.div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.published_at)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3 h-3" />
                          {post.read_time || '5 min read'}
                        </span>
                      </div>
                    </div>
                  </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {posts && posts.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No blog posts yet. Check back soon!
            </div>
          )}

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm font-medium">View all articles</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
