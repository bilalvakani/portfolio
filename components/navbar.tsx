"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const navbar = () => {
    
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    useEffect(() => {
        setMounted(true)
      }, [])
    
      const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
      }
    
      // Prevent scrolling when mobile menu is open
      useEffect(() => {
        if (mobileMenuOpen) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = "auto"
        }
    
        return () => {
          document.body.style.overflow = "auto"
        }
      }, [mobileMenuOpen])
     // Handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: "smooth" })

      // Update URL without page reload
      window.history.pushState(null, "", href)
    }
  }

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#home"
        //   onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl font-bold text-primary relative z-50"
        >
          <span className="text-primary">Bilal</span>
          <span className="text-primary/70">Vakani</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                //   onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
</div>
        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2 relative z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="relative z-50"
          >
            {mounted && theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          {/* <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" className="relative z-50">
            {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button> */}
        </div>
      

        </div>
        {/* <div
        className={`fixed inset-0 bg-background md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 z-40" : "opacity-0 -z-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full  justify-center items-center p-8 pt-20">
          <ul className="flex flex-col space-y-6 items-center">
            {navItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                <a
                  href={item.href}
                  className="block py-3 px-4 text-xl font-medium text-foreground hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}

        


</nav>
  )
}

export default navbar