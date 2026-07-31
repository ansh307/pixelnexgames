import Image from "next/image";

export default function AboutHero() {
  return (
    <section id="hero" className="bg-[#F4F4F4] pt-28 lg:pt-36">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-6 lg:h-[720px] lg:flex-row lg:justify-between">
        {/* Left */}

        <div className="z-10 max-w-3xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-orange-500">
            About PixelNex
          </p>

          <h1 className="leading-[0.92] font-black tracking-tight text-black">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Discover the
            </span>

            <span className="mt-3 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              <span className="text-orange-500">PixelNex</span> story.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-neutral-600 lg:text-xl">
            We're crafting unforgettable worlds, memorable characters, and
            gameplay experiences enjoyed by millions of players around the
            globe.
          </p>
        </div>

        {/* Right */}

        <div className="relative mt-16 h-[380px] w-full max-w-xl sm:h-[500px] lg:mt-0 lg:h-[680px] lg:max-w-[620px]">
          <Image
            src="/homepage/img/about-hero.png"
            alt="PixelNex Character"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
