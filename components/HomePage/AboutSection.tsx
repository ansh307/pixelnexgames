import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="relative flex min-h-[650px] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-6"
      style={{
        backgroundImage: "url('/homepage/img/about-bg.png')",
      }}
    >
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <span className="text-sm font-black uppercase tracking-tighter text-neutral-900">
          ABOUT US
        </span>

        <h2 className="mt-10 text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl">
          We make games that people look back on with nostalgia!
        </h2>

        <Link
          href="/about"
          className="mt-14 rounded-full border border-neutral-400 px-12 py-4 text-lg font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
