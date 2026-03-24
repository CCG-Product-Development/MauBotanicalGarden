import Link from "next/link";

export default function ConnectSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8">
          Connect with us
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
