"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQSectionProps {
  productName: string
}

const faqs = [
  {
    id: 1,
    question: "Is it safe?",
    answer:
      "Yes, all our products are made from 100% natural ingredients and are safe for regular consumption. However, we recommend consulting with a healthcare provider if you have any specific health conditions or are taking medications.",
  },
  {
    id: 2,
    question: "What is the role of...",
    answer:
      "Each ingredient in our blends serves a specific purpose, carefully selected based on traditional knowledge and modern research to provide maximum health benefits.",
  },
  {
    id: 3,
    question: "How much ____ is needed by the body?",
    answer:
      "The recommended daily intake varies by individual. Generally, 1-2 cups per day is sufficient for most people. Listen to your body and adjust as needed.",
  },
  {
    id: 4,
    question: "How do I know that I need ____?",
    answer:
      "Common signs that you may benefit from our products include fatigue, digestive issues, or simply wanting to support your overall wellness naturally.",
  },
  {
    id: 5,
    question: "What symptoms indicate ____?",
    answer:
      "Various symptoms can indicate the need for herbal support. Please consult with a healthcare professional for personalized advice.",
  },
]

export function FAQSection({ productName }: FAQSectionProps) {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-8">
          Want to know more?
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-border pb-4">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between py-2 text-left"
              >
                <span className="font-medium text-foreground">
                  {String(index + 1).padStart(2, "0")}. {faq.question}
                </span>
                <span
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    openId === faq.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  {openId === faq.id ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>
              {openId === faq.id && (
                <div className="pt-2 pb-2">
                  <p className="text-muted-foreground text-sm leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
