"use client"

export function WaveDividerTop({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-12 md:h-16 lg:h-20"
      >
        <path
          d="M0,80 C360,0 720,60 1080,20 C1260,0 1380,30 1440,40 L1440,0 L0,0 Z"
          className="fill-primary"
        />
      </svg>
    </div>
  )
}

export function WaveDividerBottom({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-12 md:h-16 lg:h-20"
      >
        <path
          d="M0,0 C360,80 720,20 1080,60 C1260,80 1380,50 1440,40 L1440,80 L0,80 Z"
          className="fill-primary"
        />
      </svg>
    </div>
  )
}
