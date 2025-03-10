"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  BrainCircuitIcon, 
  CodeIcon, 
  LayoutDashboardIcon, 
  ServerIcon, 
  DatabaseIcon 
} from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Frontend",
      icon: <LayoutDashboardIcon className="h-6 w-6" />,
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
    },
    {
      category: "UI Frameworks",
      icon: <CodeIcon className="h-6 w-6" />,
      items: ["Tailwind CSS", "Material UI", "Bootstrap", "Styled Components","Shadcn"],
    },
    {
      category: "Backend Integration",
      icon: <ServerIcon className="h-6 w-6" />,
      items: ["RESTful APIs", "GraphQL", "Firebase", "Node.js"],
    },
    {
      category: "Database",
      icon: <DatabaseIcon className="h-6 w-6" />,
      items: ["Firebase Firestore", "MongoDB", "MySQL"],
    },
    {
      category: "Tools & Others",
      icon: <BrainCircuitIcon className="h-6 w-6" />,
      items: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design"],
    },
   
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-foreground/80">
            Here&apos;s what I&apos;m good at. I&apos;m continuously learning and expanding my skill set.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-4 sm:p-6 shadow-md border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary mr-3 sm:mr-4">{skill.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-1 sm:space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-foreground/80 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto px-2 sm:px-0">
            {[
              { name: "React & Next.js", percentage: 90 },
              { name: "HTML & CSS", percentage: 95 },
              { name: "JavaScript", percentage: 85 },
              { name: "Firebase", percentage: 80 },
              { name: "UI/UX Design", percentage: 75 },
              { name: "Responsive Design", percentage: 90 },
            ].map((skill, index) => (
              <div key={index} className="mb-3 sm:mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-primary text-sm sm:text-base">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 sm:h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="bg-primary h-2 sm:h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

