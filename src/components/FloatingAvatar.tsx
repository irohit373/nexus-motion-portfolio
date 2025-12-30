import { motion, useScroll, useTransform } from "framer-motion";
import avatar from "@/assets/avatar.png";

export function FloatingAvatar() {
  const { scrollYProgress } = useScroll();
  
  // Avatar follows scroll with a smooth parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <motion.div
      className="fixed right-8 top-1/3 z-50 hidden lg:block pointer-events-none"
      style={{ y, rotate, scale }}
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 blur-3xl bg-accent-warm/20 rounded-full scale-150" />
        
        {/* Avatar */}
        <img
          src={avatar}
          alt="Rohit Deshmukh"
          className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
