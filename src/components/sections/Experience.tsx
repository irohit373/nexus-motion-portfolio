import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useRef } from "react";

const timeline = [
  {
    period: "July 2025 – Oct 2025",
    role: "PHP Web Developer & Networking Intern",
    company: "MAIG Innovation, Indore",
    description:
      "Executed major version migration for a large-scale CodeIgniter application. Developed user-centric features, configured Linux cloud servers, and supported CI/CD pipeline maintenance using Git and Bitbucket.",
    type: "work" as const,
  },
  {
    period: "Sept 2023 – June 2026",
    role: "B.Tech in Computer Science & Business Systems",
    company: "School of Information Technology, RGPV, Bhopal",
    description: "CGPA: 7.43/10 | Coursework: DSA, OOPS, DBMS, OS, System Design, Networking, Product Management",
    type: "education" as const,
  },
  {
    period: "Jan 2022 – Mar 2022",
    role: "Web Backend Developer Intern",
    company: "Holy Faith Welfare Foundation, Bhopal",
    description:
      "Developed core backend modules using PHP MySQL with Session-based authentication and RBAC. Coordinated a development team of 3, managed Git branches, and participated in Agile sprints.",
    type: "work" as const,
  },
  {
    period: "Sept 2020 – June 2023",
    role: "Diploma in Computer Science & Engineering",
    company: "Govt. Polytechnic College, Khirsadoh",
    description: "CGPA: 8.42/10 | Foundation in programming, data structures, and computer fundamentals.",
    type: "education" as const,
  },
];

const cardVariants = {
  hidden: (i: number) => ({ 
    opacity: 0, 
    x: i % 2 === 0 ? -50 : 50,
    y: 20 
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="experience" className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-dashed border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-3 h-3 rounded-full bg-primary/30"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6"
            >
              <Briefcase className="w-5 h-5 text-primary" />
            </motion.div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">
              Experience & Education
            </p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">
              My <span className="text-gradient">journey</span>
            </h2>
          </motion.div>

          {/* Unified Timeline */}
          <div className="relative">
            {/* Animated vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/30 transform md:-translate-x-px overflow-hidden">
              <motion.div 
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-primary via-primary to-accent-warm"
              />
            </div>

            {timeline.map((item, index) => {
              const isWork = item.type === "work";
              const Icon = isWork ? Briefcase : GraduationCap;

              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className={`relative mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
                  }`}
                >
                  {/* Timeline dot with pulse effect */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                    className={`absolute top-2 w-4 h-4 rounded-full border-4 border-background shadow-lg z-10 left-0 md:left-1/2 md:-translate-x-1/2 ${
                      isWork ? 'bg-primary shadow-primary/30' : 'bg-accent-warm shadow-accent-warm/30'
                    }`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className={`absolute inset-0 rounded-full ${isWork ? 'bg-primary' : 'bg-accent-warm'}`}
                    />
                  </motion.div>

                  {/* Content card */}
                  <motion.div 
                    className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 group hover:shadow-lg ${
                      isWork ? 'hover:border-primary/30 hover:shadow-primary/5' : 'hover:border-accent-warm/30 hover:shadow-accent-warm/5'
                    }`}>
                      {/* Type label */}
                      <div className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-wider mb-2 ${
                        isWork ? 'text-primary' : 'text-accent-warm'
                      }`}>
                        <Icon className="w-3 h-3" />
                        <span>{isWork ? 'WORK' : 'EDUCATION'}</span>
                      </div>
                      
                      <span className={`block text-xs font-medium tracking-wider mb-2 ${
                        isWork ? 'text-primary' : 'text-accent-warm'
                      }`}>
                        {item.period}
                      </span>
                      <h3 className={`text-xl font-serif mb-1 transition-colors ${
                        isWork ? 'group-hover:text-primary' : 'group-hover:text-accent-warm'
                      }`}>
                        {item.role}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.company}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
