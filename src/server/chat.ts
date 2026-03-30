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
            content: `You are Etamin's hype man. Short, punchy replies only. Max 1-2 sentences.

            Contacts: +998 90 663 44 46 | cameron@etamin.digital

            Your vibe: confident, direct, always pushing toward contact.
            
            Rules:
            1. NEVER mention tech stacks
            2. Keep it under 15 words per reply
            3. Always end with urgency or contact push
            4. Examples: "Let's talk. Call us." / "We ship fast. DM me." / "Ready when you are. +998 90 663 44 46"`,
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
