"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Github, Twitter, ArrowUpRight, Sparkles } from "lucide-react"
import { personalInfo } from "@/lib/data"

const socialLinks = [
  {
    name: "GitHub",
    description: "Check out my open source projects and contributions",
    icon: Github,
    href: personalInfo.social.github,
    color: "group-hover:bg-[#333] dark:group-hover:bg-[#f0f0f0]",
    iconColor: "group-hover:text-white dark:group-hover:text-[#333]",
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    icon: Linkedin,
    href: personalInfo.social.linkedin,
    color: "group-hover:bg-[#0A66C2]",
    iconColor: "group-hover:text-white",
  },
  {
    name: "Twitter",
    description: "Follow me for tech insights and updates",
    icon: Twitter,
    href: personalInfo.social.twitter,
    color: "group-hover:bg-[#1DA1F2]",
    iconColor: "group-hover:text-white",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            className="container mx-auto px-6"
        >
          {/* Section Header */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Contact</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              {"Let's "}
              <span className="text-gradient">Connect</span>
            </h2>
            <p className="max-w-2xl mx-auto text-foreground/70 dark:text-muted-foreground text-lg leading-relaxed">
              {"I'm always open to new opportunities, collaborations, and conversations. Pick your preferred platform and let's chat!"}
            </p>
          </motion.div>

          {/* Social Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                  <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="group relative"
                  >
                    <div className="glass p-8 rounded-2xl h-full flex flex-col items-center text-center transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-2">
                      {/* Icon Container */}
                      <div
                          className={`w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 ${social.color}`}
                      >
                        <social.icon
                            className={`w-8 h-8 text-primary transition-all duration-300 ${social.iconColor}`}
                        />
                      </div>

                      {/* Content */}
                      <h3 className="font-serif text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                        {social.name}
                        <ArrowUpRight
                            className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-primary"
                        />
                      </h3>
                      <p className="text-sm text-foreground/60 dark:text-muted-foreground leading-relaxed">
                        {social.description}
                      </p>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                    </div>
                  </motion.a>
              ))}
            </div>

            {/* CTA Message */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-3 glass px-6 py-4 rounded-full">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-foreground/80 dark:text-muted-foreground">
                Looking forward to hearing from you!
              </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
  )
}
