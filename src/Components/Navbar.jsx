import {motion, AnimatePresence} from "motion/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => { 
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      if (window.scrollY > viewportHeight * 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      };

      window.addEventListener("scroll", handleScroll);

      handleScroll(); 
      
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Initial check
  return(
    <AnimatePresence>
      {visible && (
        <motion.nav 
          className="fixed top-0 left-0 right-0 z-5 backdrop-blur-sm flex items-center justify-between p-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-xl">irohit373</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

      // return (
        
      //   <navbar className="flex items-center  justify-between p-4">
      //     <h1 className="text-xl ">irohit373</h1>
      //     <nav className="space-x-4">
      //       <a href="#about" className="hover:text-gray-400">About</a>
      //       <a href="#projects" className="hover:text-gray-400">Projects</a>
      //       <a href="#contact" className="hover:text-gray-400">Contact</a>
      //     </nav>
      //   </navbar>
      //   );
      // }

