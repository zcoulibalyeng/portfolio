"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Flame, BookOpen, Code2, Lightbulb, ArrowRight } from "lucide-react"

const currentWork = [
    {
        icon: Code2,
        label: "Building",
        title: "AI-Powered Code Review Tool",
        description: "An intelligent system that provides contextual code suggestions and identifies potential bugs",
    },
    {
        icon: BookOpen,
        label: "Learning",
        title: "Rust & WebAssembly",
        description: "Exploring high-performance computing for browser-based ML inference",
    },
    {
        icon: Lightbulb,
        label: "Exploring",
        title: "Multi-Agent Systems",
        description: "Researching autonomous AI agents that collaborate to solve complex problems",
    },
]

export function NowSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="py-16 relative">
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                className="container mx-auto px-6"
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                        <Flame className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm font-medium text-foreground">What I{"'"}m Working On</span>
                    </div>
                    <div className="h-px flex-1 bg-border" />
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {currentWork.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            className="group"
                        >
                            <div className="glass p-6 rounded-2xl h-full hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-xs font-medium uppercase tracking-widest text-primary">{item.label}</span>
                                        <h3 className="font-serif text-lg font-bold mt-1 mb-2 text-foreground">{item.title}</h3>
                                        <p className="text-sm text-foreground/60 dark:text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
