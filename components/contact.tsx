"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Contact Form Message*
Name: ${formState.name}
Email: ${formState.email}
Subject: ${formState.subject}
Message: ${formState.message}
    `.trim()

    // Your WhatsApp number (include country code without + symbol)
    const whatsappNumber = "923370352040" // Replace with your actual number if different

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')

    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      title: "Email",
      value: "bilalvakani123@example.com",
      link: "mailto:bilalvakani123@example.com",
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      title: "Phone",
      value: "03370352040",
      link: "tel:+923370352040",
    },
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      title: "Location",
      value: "karachi",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Feel free to contact me for any project or collaboration. I&apos;m always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-2 sm:px-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary mr-3 sm:mr-4">{info.icon}</div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10">
                <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((platform, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="rounded-full text-xs sm:text-sm py-1 px-2 h-auto"
                      asChild
                    >
                      <a href="#" aria-label={platform}>
                        {platform}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                </div>
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="subject" className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="text-sm sm:text-base h-9 sm:h-10"
                  />
                </div>
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..."
                    rows={4}
                    required
                    className="text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  size="default"
                  className="w-full md:w-auto text-sm sm:text-base h-9 sm:h-10"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <SendIcon className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

