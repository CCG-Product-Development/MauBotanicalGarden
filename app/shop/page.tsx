"use client"

import { useState } from "react"
import type { Metadata } from "next"
import { Minus, Plus } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Placeholder Product 1",
    price: 0,
    currency: "KES",
  },
  {
    id: 2,
    name: "Placeholder Product 2",
    price: 0,
    currency: "KES",
  },
  {
    id: 3,
    name: "Placeholder Product 3",
    price: 0,
    currency: "KES",
  },
  {
    id: 4,
    name: "Placeholder Product 4",
    price: 0,
    currency: "KES",
  },
  {
    id: 5,
    name: "Placeholder Product 5",
    price: 0,
    currency: "KES",
  },
  {
    id: 6,
    name: "Placeholder Product 6",
    price: 0,
    currency: "KES",
  },
]

function ProductCard({
  product,
  onAddToCart,
}: {
  product: (typeof products)[0]
  onAddToCart: (id: number) => void
}) {
  return (
    <div className="border border-border bg-card">
      <div className="aspect-square bg-[#000]" />
      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold text-card-foreground">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Placeholder text goes here
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-serif text-xl font-bold text-foreground">
            {product.currency} {product.price.toLocaleString()}
          </p>
          <button
            onClick={() => onAddToCart(product.id)}
            className="bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [cart, setCart] = useState<Record<number, number>>({})
  const [showCheckout, setShowCheckout] = useState(false)

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) => {
      const next = (prev[id] || 0) + delta
      if (next <= 0) {
        const { [id]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: next }
    })
  }

  const cartItems = Object.entries(cart).map(([id, qty]) => ({
    product: products.find((p) => p.id === Number(id))!,
    qty,
  }))

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-[#000] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-[#fff] md:text-5xl lg:text-6xl">
            Shop
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#aaa]">
            Placeholder text goes here
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cart / Checkout bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
            {!showCheckout ? (
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {cartItems.reduce((s, i) => s + i.qty, 0)} item(s) in cart
                </span>
                <div className="flex items-center gap-4">
                  <p className="font-serif text-lg font-bold text-foreground">
                    KES {total.toLocaleString()}
                  </p>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Your Cart
                  </h3>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="text-sm text-muted-foreground"
                  >
                    Minimize
                  </button>
                </div>
                <div className="max-h-48 space-y-3 overflow-y-auto">
                  {cartItems.map(({ product, qty }) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between border border-border p-3"
                    >
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          KES {product.price.toLocaleString()} each
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="flex h-7 w-7 items-center justify-center border border-border text-foreground"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm font-semibold text-foreground">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="flex h-7 w-7 items-center justify-center border border-border text-foreground"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <p className="font-serif text-xl font-bold text-foreground">
                    Total: KES {total.toLocaleString()}
                  </p>
                  <a
                    href="https://www.paypal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0070ba] px-8 py-3 text-sm font-bold text-[#fff]"
                  >
                    Pay with PayPal
                  </a>
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  Placeholder text goes here
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
