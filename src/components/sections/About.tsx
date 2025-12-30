import { motion } from "framer-motion";
import { Tent, Code2, Database, Server, Wrench } from "lucide-react";

const skills = [
  { category: "Languages", icon: Code2, items: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP", "C++"] },
  { category: "Frameworks", icon: Server, items: ["Next.js", "React", "Node.js", "Express.js", "Flask", "CodeIgniter"] },
  { category: "Backend/APIs", icon: Database, items: ["REST APIs", "WebSocket", "JWT", "OAuth", "LLM Integration"] },
  { category: "Tools & DevOps", icon: Wrench, items: ["Git", "Docker", "AWS", "Linux/VPS", "CI/CD", "MongoDB", "MySQL"] },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-warm/5 rounded-full blur-[120px]" />
      
      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-4 h-4 border-2 border-primary/30 rotate-45"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-20 w-6 h-6 rounded-full border-2 border-primary/20"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6"
            >
              <Tent className="w-5 h-5 text-primary" />
            </motion.div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">
              A bit about <span className="text-gradient">me</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Bio with decorative line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-3 space-y-6 relative"
            >
              {/* Decorative vertical line */}
              <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a Full Stack Developer pursuing B.Tech in Computer Science & Business Systems 
                at RGPV, Bhopal. My passion lies in building scalable web applications and 
                integrating AI-powered solutions that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I specialize in the MERN stack, Next.js, and Python frameworks like Flask and FastAPI. 
                I've built AI-powered SaaS platforms, ML-based prediction systems, and educational 
                content management platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With experience in legacy code migration, API development, and cloud deployment, 
                I focus on writing clean, maintainable code that scales. Currently open to 
                relocation and exciting opportunities.
              </p>
            </motion.div>

            {/* Skills with icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-sm font-medium tracking-wide">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-11">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm text-muted-foreground px-3 py-1.5 border border-border rounded-full hover:border-primary/50 hover:text-foreground transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
