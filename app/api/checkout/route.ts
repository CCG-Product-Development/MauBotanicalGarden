import { products } from "@/lib/products"
import { isCurrency, priceFor } from "@/lib/pricing"

const productsById = new Map(products.map(p => [p.id, p]))

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_QTY = 100

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Malformed request" }, { status: 400 })
  }

  const { cart, email, currency } = (body ?? {}) as {
    cart?: unknown
    email?: unknown
    currency?: unknown
  }

  if (typeof email !== "string" || !EMAIL.test(email)) {
    return Response.json({ error: "A valid email is required" }, { status: 400 })
  }

  if (!isCurrency(currency)) {
    return Response.json({ error: "Unsupported currency" }, { status: 400 })
  }

  if (cart === null || typeof cart !== "object" || Array.isArray(cart)) {
    return Response.json({ error: "Invalid cart" }, { status: 400 })
  }

  // Amounts come from the server catalogue; the client sends quantities only, never prices.
  const amount = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = productsById.get(id)
    if (!product) return sum
    if (typeof qty !== "number" || !Number.isInteger(qty) || qty <= 0 || qty > MAX_QTY) return sum
    return sum + priceFor(product.category, currency) * qty
  }, 0)

  if (amount <= 0) {
    return Response.json({ error: "Invalid cart" }, { status: 400 })
  }

  const total = currency === "KES" ? Math.round(amount) : Math.round(amount * 100) / 100

  return Response.json({
    amount: total,
    currency,
    email,
    tx_ref: `mau-${crypto.randomUUID()}`,
  })
}
