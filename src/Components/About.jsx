import { motion } from "motion/react";

export default function About() {
  const cv = null;
  const photo = "/images/rohit1.jpg"; // Replace with your image path
  // Skills array
  const skills = [
    "Javascript",
    "React",
    "Next.js",
    "Dataiku",
    "PowerBI",
    "Python",
    "SQL",
    "Framer-Motion",
  ];
  return (
    <>
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Overlay text at top-left */}
              <motion.div
                className="absolute top-16 -left-7 z-1 text-xl px-4 w-80 py-2 rounded-lg transform"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, scale: 1.05 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                On the Journey of Deep Diving into Never Ending Data...
              </motion.div>

              <motion.img
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
                src={photo}
                alt="Profile image"
                className="rounded-lg shadow-2xl opacity-70 relative w-full max-w-md mx-auto"
              />
            </motion.div>

            {/* Content column */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2
                className="text-3xl md:text-5xl text-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                I'm Rohit Deshmukh
              </motion.h2>
              <p className="text-lg text-gray-500">
                Hi there! I'm Rohit, a passionate developer focused on creating
                beautiful, functional websites and applications.
              </p>

              <p className="text-ml text-gray-500">
                With experience in both front-end and back-end technologies, I
                enjoy bringing ideas to life through clean code and intuitive
                design. My goal is to build digital experiences that are not
                just visually appealing but also highly performant and
                accessible.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="bg-[#3A2A2A] text-[#E6E2D8] px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + index * 0.1,
                        scale: { duration: 0.2 },
                        backgroundColor: { duration: 0.2 },
                        color: { duration: 0.2 },
                        rotate: { duration: 0.2 },
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        rotate: -3,
                        backgroundColor: "#E3DCC5",
                        color: "#1F2937",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.a
                href={cv}
                className="inline-block bg-amber-200 hover:bg-amber-300 text-neutral-800 font-bold py-2 px-6 rounded mt-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Link to my CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
