import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    id: 1,
    title: "Python Programming Certification",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialUrl: "#",
    icon: "🐍",
    color: "from-green-500 to-teal-500",
    description: "Proficient in core programming logic and Data Structure",
  },
  {
    id: 2,
    title: "Industrial Python Certification",
    issuer: "Infosys ICT Academy",
    date: "2024",
    credentialUrl: "#",
    icon: "🏭",
    color: "from-blue-500 to-indigo-500",
    description: "Professional application development & industrial use cases",
  },
  {
    id: 3,
    title: "SCA Foundation Certification",
    issuer: "SCA (Digital Content & Agile)",
    date: "2023",
    credentialUrl: "#",
    icon: "📱",
    color: "from-purple-500 to-pink-500",
    description: "Digital content management and Agile methodology fundamentals",
  },
];

const achievements = [
  {
    id: 1,
    title: "Full Stack Developer",
    description: "Built AI-powered SaaS platforms reducing time-to-hire by 60%",
    icon: "🚀",
  },
  {
    id: 2,
    title: "ML Integration",
    description: "Achieved ~85% accuracy on ML price prediction models",
    icon: "🤖",
  },
  {
    id: 3,
    title: "Performance Optimizer",
    description: "Reduced search latency by ~60% with intelligent caching",
    icon: "⚡",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative">
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6"
          >
            <Award className="w-5 h-5 text-primary" />
          </motion.div>
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">
            Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
            Credentials & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications that validate my skills
            and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform`}
                >
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-serif text-center mb-8">
            <Award className="inline-block w-6 h-6 mr-2 text-primary" />
            Notable <span className="text-gradient">Achievements</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-card/50 border border-border/50 text-center group hover:border-primary/30 transition-all"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h4 className="font-serif font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
