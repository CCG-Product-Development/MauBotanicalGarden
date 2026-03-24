import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&q=80"
          alt="Contact Mau Summit"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get in touch with Mau Summit Botanical Garden
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
                Reach Out to Us
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Looking to gain experience or build your skills? We offer
                courses and internship opportunities designed for students like
                you.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/254712570722"
                      className="text-primary hover:underline"
                    >
                      +254 712 570722
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Message us directly for quick responses
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+254712570722"
                      className="text-primary hover:underline"
                    >
                      +254 712 570722
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available Monday to Saturday, 8am - 6pm EAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@mausummit.com"
                      className="text-primary hover:underline"
                    >
                      info@mausummit.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Location
                    </h3>
                    <p className="text-foreground">Mau Summit, Kenya</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Rift Valley Region
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/254712570722"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#25D366]/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Message us on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="+254..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="courses">Courses & Education</option>
                    <option value="internship">Internship Opportunities</option>
                    <option value="products">Products & Orders</option>
                    <option value="visit">Garden Visits & Tours</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 md:py-24 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
            Opportunities for Students
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Looking to gain experience or build your skills? We offer courses
            and internship opportunities designed for students like you. Our
            programs provide hands-on experience in botanical studies,
            conservation, and natural product development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Internships</h3>
              <p className="text-sm text-muted-foreground">
                Gain practical experience in botanical conservation and herbal
                product development.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Courses</h3>
              <p className="text-sm text-muted-foreground">
                Government-approved TVET curriculum in botanical studies.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Research</h3>
              <p className="text-sm text-muted-foreground">
                Collaborate on research projects focused on East African
                medicinal plants.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
