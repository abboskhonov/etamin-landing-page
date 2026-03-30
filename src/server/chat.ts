import { createServerFn } from "@tanstack/react-start"
import { zodValidator } from "@tanstack/zod-adapter"
import { z } from "zod"
import Groq from "groq-sdk"

const chatSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    })
  ),
})

export const chatWithAI = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(chatSchema))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY

    if (!apiKey) {
      return {
        success: false,
        message:
          "Chat service is currently unavailable. Please try again later.",
      }
    }

    const groq = new Groq({
      apiKey,
    })

    try {
      const completion = await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [
          {
            role: "system",
            content: `You are a hype assistant for Etamin, a software dev studio that ships fast. 
            Your vibe: energetic, confident, concise. Keep it under 2 sentences. No boring tech specs.
            
            Your ONE job: Get them to book a call or start a conversation. Always end with urgency.
            
            About Etamin:
            - We build AI-powered software that actually works
            - Fast delivery (weeks not months)
            - Based in Namangan, working globally
            - 2+ years, 50+ projects shipped
            
            Rules:
            1. NEVER list tech stacks (React, Node, etc.) unless they specifically ask
            2. Focus on results: speed, quality, AI advantage
            3. Always push toward contact: "Let's hop on a call" or "Drop your project details"
            4. Be cool but professional - no corporate speak`,
          },
          ...data.messages,
        ],
        max_tokens: 500,
      })

      return {
        success: true,
        message:
          completion.choices[0]?.message?.content ||
          "I apologize, but I couldn't generate a response.",
      }
    } catch (error) {
      console.error("Chat error:", error)
      return {
        success: false,
        message:
          "I apologize, but I'm having trouble responding right now. Please try again later.",
      }
    }
  })
