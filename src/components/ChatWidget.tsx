import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Loader2, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { chatWithAI } from "@/server/chat"

interface Message {
  role: "user" | "assistant"
  content: string
}

const suggestedQuestions = ["Start a project", "Get pricing", "Book a call"]

export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Let's build something! 🚀",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesContainerRef.current && messagesEndRef.current) {
      // Scroll only within the container, not the whole page
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    // Only scroll if there are messages beyond the initial greeting
    if (messages.length > 1) {
      scrollToBottom()
    }
  }, [messages, isLoading])

  const handleSend = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = { role: "user", content }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const result = await chatWithAI({
        data: { messages: [...messages, userMessage] },
      })

      if (result.success) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: result.message },
        ])
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I apologize, but I'm having trouble responding right now.",
          },
        ])
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble responding right now.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(input)
  }

  return (
    <div className="flex h-[500px] flex-col border border-border bg-background shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground">
          <Bot className="size-4" />
        </div>
        <div>
          <p className="text-sm font-medium">Ask about Etamin</p>
          <p className="text-xs text-muted-foreground">AI Assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="flex-1 space-y-4 overflow-y-auto p-4"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${
              message.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {message.role === "user" ? (
                <User className="size-4" />
              ) : (
                <Bot className="size-4" />
              )}
            </div>
            <div
              className={`max-w-[80%] text-sm leading-relaxed ${
                message.role === "user"
                  ? "bg-primary px-4 py-2 text-primary-foreground"
                  : "bg-muted px-4 py-2 text-foreground"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-muted text-muted-foreground">
              <Bot className="size-4" />
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="border-t border-border px-4 py-3">
          <p className="mb-2 text-xs text-muted-foreground">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                onClick={() => handleSend(question)}
                className="border border-border bg-background px-3 py-1 text-xs transition-colors hover:bg-muted"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contact Info Banner */}
      <div className="flex items-center justify-center gap-4 border-t border-border bg-muted/30 px-4 py-2 text-xs">
        <a
          href="tel:+998906634446"
          className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone className="size-3" />
          <span>+998 90 663 44 46</span>
        </a>
        <span className="text-border">|</span>
        <a
          href="mailto:cameron@etamin.digital"
          className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="size-3" />
          <span>cameron@etamin.digital</span>
        </a>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-border bg-muted/50 p-4"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || isLoading}
          className="h-9 w-9 shrink-0"
        >
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  )
}
