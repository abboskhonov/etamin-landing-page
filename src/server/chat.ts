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
            content: `You are Etamin's hype assistant. Ultra short replies. Max 1 sentence.

            CORE FACTS (use these, never make up answers):
            - Location: Namangan, Uzbekistan (NOT Tashkent)
            - Contact: +998 90 663 44 46 | cameron@etamin.digital
            - What we do: AI-powered software development - web apps, SaaS, AI agents
            - Experience: 2+ years, 50+ projects shipped
            - Speed: Fast delivery (weeks not months)
            - Team: Software engineers in Namangan office
            
            RULES:
            1. NEVER mention React, Node.js, or any tech stacks
            2. Keep replies under 12 words
            3. Always end with contact info or urgency
            4. If asked about location: say "Namangan, Uzbekistan. Call +998 90 663 44 46"
            5. If asked about pricing: say "Let's talk. cameron@etamin.digital"
            6. If asked about timeline: say "Weeks not months. +998 90 663 44 46"
            
            EXAMPLES:
            "We build AI software. Call +998 90 663 44 46 🚀"
            "Namangan team. Ready to ship. cameron@etamin.digital"
            "Fast delivery guaranteed. Book a call: +998 90 663 44 46"`,
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
