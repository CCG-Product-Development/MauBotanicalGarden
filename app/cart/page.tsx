"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  const getPrice = (category: string) => {
    const isTeaProduct = category.includes('teas')
    return isTeaProduct 
      ? { usd: 6, kes: 775 }
      : { usd: 1.29, kes: 167 }
  }

  return (
    <div className="min-h-screen bg-natural-cream">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-display text-olive-leaf mb-8">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-olive-leaf/30 mx-auto mb-4" />
            <p className="font-body text-deep-charcoal mb-6">Your cart is empty</p>
            <Link href="/shop">
              <Button className="bg-olive-leaf hover:bg-olive-leaf/90 text-natural-cream font-accent">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => {
                const price = getPrice(item.product.category)
                return (
                  <div 
                    key={item.product.id}
                    className="bg-natural-cream border border-border rounded-xl p-4 flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="relative w-24 h-24 bg-olive-leaf/10 rounded-lg overflow-hidden flex-shrink-0">
                      {item.product.image ? (
                        <Image 
                          src={item.product.image} 
                          alt={item.product.name}
                          fill
                          className="object-contain p-2"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-olive-leaf text-xl font-display">{item.product.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <Link href={`/shop/${item.product.slug}`}>
                        <h3 className="font-accent font-semibold text-deep-charcoal hover:text-olive-leaf transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-xs font-body text-evergreen mb-2">
                        Code: {item.product.productCode}
                      </p>
                      <p className="font-accent font-semibold text-olive-leaf">
                        KES {price.kes} / ${price.usd.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end justify-between">
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-olive-leaf/10 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-accent font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-olive-leaf/10 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}

              <button 
                onClick={clearCart}
                className="text-sm font-accent text-red-500 hover:text-red-700 transition-colors"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-natural-cream border border-border rounded-xl p-6 sticky top-4">
                <h2 className="text-xl font-display text-olive-leaf mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  {items.map((item) => {
                    const price = getPrice(item.product.category)
                    return (
                      <div key={item.product.id} className="flex justify-between text-sm font-body">
                        <span className="text-deep-charcoal">
                          {item.product.name} x {item.quantity}
                        </span>
                        <span className="text-evergreen">
                          ${(price.usd * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-accent font-semibold">
                    <span className="text-deep-charcoal">Total</span>
                    <span className="text-olive-leaf">${totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-evergreen mt-1">Free shipping on all orders</p>
                </div>

                <Button className="w-full bg-sunroot-gold hover:bg-sunroot-gold/90 text-deep-charcoal font-accent font-semibold">
                  Proceed to Checkout
                </Button>

                <Link href="/shop" className="block mt-4">
                  <Button variant="outline" className="w-full border-olive-leaf text-olive-leaf hover:bg-olive-leaf hover:text-natural-cream font-accent">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
