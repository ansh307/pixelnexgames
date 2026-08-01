import { Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-[1840px] px-4 pt-24 sm:px-6">
      <div className="relative h-[550px] overflow-hidden rounded-2xl sm:h-[620px] sm:rounded-3xl lg:h-[780px] lg:rounded-[36px]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/homepage/img/hero-poster.avif"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/homepage/videos/temp.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-20">
          <div className="max-w-2xl lg:px-16">
            <h1 className="font-black leading-[0.9] tracking-tight text-white">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[7rem]">
                Welcome
              </span>

              <span className="mt-2 block text-4xl sm:mt-3 sm:text-5xl md:text-6xl lg:text-8xl">
                to <span className="text-orange-500">PixelNex</span>
              </span>
            </h1>

            <button
              aria-label="Discover PixelNex Plus"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-white/15 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 sm:mt-10 lg:mt-14 lg:px-6 lg:py-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white sm:h-14 sm:w-14">
                <Gamepad2 size={30} className="text-orange-500 lg:h-9 lg:w-9" />
              </div>

              <div className="text-left">
                <p className="text-xs text-white/70 sm:text-sm">
                  Latest release
                </p>

                <p className="text-lg font-semibold text-white sm:text-2xl lg:text-3xl">
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
