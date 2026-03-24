"use client"

import { Star, User } from "lucide-react"

interface ReviewsSectionProps {
  productName: string
}

const reviews = [
  {
    id: 1,
    name: "Jane Doe",
    date: "May 12, 2024",
    rating: 4.9,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    name: "Jane Doe",
    date: "May 12, 2024",
    rating: 4.9,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Jane Doe",
    date: "May 12, 2024",
    rating: 4.9,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
]

export function ReviewsSection({ productName }: ReviewsSectionProps) {
  return (
    <section className="py-12 md:py-16 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
            What the community thinks.
          </h2>
          <p className="text-xl font-semibold text-foreground mb-4">
            Score: 4.9
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            Write a Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">{review.rating}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
