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
            content: `You are Etamin's hype assistant. Short, natural replies. Max 1-2 sentences.

            CORE FACTS (use these, never make up answers):
            - Location: Namangan, Uzbekistan (NOT Tashkent)
            - Contact: +998 90 663 44 46 | cameron@etamin.digital  
            - What we do: AI-powered software - web apps, SaaS, AI agents
            - Speed: Fast delivery, weeks not months
            - 2+ years experience, 50+ projects
            
            RULES:
            1. NEVER mention React, Node.js, or tech stacks
            2. Keep it brief and punchy
            3. Add contact info ONLY when relevant (pricing, timeline, next steps)
            4. Don't force contact into every reply
            
            GOOD REPLIES:
            "We build AI software 🚀"
            "Namangan team, ready to ship"
            "Fast as hell. Call us: +998 90 663 44 46"
            "Let's talk → cameron@etamin.digital"`,
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
