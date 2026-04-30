"use client";

import { useState } from "react";
import { useCart } from "./cart-context";

declare global {
  interface Window {
    FlutterwaveCheckout: (config: Record<string, unknown>) => void;
  }
}

export default function CartBar() {
  const { cart, totalItems, total, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  if (totalItems === 0) return null;

  async function handleCheckout() {
    if (!email) return;

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, email }),
    });

    if (!res.ok) return;
    const { amount, tx_ref } = await res.json();

    window.FlutterwaveCheckout({
      public_key: process.env.NEXT_PUBLIC_FLWSECK_TEST_PUB,
      tx_ref,
      amount,
      currency: "USD",
      payment_options: "card, ussd",
      customer: { email, name: "Customer" },
      customizations: {
        title: "Mau Summit Botanical Garden",
        description: "Payment for herbs, teas & spices",
      },
      callback: () => {
        clearCart();
        setShowModal(false);
        setEmail("");
      },
      onclose: () => {},
    });
  }

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white px-6 py-4 rounded-2xl flex items-center gap-6 shadow-2xl text-sm z-50 whitespace-nowrap">
        <span>{totalItems} item{totalItems !== 1 ? "s" : ""} in cart</span>
        <span className="font-bold">${total.toFixed(2)}</span>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#2d6a35] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#235229] transition-colors"
        >
          Checkout
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">
            <h2 className="text-xl font-serif mb-2">Complete your order</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Enter your email to proceed to payment.
            </p>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleCheckout()}
              className="w-full border border-border rounded-lg px-4 py-2.5 mb-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-border px-4 py-2.5 rounded-lg text-sm hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCheckout}
                disabled={!email}
                className="flex-1 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 transition-colors"
              >
                Pay ${total.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
