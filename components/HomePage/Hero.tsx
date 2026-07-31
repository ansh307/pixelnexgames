import { Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 md:pt-24 mx-auto max-w-[1840px] px-4 sm:px-6"
    >
      <div className="relative h-[550px] sm:h-[620px] lg:h-[780px] overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px]">
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
        <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-20">
          <div className="max-w-2xl lg:px-16">
            <h1 className="leading-[0.9] font-black tracking-tight text-white">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[7rem]">
                Welcome
              </span>

              <span className="mt-2 sm:mt-3 block text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                to <span className="text-[#F26539]">PixelNex</span>
              </span>
            </h1>

            {/* CTA */}
            <button className="group mt-8 sm:mt-10 lg:mt-14 flex items-center gap-3 sm:gap-4 rounded-full bg-white/15 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white">
                <Gamepad2 size={24} className="text-[#F26539] sm:hidden" />
                <Gamepad2
                  size={30}
                  className="hidden sm:block lg:hidden text-[#F26539]"
                />
                <Gamepad2
                  size={36}
                  className="hidden lg:block text-[#F26539]"
                />
              </div>

              <div className="text-left">
                <p className="text-xs sm:text-sm text-white/70">
                  Latest release
                </p>

                <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-white">
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
