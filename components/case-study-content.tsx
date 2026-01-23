"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Clock, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  image?: string
  technologies: string[]
  github?: string
  demo?: string
  category: string
  stats: { stars: number; forks: number }
  year: string
  duration: string
  team: string
  status: string
  license: string
  overview: string[]
  challenges: { title: string; description: string }[]
  results: { value: string; label: string }[]
}

interface CaseStudyContentProps {
  project: Project
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative">
            {/* Back button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/#projects">
                <Button variant="ghost" className="mb-8 group">
                  <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Projects
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 capitalize">
              {project.category === "ai" ? "AI / ML" : project.category}
            </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">{project.title}</h1>
              <p className="text-xl text-foreground/70 dark:text-muted-foreground max-w-3xl mb-8">
                {project.description}
              </p>

              {/* Meta info - Now using project data */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-foreground/60 dark:text-muted-foreground">
                  <Calendar size={18} />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 dark:text-muted-foreground">
                  <Clock size={18} />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 dark:text-muted-foreground">
                  <Users size={18} />
                  <span>{project.team}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-primary hover:bg-primary/90 text-background">
                        <Github size={18} className="mr-2" />
                        View Code
                      </Button>
                    </a>
                )}
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Image */}
        <section className="container mx-auto px-6 mb-16">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-3xl overflow-hidden aspect-video bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center"
          >
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-4xl font-bold text-primary">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-foreground/50 dark:text-muted-foreground">Project Screenshot</p>
                </div>
            )}
          </motion.div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2 space-y-12"
            >
              {/* Overview - Now using project data */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Overview</h2>
                <div className="prose prose-lg dark:prose-invert text-foreground/70 dark:text-muted-foreground">
                  {project.overview.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Challenges - Now using project data */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Key Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                      <div key={i} className="glass p-4 rounded-xl">
                        <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
                        <p className="text-sm text-foreground/60 dark:text-muted-foreground">
                          {challenge.description}
                        </p>
                      </div>
                  ))}
                </div>
              </div>

              {/* Results - Now using project data */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {project.results.map((result, i) => (
                      <div key={i} className="glass p-6 rounded-xl text-center">
                        <div className="text-3xl font-serif font-bold text-gradient mb-2">{result.value}</div>
                        <div className="text-sm text-foreground/60 dark:text-muted-foreground">{result.label}</div>
                      </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
            >
              {/* Tech Stack */}
              <div className="glass p-6 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full">
                    {tech}
                  </span>
                  ))}
                </div>
              </div>

              {/* Project Stats - Now using project data */}
              <div className="glass p-6 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-4">Project Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground/60 dark:text-muted-foreground">Category</span>
                    <span className="text-foreground capitalize">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60 dark:text-muted-foreground">Status</span>
                    <span className="text-green-500">{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60 dark:text-muted-foreground">License</span>
                    <span className="text-foreground">{project.license}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
  )
}
