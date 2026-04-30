"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, Minus, Plus, ChevronDown } from "lucide-react";
import { getProductById, products } from "@/lib/products";
import { useCart } from "@/components/cart-context";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    name: "Jane Doe",
    date: "May 12, 2024",
    rating: 4.9,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 2,
    name: "Jane Doe",
    date: "May 12, 2024",
    rating: 4.9,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    name: "Jane Doe",
    date: "May 12, 2024",
    rating: 4.9,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const faqs = [
  { id: 1, question: "Is it safe?", answer: "Yes, all our products are made from natural, organic ingredients that have been used traditionally for centuries. We recommend consulting with a healthcare professional if you have specific health concerns." },
  { id: 2, question: "What is the role of......", answer: "Our teas contain carefully selected herbs known for their therapeutic properties. Each blend is crafted to target specific health benefits." },
  { id: 3, question: "How much ______ is needed by the body?", answer: "The recommended dosage varies by product. Please refer to the packaging or consult with our experts for personalized guidance." },
  { id: 4, question: "How do I know that I need ______?", answer: "Listen to your body's signals. If you're experiencing specific symptoms, our teas may help support your wellness journey." },
  { id: 5, question: "What symptoms indicate ________?", answer: "Various symptoms may indicate the need for natural support. We recommend consulting with a healthcare provider for proper diagnosis." },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("20 Bags");
  const [expandedSections, setExpandedSections] = useState<string[]>(["keyPoints", "ingredients"]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(1);

  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product not found</h1>
          <Link href="/shop" className="text-primary hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/shop" className="text-muted-foreground hover:text-primary">
                Category
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <Link href="/shop" className="text-muted-foreground hover:text-primary">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li className="text-primary font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center mb-4">
              <div className="w-48 h-64 bg-primary/10 rounded-xl flex flex-col items-center justify-center p-4">
                <span className="text-xl text-primary font-bold uppercase tracking-wider text-center">
                  {product.name}
                </span>
                <span className="text-sm text-primary/60 mt-2">TEA</span>
                <span className="text-xs text-primary/60 mt-1">DRINK</span>
                <span className="text-xs text-primary/60">20 TEA BAGS</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-border rounded-lg hover:bg-muted">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "w-16 h-16 rounded-lg border flex items-center justify-center",
                    i === 1 ? "border-primary" : "border-border"
                  )}
                >
                  <div className="w-10 h-12 bg-primary/10 rounded flex items-center justify-center">
                    <span className="text-[8px] text-primary">{product.name}</span>
                  </div>
                </div>
              ))}
              <button className="p-2 border border-border rounded-lg hover:bg-muted">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">288 reviews</span>
              <span className="text-sm text-muted-foreground">20 Bags</span>
            </div>

            <p className="text-2xl font-semibold text-primary mb-4">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Size and Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-white"
              >
                <option>20 Bags</option>
                <option>40 Bags</option>
                <option>100 Bags</option>
              </select>

              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-muted"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-muted"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => addToCart(product.id, quantity)}
                className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Add to cart
              </button>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {/* Key Points */}
              <div className="border-t border-border pt-4">
                <button
                  onClick={() => toggleSection("keyPoints")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold">KEY POINTS</span>
                  <Minus
                    className={cn(
                      "w-5 h-5 transition-transform",
                      !expandedSections.includes("keyPoints") && "rotate-90"
                    )}
                  />
                </button>
                {expandedSections.includes("keyPoints") && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.keyPoints || "Excellent for boosting metabolism, supporting weight management, reducing inflammation, and promoting cardiovascular health."}
                  </p>
                )}
              </div>

              {/* Ingredients */}
              <div className="border-t border-border pt-4">
                <button
                  onClick={() => toggleSection("ingredients")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold">INGREDIENTS</span>
                  <Minus
                    className={cn(
                      "w-5 h-5 transition-transform",
                      !expandedSections.includes("ingredients") && "rotate-90"
                    )}
                  />
                </button>
                {expandedSections.includes("ingredients") && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.ingredients || "Organic Camellia sinensis plant."}
                  </p>
                )}
              </div>

              {/* How to Use */}
              <div className="border-t border-border pt-4">
                <button
                  onClick={() => toggleSection("howToUse")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold">HOW TO USE</span>
                  <Plus
                    className={cn(
                      "w-5 h-5 transition-transform",
                      expandedSections.includes("howToUse") && "rotate-45"
                    )}
                  />
                </button>
                {expandedSections.includes("howToUse") && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.howToUse || "Steep one tea bag in hot water for 5-7 minutes. Enjoy hot or cold."}
                  </p>
                )}
              </div>

              {/* Quality */}
              <div className="border-t border-border pt-4">
                <button
                  onClick={() => toggleSection("quality")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold">QUALITY</span>
                  <Plus
                    className={cn(
                      "w-5 h-5 transition-transform",
                      expandedSections.includes("quality") && "rotate-45"
                    )}
                  />
                </button>
                {expandedSections.includes("quality") && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.quality || "Premium quality herbs grown at high altitude in Kenya with organic practices."}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
              What the community thinks.
            </h2>
            <p className="text-lg text-foreground mb-4">Score: 4.9</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
              Write a Review
            </button>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {reviews.map((review) => (
              <div key={review.id} className="border border-border rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{review.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-8">
            Want to know more?
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-border pb-4">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="flex items-center justify-between w-full text-left py-2"
                >
                  <span className="font-medium">
                    {String(faq.id).padStart(2, "0")}. {faq.question}
                  </span>
                  {expandedFaq === faq.id ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <p className="text-sm text-muted-foreground pl-8 pb-2">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
