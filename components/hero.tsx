// "use client"
// import React from 'react'

// import { useEffect, useRef, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"
// import {  GithubIcon, LinkedinIcon, FileTextIcon } from "lucide-react"
// import CVViewer from "./cv-viewer"

// const Hero = () => {

//     const cursorRef = useRef<HTMLDivElement>(null)
//     const [showCV, setShowCV] = useState(false)
  
//     useEffect(() => {
//       const handleMouseMove = (e: MouseEvent) => {
//         if (cursorRef.current) {
//           cursorRef.current.style.left = `${e.clientX}px`
//           cursorRef.current.style.top = `${e.clientY}px`
//         }
//       }
  
//       window.addEventListener("mousemove", handleMouseMove)
//       return () => {
//         window.removeEventListener("mousemove", handleMouseMove)
//       }
//     }, [])
  
//     // Prevent scrolling when CV modal is open
//     useEffect(() => {
//       if (showCV) {
//         document.body.style.overflow = "hidden"
//       } else {
//         document.body.style.overflow = "auto"
//       }
  
//       return () => {
//         document.body.style.overflow = "auto"
//       }
//     }, [showCV])
  
//   return (
// <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 overflow-hidden"
//     >
//       <div
//         ref={cursorRef}
//         className="hidden md:block fixed w-40 h-40 rounded-full bg-primary/10 filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
//       />

//       <div className="container mx-auto px-4 z-10">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//             <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-primary mb-2">Hello, I'm</h2>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
//               Muhammad Bilal Vakani
//             </h1>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80 mb-4 sm:mb-6">
//               Frontend Developer
//             </h3>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             className="mb-6 sm:mb-8 text-foreground/70 px-2 sm:px-0"
//           >
//             <p className="text-sm sm:text-base md:text-lg">
//               I build exceptional and accessible digital experiences for the web. Specializing in React, Next.js, and
//               modern frontend technologies.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-4"
//           >
//             <Button size="lg" className="w-full sm:w-auto">
//               View Projects
//             </Button>
//             <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
//               <a href="#contact">Contact Me</a>
//             </Button>
//             <Button
//               variant="secondary"
//               size="lg"
//               className="w-full sm:w-auto flex items-center gap-2"
//               onClick={() => setShowCV(true)}
//             >
//               <FileTextIcon className="h-4 w-4" />
//               Show CV
//             </Button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1 }}
//             className="mt-8 flex justify-center space-x-4"
//           >
//             <Button variant="ghost" size="icon" asChild>
//               <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//                 <GithubIcon className="h-5 w-5" />
//               </a>
//             </Button>
//             <Button variant="ghost" size="icon" asChild>
//               <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 <LinkedinIcon className="h-5 w-5" />
//               </a>
//             </Button>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 1.2 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
//         >
//           {/* <Button variant="ghost" size="icon" asChild className="rounded-full" aria-label="Scroll down">
//             <a href="#about">
//               <ArrowDownIcon className="h-5 w-5" />
//             </a>
//           </Button> */}
//         </motion.div>
//       </div>

//       {/* Background elements */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
//       </div>

//       {/* CV Viewer Component */}
//       <CVViewer isOpen={showCV} onClose={() => setShowCV(false)} />
//     </section>
// )
// }

// export default Hero



"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, FileTextIcon } from "lucide-react"
import CVViewer from "./cv-viewer"

const Hero = () => {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [showCV, setShowCV] = useState(false)

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${e.clientX}px`
          cursorRef.current.style.top = `${e.clientY}px`
        }
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }, [])

    // Prevent scrolling when CV modal is open
    useEffect(() => {
      if (showCV) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }

      return () => {
        document.body.style.overflow = "auto"
      }
    }, [showCV])

    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 overflow-hidden"
      >
        <div
          ref={cursorRef}
          className="hidden md:block fixed w-40 h-40 rounded-full bg-primary/10 filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
        />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-primary mb-2">Hello, I&apos;m</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Muhammad Bilal Vakani
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80 mb-4 sm:mb-6">
                Frontend Developer
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 sm:mb-8 text-foreground/70 px-2 sm:px-0"
            >
              <p className="text-sm sm:text-base md:text-lg">
                I build exceptional and accessible digital experiences for the web. Specializing in React, Next.js, and
                modern frontend technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto">
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto flex items-center gap-2"
                onClick={() => setShowCV(true)}
              >
                <FileTextIcon className="h-4 w-4" />
                Show CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 flex justify-center space-x-4"
            >
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            {/* <Button variant="ghost" size="icon" asChild className="rounded-full" aria-label="Scroll down">
              <a href="#about">
                <ArrowDownIcon className="h-5 w-5" />
              </a>
            </Button> */}
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
        </div>

        {/* CV Viewer Component */}
        <CVViewer isOpen={showCV} onClose={() => setShowCV(false)} />
      </section>
    )
}

export default Hero
