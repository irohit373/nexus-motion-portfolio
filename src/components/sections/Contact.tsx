import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Send, Zap } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-24 h-24 border border-dashed border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-primary/30"
      />
      <motion.div
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-primary/20 rotate-45"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6"
            >
              <Send className="w-5 h-5 text-primary" />
            </motion.div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-12">
              Ready to bring your ideas to life? Let's create something remarkable together.
            </p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-4 flex-wrap mb-12"
            >
              <a
                href="https://github.com/irohit373"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <Github className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium">GitHub</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
              <a
                href="https://linkedin.com/in/irohit373"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium">LinkedIn</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </motion.div>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <a
                href="mailto:deshmukhrohit373@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 text-muted-foreground hover:text-foreground group"
              >
                <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">deshmukhrohit373@gmail.com</span>
              </a>
            </motion.div>

            {/* Decorative sparkle */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-20 flex justify-center"
            >
              <motion.div
                animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="w-6 h-6 text-primary/50" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
