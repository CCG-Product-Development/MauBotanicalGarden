import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-[#000]">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center lg:min-h-[80vh] lg:px-8">
        <h1 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-[#fff] sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="block">Mau Summit</span>
          <span className="block text-[0.5em] font-normal tracking-[0.08em] text-[#ccc]">
            Botanical Gardens
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#aaa] md:text-lg">
          Placeholder text goes here
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/shop"
            className="bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
          >
            Shop Products
          </Link>
          <Link
            href="/about"
            className="border border-[#555] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#ccc]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
