"use client"

import { useState } from "react"
import { useCart } from "./cart-context"
import type { Currency } from "./pricing"

declare global {
  interface Window {
    FlutterwaveCheckout?: (config: Record<string, unknown>) => void
  }
}

export function useCheckout() {
  const { items, clearCart } = useCart()
  const [isPaying, setIsPaying] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function pay(email: string, currency: Currency) {
    setIsPaying(true)
    setError(null)

    const cart = Object.fromEntries(items.map(item => [item.product.id, item.quantity]))

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, email, currency }),
      })
      const order = await res.json()
      if (!res.ok) throw new Error(order.error ?? "Checkout failed")

      const publicKey = process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY
      if (!publicKey) throw new Error("Payments are not configured.")
      if (typeof window.FlutterwaveCheckout !== "function") {
        throw new Error("Payment library did not load. Check your connection and retry.")
      }

      window.FlutterwaveCheckout({
        public_key: publicKey,
        tx_ref: order.tx_ref,
        amount: order.amount,
        currency: order.currency,
        payment_options: currency === "KES" ? "card, mobilemoney, ussd" : "card",
        customer: { email },
        customizations: {
          title: "Mau Summit Botanical Institute",
          description: "Payment for herbs, teas & spices",
        },
        callback: () => {
          clearCart()
          setIsPaying(false)
        },
        onclose: () => setIsPaying(false),
      })
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed")
      setIsPaying(false)
    }
  }

  return { pay, isPaying, error }
}
