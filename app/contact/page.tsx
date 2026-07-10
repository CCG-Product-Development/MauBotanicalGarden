import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Us | Mau Summit Botanical Institute (MSBI)",
  description: "Get in touch with Mau Summit Botanical Institute via WhatsApp."
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-natural-cream">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 bg-olive-leaf/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display text-olive-leaf mb-4">
                Contact Us
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              {/* Internship Message */}
              <div className="text-center mb-8">
                <p className="font-body text-deep-charcoal leading-relaxed">
                  Looking to gain experience or build your skills? We offer courses and internship opportunities designed for students like you.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-olive-leaf text-natural-cream rounded-2xl p-8 md:p-10 text-center">
                <MessageCircle className="w-10 h-10 mb-4 mx-auto text-sunroot-gold" />
                <h2 className="text-xl md:text-2xl font-display mb-3">
                  Message us on WhatsApp
                </h2>
                <p className="font-body text-natural-cream mb-1">
                  +254 712 570722
                </p>
                <a
                  href="https://wa.me/254712570722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4"
                >
                  <Button className="bg-sunroot-gold text-deep-charcoal hover:bg-sunroot-gold/90 rounded-full px-6 py-5 font-accent font-semibold">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
