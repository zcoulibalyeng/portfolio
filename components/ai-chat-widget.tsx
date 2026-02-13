"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, Bot, User, CornerDownLeft, MessageSquareOff, TriangleAlert } from "lucide-react"

const suggestedQuestions = [
    "What are Zakaria's top skills?",
    "Tell me about the AI projects",
    "Where has Zakaria worked?",
    "What certifications does Zakaria have?",
]

function getMessageText(message: { parts?: Array<{ type: string; text?: string }> }): string {
    if (!message.parts || !Array.isArray(message.parts)) return ""
    return message.parts
        .filter((p): p is { type: "text"; text: string } => p.type === "text")
        .map((p) => p.text)
        .join("")
}

function FormattedMessage({ text }: { text: string }) {
    const formatted = useMemo(() => {
        const lines = text.split("\n")
        const elements: React.ReactNode[] = []
        let listItems: string[] = []
        let listType: "ul" | "ol" | null = null
        let key = 0

        const flushList = () => {
            if (listItems.length > 0 && listType) {
                const items = listItems.map((item, i) => (
                    <li key={i} className="ml-4 mb-0.5">
                        <InlineFormat text={item} />
                    </li>
                ))
                if (listType === "ul") {
                    elements.push(
                        <ul key={key++} className="list-disc pl-1 my-1.5 space-y-0.5">
                            {items}
                        </ul>
                    )
                } else {
                    elements.push(
                        <ol key={key++} className="list-decimal pl-1 my-1.5 space-y-0.5">
                            {items}
                        </ol>
                    )
                }
                listItems = []
                listType = null
            }
        }

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]
            const trimmed = line.trim()

            // Bullet list item
            const bulletMatch = trimmed.match(/^[-*]\s+(.+)/)
            if (bulletMatch) {
                if (listType === "ol") flushList()
                listType = "ul"
                listItems.push(bulletMatch[1])
                continue
            }

            // Numbered list item
            const numberedMatch = trimmed.match(/^\d+[.)]\s+(.+)/)
            if (numberedMatch) {
                if (listType === "ul") flushList()
                listType = "ol"
                listItems.push(numberedMatch[1])
                continue
            }

            flushList()

            // Empty line
            if (trimmed === "") {
                elements.push(<div key={key++} className="h-2" />)
                continue
            }

            // Heading (### or ##)
            const headingMatch = trimmed.match(/^#{1,3}\s+(.+)/)
            if (headingMatch) {
                elements.push(
                    <p key={key++} className="font-semibold text-foreground mt-2 mb-1">
                        <InlineFormat text={headingMatch[1]} />
                    </p>
                )
                continue
            }

            // Regular paragraph
            elements.push(
                <p key={key++} className="mb-1">
                    <InlineFormat text={trimmed} />
                </p>
            )
        }

        flushList()
        return elements
    }, [text])

    return <div className="space-y-0">{formatted}</div>
}

function InlineFormat({ text }: { text: string }) {
    const parts = useMemo(() => {
        const result: React.ReactNode[] = []
        const regex = /\*\*(.+?)\*\*/g
        let lastIndex = 0
        let match: RegExpExecArray | null = null
        let key = 0

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                result.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>)
            }
            result.push(
                <strong key={key++} className="font-semibold text-primary">
                    {match[1]}
                </strong>
            )
            lastIndex = regex.lastIndex
        }

        if (lastIndex < text.length) {
            result.push(<span key={key++}>{text.slice(lastIndex)}</span>)
        }

        return result
    }, [text])

    return <>{parts}</>
}

export function AiChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState("")
    const [showPulse, setShowPulse] = useState(true)
    const [showEndConfirm, setShowEndConfirm] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const { messages, sendMessage, status, setMessages } = useChat({
        transport: new DefaultChatTransport({ api: "/api/chat" }),
    })

    const isLoading = status === "streaming" || status === "submitted"

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    useEffect(() => {
        if (isOpen) {
            setShowPulse(false)
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [isOpen])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return
        sendMessage({ text: input })
        setInput("")
    }

    const handleSuggestion = (question: string) => {
        sendMessage({ text: question })
    }

    const handleEndChat = () => {
        setMessages([])
        setInput("")
        setShowEndConfirm(false)
    }

    return (
        <>
            {/* Floating Chat Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow cursor-pointer"
                        aria-label="Open AI assistant"
                    >
                        <Sparkles className="w-6 h-6" />
                        {showPulse && (
                            <>
                                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background" />
                            </>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] h-[560px] max-h-[80vh] flex flex-col rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/20"
                        style={{ background: "var(--background)" }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-secondary/30">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm text-foreground leading-tight">AI Assistant</h3>
                                    <p className="text-[11px] text-foreground/50">Ask me about Zakaria</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {/* End Chat Button */}
                                {messages.length > 0 && (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        onClick={() => setShowEndConfirm(true)}
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground/40 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                                        aria-label="End chat"
                                        title="End chat"
                                    >
                                        <MessageSquareOff className="w-4 h-4" />
                                    </motion.button>
                                )}
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-secondary/50 transition-colors cursor-pointer"
                                    aria-label="Close chat"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* End Chat Confirmation Overlay */}
                        <AnimatePresence>
                            {showEndConfirm && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="mx-6 w-full max-w-[300px] bg-secondary/80 border border-border/50 rounded-2xl p-6 shadow-xl"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                                                <TriangleAlert className="w-6 h-6 text-red-400" />
                                            </div>
                                            <h4 className="font-serif text-base font-bold text-foreground mb-1.5">
                                                End this conversation?
                                            </h4>
                                            <p className="text-xs text-foreground/50 leading-relaxed mb-5">
                                                All your previous messages will be cleared and cannot be recovered.
                                            </p>
                                            <div className="flex gap-3 w-full">
                                                <button
                                                    onClick={() => setShowEndConfirm(false)}
                                                    className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-secondary/60 border border-border/40 text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={handleEndChat}
                                                    className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-red-500/15 border border-red-500/20 text-red-400 hover:bg-red-500/25 transition-colors cursor-pointer"
                                                >
                                                    End Chat
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
                            {messages.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Bot className="w-7 h-7 text-primary" />
                                    </div>
                                    <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                                        Hey there!
                                    </h4>
                                    <p className="text-sm text-foreground/50 mb-6 max-w-65 leading-relaxed">
                                        {"I'm Zakaria's AI assistant. Ask me anything about skills, projects, or experience."}
                                    </p>

                                    {/* Suggestions */}
                                    <div className="flex flex-col gap-2 w-full">
                                        {suggestedQuestions.map((q) => (
                                            <button
                                                key={q}
                                                onClick={() => handleSuggestion(q)}
                                                className="w-full text-left px-3.5 py-2.5 text-xs text-foreground/70 bg-secondary/40 hover:bg-secondary/70 border border-border/30 rounded-xl transition-colors cursor-pointer hover:text-foreground"
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                messages.map((message) => {
                                    const text = getMessageText(message)
                                    if (!text) return null
                                    const isUser = message.role === "user"

                                    return (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                                        >
                                            {/* Avatar */}
                                            <div
                                                className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 ${
                                                    isUser ? "bg-primary/15" : "bg-secondary/60"
                                                }`}
                                            >
                                                {isUser ? (
                                                    <User className="w-3.5 h-3.5 text-primary" />
                                                ) : (
                                                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                                                )}
                                            </div>

                                            {/* Bubble */}
                                            <div
                                                className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                                                    isUser
                                                        ? "bg-primary text-primary-foreground rounded-tr-md"
                                                        : "bg-secondary/50 text-foreground/90 border border-border/30 rounded-tl-md"
                                                }`}
                                            >
                                                {isUser ? text : <FormattedMessage text={text} />}
                                            </div>
                                        </motion.div>
                                    )
                                })
                            )}

                            {/* Typing indicator */}
                            {isLoading && messages[messages.length - 1]?.role === "user" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-2.5"
                                >
                                    <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center bg-secondary/60">
                                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div className="px-3.5 py-3 rounded-2xl rounded-tl-md bg-secondary/50 border border-border/30">
                                        <div className="flex gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:0ms]" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:150ms]" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:300ms]" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="px-4 py-3 border-t border-border/50 bg-secondary/20">
                            <form onSubmit={handleSubmit} className="relative">
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about skills, projects..."
                                    disabled={isLoading}
                                    className="w-full pl-4 pr-12 py-3 text-sm bg-secondary/40 border border-border/40 rounded-xl text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors cursor-pointer"
                                    aria-label="Send message"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                </button>
                            </form>
                            <div className="flex items-center justify-center gap-1 mt-2">
                                <CornerDownLeft className="w-3 h-3 text-foreground/25" />
                                <span className="text-[10px] text-foreground/25">Enter to send</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
