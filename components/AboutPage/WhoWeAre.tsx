export default function WhoWeAre() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Section Label */}

        <span className="text-xs font-black uppercase tracking-[0.35em] text-orange-500">
          Who We Are
        </span>

        {/* Heading */}

        <h2 className="mx-auto mt-8 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Crafting unforgettable games through{" "}
          <span className="text-orange-500">creativity</span> and innovation.
        </h2>

        {/* Description */}

        <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">
          Founded with a passion for game development, PixelNex creates
          immersive worlds, memorable characters, and engaging gameplay that
          connects millions of players around the globe. Every title we build is
          driven by creativity, innovation, and a relentless pursuit of fun.
        </p>
      </div>
    </section>
  );
}
