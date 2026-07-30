import { Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="px-14 pt-24">
      <div className="relative h-[780px] overflow-hidden rounded-[36px]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/homepage/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-20">
          <div className="max-w-2xl px-16">
            <h1 className="leading-[0.9] font-black tracking-tight text-white">
              <span className="block text-[7rem]">Welcome</span>

              <span className="mt-3 block text-8xl">
                to <span className="text-[#F26539]">PixelNex</span>
              </span>
            </h1>

            {/* CTA */}
            <button className="group mt-14 flex items-center gap-4 rounded-full bg-white/15 px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <Gamepad2 size={36} className="text-[#F26539]" />
              </div>

              <div className="text-left">
                <p className="text-sm text-white/70">Latest release</p>

                <p className="text-3xl font-semibold text-white">
                  Discover PixelNex+
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
