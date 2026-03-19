import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education | Mau Summit Botanical Gardens",
  description:
    "Education programs at Mau Summit Botanical Gardens.",
}

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-[#fff] md:text-5xl lg:text-6xl">
            Education
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam mauris, eget aliquam nunc nisl vel nisi. Praesent vel ipsum in tortor vehicula consequat vitae non orci. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus nulla gravida orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede mollis pretium integer tincidunt.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ut facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.
          </p>
        </div>
      </section>
    </>
  )
}
