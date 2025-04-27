import {motion} from 'motion/react';

export default function Hero() {
    const profileImage = '/avatar.png';
    const keyboard = '/keyboard1.png'; 
    const CodeEditor = '/CodeEditor.png';
    return (
    <>
        <div className="flex flex-col md:flex-row items-center justify-center h-screen p-6 md:p-12">
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-5xl font-bold mb-4">I Rohit Deshmukh</h1>
                <p className="text-lg mb-8">Sup Sup...</p>
                <a href="#contact" className="bg-amber-200 hover:bg-amber-300 text-neutral-800 font-bold py-2 px-4 rounded">
                    Connect with me
                </a>
            </div>

            {/* Right Section */}
            <motion.div 

            className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">

                 {/* First decorative SVG - blob shape */}
                 <motion.img
                    src={CodeEditor}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 0.6, y: 0 }}
                    viewport={{ once: true }}
                    width="180" 
                    height="180" 
                    viewBox="0 0 200 200" 
                    className="absolute z-0 opacity-60"
                    style={{ top: '-40px', left: '100px' }}
                    animate={{ opacity: 0.6, scale: 1,rotate: -60}}
                    transition={{
                        duration: 1, delay: 0.8, 
                        scale: { duration: 10, repeat: Infinity, ease: "linear", repeatType: "reverse" },
                        rotate: { duration: 15, repeat: Infinity, ease: "linear", repeatType: "reverse" }
                    }}
                />
                {/* Second decorative SVG - circle pattern */}
                <motion.img
                    src={keyboard}
                    width="240" 
                    height="240" 
                    viewBox="0 0 200 200" 
                    className="absolute z-0 opacity-60"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 0.4, y: 0 }}
                    viewport={{ once: true }}
                    style={{ bottom: '-10px', right: '50px' }}
                    animate={{ opacity: 0.6, rotate: 60 }}
                    transition={{ 
                        duration: 1, delay: 0.8,
                        rotate: { duration: 15, repeat: Infinity, ease: "linear", repeatType: "reverse" }
                    }}
                />

                <motion.img src={profileImage} alt="Profile" className="" 
                    width="400"
                    height="400"
                    initial={{ opacity: 0, scale: 0.8}}
                    whileInView={{ opacity: 1, scale: 1,y: [0, -10, 0] }}
                    viewport={{ once: true }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{
                    duration: 0.8, delay: 0.6,
                       y: {
                           duration: 3,
                           repeat: Infinity,
                           repeatType: "reverse",
                           ease: "easeInOut"
                       }
                   }}
                   whileHover={{ scale: 1.05 }} 
                />
            </motion.div>
        </div>
    </>
    );
}