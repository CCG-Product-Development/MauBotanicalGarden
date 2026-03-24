import Link from "next/link"
import { Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-4">
            Stay Connected
          </h3>
          <p className="text-primary-foreground/80 mb-8 text-sm md:text-base">
            Subscribe to receive exclusive updates, tips, and promotions
            straight to your inbox. Join our community for expert advice and
            resources to support your care journey.
          </p>
          <form className="flex items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address here"
              className="flex-1 px-4 py-3 rounded-l-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40"
            />
            <button
              type="submit"
              className="bg-secondary hover:bg-secondary/90 px-4 py-3 rounded-r-full transition-colors"
              aria-label="Subscribe"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-primary-foreground/20 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Customer care</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-primary-foreground">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary-foreground">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our policies</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="#" className="hover:text-primary-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground">
                  Terms Of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>+254 712 570722</li>
              <li>info@mausummit.com</li>
              <li>Mau Summit, Kenya</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20 py-4 text-center text-sm text-primary-foreground/60">
        <p>&copy; 2024 Mau Summit Botanical Garden. All rights reserved.</p>
      </div>
    </footer>
  )
}
