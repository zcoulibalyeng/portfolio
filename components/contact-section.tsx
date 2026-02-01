// "use client"
//
// import type React from "react"
// import { motion, useInView } from "framer-motion"
// import { useRef, useState } from "react"
// import { Send, Mail, MapPin, Linkedin, Github, Twitter, CheckCircle, AlertCircle } from "lucide-react"
// import { personalInfo } from "@/lib/data"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
//
// // Validation types
// interface FormData {
//   name: string
//   email: string
//   subject: string
//   message: string
// }
//
// interface FormErrors {
//   name?: string
//   email?: string
//   subject?: string
//   message?: string
// }
//
//
// export function ContactSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })
//
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   })
//   const [errors, setErrors] = useState<FormErrors>({})
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const [submitError, setSubmitError] = useState("")
//
//   // Validation functions
//   const validateEmail = (email: string): boolean => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     return regex.test(email)
//   }
//
//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {}
//
//     // Name validation
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required"
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters"
//     } else if (formData.name.trim().length > 50) {
//       newErrors.name = "Name must be less than 50 characters"
//     }
//
//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email"
//     }
//
//     // Subject validation
//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required"
//     } else if (formData.subject.trim().length < 3) {
//       newErrors.subject = "Subject must be at least 3 characters"
//     } else if (formData.subject.trim().length > 100) {
//       newErrors.subject = "Subject must be less than 100 characters"
//     }
//
//     // Message validation
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required"
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters"
//     } else if (formData.message.trim().length > 1000) {
//       newErrors.message = "Message must be less than 1000 characters"
//     }
//
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }
//
//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//
//     // Clear error when user starts typing
//     if (errors[name as keyof FormErrors]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }))
//     }
//   }
//
//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setSubmitError("")
//
//     if (!validateForm()) return
//
//     setIsLoading(true)
//
//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
//           name: formData.name.trim(),
//           email: formData.email.trim(),
//           subject: formData.subject.trim(),
//           message: formData.message.trim(),
//           from_name: "Portfolio Contact Form",
//         }),
//       })
//
//       const result = await response.json()
//
//       if (result.success) {
//         setIsSubmitted(true)
//         setFormData({ name: "", email: "", subject: "", message: "" })
//       } else {
//         setSubmitError("Failed to send message. Please try again.")
//       }
//     } catch (error) {
//       setSubmitError("Network error. Please check your connection and try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }
//
//   // Error message component
//   const ErrorMessage = ({ message }: { message?: string }) => {
//     if (!message) return null
//     return (
//         <motion.p
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-red-500 text-sm mt-1 flex items-center gap-1"
//         >
//           <AlertCircle size={14} />
//           {message}
//         </motion.p>
//     )
//   }
//
//   return (
//       <section id="contact" className="py-24 md:py-32 relative">
//         {/* Background accents */}
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
//
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             className="container mx-auto px-6"
//         >
//           {/* Section Header */}
//           <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-16"
//           >
//             <span className="text-primary text-sm font-medium uppercase tracking-widest">Contact</span>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
//               {"Let's "}
//               <span className="text-gradient">Connect</span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-foreground/70 dark:text-muted-foreground text-lg">
//               Have a project in mind or want to discuss opportunities? {"I'd love to hear from you."}
//             </p>
//           </motion.div>
//
//           <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             {/* Contact Info */}
//             <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="space-y-8"
//             >
//               <div>
//                 <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
//                 <p className="text-foreground/70 dark:text-muted-foreground leading-relaxed mb-8">
//                   {
//                     "I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!"
//                   }
//                 </p>
//               </div>
//
//               {/* Contact Details */}
//               <div className="space-y-4">
//                 <motion.a
//                     href={`mailto:${personalInfo.email}`}
//                     className="flex items-center gap-4 glass p-4 rounded-xl hover:border-primary/40 transition-all group hover:shadow-md"
//                     whileHover={{ x: 5 }}
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-primary/15 dark:bg-primary/10 flex items-center justify-center group-hover:bg-primary/25 dark:group-hover:bg-primary/20 transition-colors">
//                     <Mail className="text-primary" size={22} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-foreground/60 dark:text-muted-foreground">Email</p>
//                     <p className="font-medium text-foreground group-hover:text-primary transition-colors">
//                       {personalInfo.email}
//                     </p>
//                   </div>
//                 </motion.a>
//
//                 <motion.div className="flex items-center gap-4 glass p-4 rounded-xl" whileHover={{ x: 5 }}>
//                   <div className="w-12 h-12 rounded-xl bg-primary/15 dark:bg-primary/10 flex items-center justify-center">
//                     <MapPin className="text-primary" size={22} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-foreground/60 dark:text-muted-foreground">Location</p>
//                     <p className="font-medium text-foreground">{personalInfo.location}</p>
//                   </div>
//                 </motion.div>
//               </div>
//
//               {/* Social Links */}
//               <div>
//                 <p className="text-sm text-foreground/60 dark:text-muted-foreground mb-4 font-medium">Find me on</p>
//                 <div className="flex gap-3">
//                   {[
//                     { icon: Github, href: personalInfo.social.github, label: "GitHub" },
//                     { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
//                     { icon: Twitter, href: personalInfo.social.twitter, label: "Twitter" },
//                   ].map(({ icon: Icon, href, label }) => (
//                       <motion.a
//                           key={label}
//                           href={href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-12 h-12 glass rounded-xl flex items-center justify-center text-foreground/50 dark:text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:shadow-md"
//                           whileHover={{ y: -3 }}
//                           aria-label={label}
//                       >
//                         <Icon size={22} />
//                       </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//
//             {/* Contact Form */}
//             <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               <div className="glass p-8 rounded-2xl">
//                 {isSubmitted ? (
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         className="text-center py-12"
//                     >
//                       <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
//                         <CheckCircle className="text-primary" size={32} />
//                       </div>
//                       <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
//                       <p className="text-foreground/60 dark:text-muted-foreground mb-6">
//                         {"Thank you for reaching out. I'll get back to you soon."}
//                       </p>
//                       <Button
//                           onClick={() => setIsSubmitted(false)}
//                           variant="outline"
//                           className="border-primary/50 hover:bg-primary/10"
//                       >
//                         Send Another Message
//                       </Button>
//                     </motion.div>
//                 ) : (
//                     <form onSubmit={handleSubmit} className="space-y-6" noValidate>
//                       {/* Submit Error */}
//                       {submitError && (
//                           <motion.div
//                               initial={{ opacity: 0, y: -10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm flex items-center gap-2"
//                           >
//                             <AlertCircle size={18} />
//                             {submitError}
//                           </motion.div>
//                       )}
//
//                       <div className="grid sm:grid-cols-2 gap-4">
//                         <div>
//                           <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
//                             Name
//                           </label>
//                           <Input
//                               id="name"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               placeholder="John Doe"
//                               className={`bg-secondary/50 border-border focus:border-primary text-foreground placeholder:text-foreground/40 ${
//                                   errors.name ? "border-red-500 focus:border-red-500" : ""
//                               }`}
//                           />
//                           <ErrorMessage message={errors.name} />
//                         </div>
//                         <div>
//                           <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
//                             Email
//                           </label>
//                           <Input
//                               id="email"
//                               name="email"
//                               type="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               placeholder="john@example.com"
//                               className={`bg-secondary/50 border-border focus:border-primary text-foreground placeholder:text-foreground/40 ${
//                                   errors.email ? "border-red-500 focus:border-red-500" : ""
//                               }`}
//                           />
//                           <ErrorMessage message={errors.email} />
//                         </div>
//                       </div>
//
//                       <div>
//                         <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
//                           Subject
//                         </label>
//                         <Input
//                             id="subject"
//                             name="subject"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             placeholder="What's this about?"
//                             className={`bg-secondary/50 border-border focus:border-primary text-foreground placeholder:text-foreground/40 ${
//                                 errors.subject ? "border-red-500 focus:border-red-500" : ""
//                             }`}
//                         />
//                         <ErrorMessage message={errors.subject} />
//                       </div>
//
//                       <div>
//                         <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
//                           Message
//                         </label>
//                         <Textarea
//                             id="message"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             placeholder="Tell me about your project or opportunity..."
//                             rows={5}
//                             className={`bg-secondary/50 border-border focus:border-primary resize-none text-foreground placeholder:text-foreground/40 ${
//                                 errors.message ? "border-red-500 focus:border-red-500" : ""
//                             }`}
//                         />
//                         <div className="flex justify-between items-center mt-1">
//                           <ErrorMessage message={errors.message} />
//                           <span className={`text-xs ${formData.message.length > 1000 ? "text-red-500" : "text-foreground/40"}`}>
//                         {formData.message.length}/1000
//                       </span>
//                         </div>
//                       </div>
//
//                       <Button
//                           type="submit"
//                           disabled={isLoading}
//                           className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 font-semibold shadow-lg flex items-center justify-center"
//                       >
//                         {isLoading ? (
//                             <motion.div
//                                 animate={{ rotate: 360 }}
//                                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                                 className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
//                             />
//                         ) : (
//                             <span className="flex items-center justify-center">
//                               Send Message
//                               <Send size={18} className="ml-2" />
//                             </span>
//                         )}
//                       </Button>
//
//                     </form>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>
//   )
// }


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
