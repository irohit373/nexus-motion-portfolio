import { motion } from "framer-motion";
import { ArrowUpRight, Github, Folder, ExternalLink } from "lucide-react";
import velocityHrImage from "@/assets/project-velocity-hr.png";
import jetlensImage from "@/assets/project-jetlens.png";
import learnifyImage from "@/assets/project-learnify.png";

const projects = [
  {
    title: "Velocity-HR – AI Recruitment Platform",
    description:
      "AI-Powered SaaS platform with automated resume screening, intelligent candidate matching, and one-click interview scheduling. Reduces time-to-hire by 60% with LLM-based processing and async architecture.",
    tags: ["Next.js", "Python", "FastAPI", "PostgreSQL", "OpenAI API"],
    link: "https://velocity-h.vercel.app",
    github: "https://github.com/irohit373/Velocity-HR",
    featured: true,
    date: "December 2025",
    image: velocityHrImage,
  },
  {
    title: "JetLens – ML Flight Search Platform",
    description:
      "End-to-end flight search platform integrating multiple airline APIs. Features intelligent caching (60% latency reduction) and ML-based price prediction models with ~85% accuracy.",
    tags: ["Next.js", "Python", "Flask", "MongoDB", "Scikit-learn", "PyTorch"],
    link: "#",
    github: "https://github.com/irohit373/jetlens",
    featured: true,
    date: "June 2025",
    image: jetlensImage,
  },
  {
    title: "Learnify – Educational CMS Platform",
    description:
      "Scalable full-stack platform supporting real-time content delivery. Built with MERN stack, JWT authentication, and optimized MongoDB queries using indexing and aggregation pipelines.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    link: "https://learnify-ed-tech-platform-mern.vercel.app/",
    github: "https://github.com/irohit373/Learnify-EdTech-Platform-MERN",
    featured: false,
    date: "November 2024",
    image: learnifyImage,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.08,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-20 h-20 border border-dashed border-primary/20 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-1/4 w-2 h-2 rounded-full bg-primary/40"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
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
              <Folder className="w-5 h-5 text-primary" />
            </motion.div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">
              Selected <span className="text-gradient">work</span>
            </h2>
          </motion.div>

          {/* Projects Grid - Bento Style */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover="hover"
                initial-state="rest"
                className={`group relative rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 overflow-hidden ${
                  project.featured ? 'md:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={imageVariants}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Hover overlay with view button */}
                  <motion.div 
                    variants={overlayVariants}
                    className="absolute inset-0 bg-primary/10  flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Project number overlay */}
                  <div className="absolute top-4 right-4 text-5xl font-serif text-foreground/10 font-bold">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-col gap-2">
                      <motion.div 
                        transition={{ duration: 0.4 }}
                        className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
                      >
                        <Folder className="w-4 h-4 text-primary" />
                      </motion.div>
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * tagIndex + 0.3 }}
                        whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                        className="text-xs text-muted-foreground px-3 py-1.5 bg-muted/50 rounded-full transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover gradient */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" 
                />
              </motion.article>
            ))}
          </div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/irohit373"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm font-medium">View all projects on GitHub</span>
              <motion.div
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
