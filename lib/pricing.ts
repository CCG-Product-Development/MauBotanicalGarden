import type { Product } from "./products"

export const CURRENCIES = ["KES", "USD"] as const
export type Currency = (typeof CURRENCIES)[number]

export function isCurrency(value: unknown): value is Currency {
  return typeof value === "string" && (CURRENCIES as readonly string[]).includes(value)
}

const TIERS = {
  tea: { KES: 775, USD: 6 },
  botanical: { KES: 167, USD: 1.29 },
} satisfies Record<string, Record<Currency, number>>

export function priceFor(category: Product["category"], currency: Currency): number {
  return TIERS[category.includes("teas") ? "tea" : "botanical"][currency]
}

export function formatPrice(amount: number, currency: Currency): string {
  return currency === "KES"
    ? `KES ${Math.round(amount).toLocaleString("en-KE")}`
    : `$${amount.toFixed(2)}`
}
