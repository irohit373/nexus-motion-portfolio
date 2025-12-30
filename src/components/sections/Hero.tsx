import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-background">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-warm/10 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-[1.1]"
            >
              I'm <motion.span 
                className="text-gradient inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
              >
                Rohit
              </motion.span>
              <br />
              <motion.span 
                className="text-muted-foreground inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Deshmukh
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed"
            >
              Full Stack Developer specializing in Next.js, React & AI-powered applications. 
              Building scalable solutions with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm font-medium rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  Connect with me
                </Button>
              </motion.div>
              
            </motion.div>
          </div>

          {/* Right - Big Avatar with floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind avatar */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-warm/10 rounded-full blur-3xl scale-110"
              />

              {/* Floating decorative elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-8 -left-8 z-20"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-card to-muted rounded-2xl flex items-center justify-center shadow-2xl border border-border/50">
                  <Code2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </motion.div>


              {/* Main Avatar - BIGGER */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="relative z-10"
              >
                <div className="relative">
                  {/* Avatar ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 border border-dashed border-primary/20 rounded-full"
                  />
                  <img
                    src={avatar}
                    alt="Rohit Deshmukh"
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Floating keyboard visual */}
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  x: [0, -5, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -right-8 md:-right-12 z-20"
              >
                <div className="w-32 h-14 md:w-40 md:h-16 bg-gradient-to-br from-card to-muted rounded-xl shadow-2xl border border-border/50 overflow-hidden">
                  <div className="grid grid-cols-10 gap-0.5 p-2">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: i * 0.05 
                        }}
                        className={`h-2 rounded-sm ${
                          i === 15 ? 'bg-red-400' : 
                          i === 16 ? 'bg-green-400' : 
                          i === 17 ? 'bg-blue-400' : 
                          'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="px-2 pb-1.5">
                    <div className="h-2.5 bg-muted-foreground/20 rounded-sm w-full" />
                  </div>
                </div>
              </motion.div>

              {/* Decorative lines */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.div> */}

    </section>
  );
}