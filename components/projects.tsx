"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Firebase.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["react",  "firebase"],
      github: "#",
      demo: "#",
      tags: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["react", "firebase"],
      github: "#",
      demo: "#",
      tags: ["React", "Firebase", "CSS"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website with animations and dark mode support.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["nextjs", "html"],
      github: "#",
      demo: "#",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["react", "html"],
      github: "#",
      demo: "#",
      tags: ["React", "API Integration", "CSS"],
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A blog platform with authentication and content management.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["nextjs", "firebase"],
      github: "#",
      demo: "#",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "A dashboard for monitoring social media metrics and engagement.",
      image: "/placeholder.svg?height=400&width=600",
      category: ["react", "html"],
      github: "#",
      demo: "#",
      tags: ["React", "Chart.js", "CSS"],
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category.includes(filter))

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
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and expertise in frontend development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 px-2"
        >
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-full text-xs sm:text-sm py-1 px-3 h-auto sm:h-9"
          >
            All
          </Button>
          <Button
            variant={filter === "react" ? "default" : "outline"}
            onClick={() => setFilter("react")}
            className="rounded-full text-xs sm:text-sm py-1 px-3 h-auto sm:h-9"
          >
            React
          </Button>
          <Button
            variant={filter === "nextjs" ? "default" : "outline"}
            onClick={() => setFilter("nextjs")}
            className="rounded-full text-xs sm:text-sm py-1 px-3 h-auto sm:h-9"
          >
            Next.js
          </Button>
          <Button
            variant={filter === "firebase" ? "default" : "outline"}
            onClick={() => setFilter("firebase")}
            className="rounded-full text-xs sm:text-sm py-1 px-3 h-auto sm:h-9"
          >
            Firebase
          </Button>
          <Button
            variant={filter === "html" ? "default" : "outline"}
            onClick={() => setFilter("html")}
            className="rounded-full text-xs sm:text-sm py-1 px-3 h-auto sm:h-9"
          >
            HTML/CSS
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-card rounded-lg overflow-hidden shadow-md border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  <Button size="sm" variant="secondary" asChild className="h-8 w-8 sm:h-10 sm:w-10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                    >
                      <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild className="h-8 w-8 sm:h-10 sm:w-10">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                      <ExternalLinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <a href="https://github.com/bilalvakani/" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

