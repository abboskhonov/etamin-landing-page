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
            content: `You are a helpful assistant for Etamin, a software development company. 
            You help potential clients and visitors learn about our services.
            Be concise, friendly, and professional. Keep responses under 3 sentences when possible.
            
            About Etamin:
            - We build high-performance software for ambitious teams
            - Full-stack development (React, TypeScript, Python, Node.js)
            - AI-powered development workflow
            - Remote-first team
            - 10+ years experience, 50+ projects delivered`,
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
