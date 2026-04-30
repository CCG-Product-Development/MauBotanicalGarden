import { products } from "@/lib/products";

// Prices live on the server — clients cannot tamper with amounts
const PRICES = Object.fromEntries(products.map(p => [p.id, p.price]));

export async function POST(req: Request) {
  const { cart, email }: { cart: Record<string, number>; email: string } = await req.json();

  if (!email) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }

  const amount = Object.entries(cart).reduce((sum, [id, qty]) => {
    const price = PRICES[id];
    if (!price || qty <= 0) return sum;
    return sum + price * qty;
  }, 0);

  if (amount <= 0) {
    return Response.json({ error: "Invalid cart" }, { status: 400 });
  }

  const tx_ref = `mau-${crypto.randomUUID()}`;

  return Response.json({ amount, tx_ref, email });
}
