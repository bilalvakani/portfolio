"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm md:max-w-full"
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/11/15-Facts-About-Coding-Every-Kid-Should-Know.png"
                alt="Muhammad Bilal Vakani"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-5 -left-5 w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="px-2 sm:px-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Frontend Developer & UI/UX Enthusiast</h3>
            <p className="text-foreground/80 mb-4 text-sm sm:text-base">
              Hello! I'm Muhammad Bilal Vakani, a passionate Frontend Developer with expertise in creating responsive
              and interactive web applications. I specialize in React, Next.js, Firebase, HTML, and CSS.
            </p>
            <p className="text-foreground/80 mb-4 text-sm sm:text-base">
              With a keen eye for design and a strong foundation in frontend technologies, I strive to build
              user-friendly interfaces that provide exceptional user experiences. I enjoy solving complex problems and
              turning ideas into reality through clean and efficient code.
            </p>
            <p className="text-foreground/80 mb-6 text-sm sm:text-base">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enhancing my skills through continuous learning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">Name:</h4>
                <p className="text-foreground/80 text-sm sm:text-base">Muhammad Bilal Vakani</p>
              </div>
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">Email:</h4>
                <p className="text-foreground/80 text-sm sm:text-base">bilalvakani123@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">From:</h4>
                <p className="text-foreground/80 text-sm sm:text-base">Karachi</p>
              </div>
              <div>
                <h4 className="font-bold mb-1 sm:mb-2">Experience:</h4>
                <p className="text-foreground/80 text-sm sm:text-base">1+ Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

