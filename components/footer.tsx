"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-serif mb-4">Stay Connected</h3>
        <p className="text-white/80 max-w-md mx-auto mb-8 px-4">
          Subscribe to receive exclusive updates, tips, and promotions straight
          to your inbox. Join our community for expert advice and resources to
          support your care journey.
        </p>
        <form onSubmit={handleSubmit} className="flex items-center justify-center px-4">
          <div className="flex items-center bg-white/10 rounded-full overflow-hidden max-w-md w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address here"
              className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-white/60 outline-none"
            />
            <button
              type="submit"
              className="p-3 bg-primary-dark rounded-full mr-1 hover:bg-primary-light transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Customer Care */}
            <div>
              <h4 className="font-semibold mb-4">Customer care</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-white transition-colors">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Policies */}
            <div>
              <h4 className="font-semibold mb-4">Our policies</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="hover:text-white transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms Of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-semibold mb-4">Contact us</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="tel:+254712570722" className="hover:text-white transition-colors">
                    +254 712 570722
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@mausummit.com"
                    className="hover:text-white transition-colors"
                  >
                    info@mausummit.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-4 text-center text-white/60 text-sm">
        <p>&copy; 2024, Mau Summit Botanical Garden</p>
      </div>
    </footer>
  );
}
