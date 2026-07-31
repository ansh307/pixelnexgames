import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Explore our",
    highlight: "universe.",
    button: "Discover more",
    image: "/homepage/img/about-bg.png",
    bg: "bg-[#FBFAF8]",
    large: true,
  },
  {
    title: "Join our",
    highlight: "community.",
    button: "Join Discord",
    image: "/homepage/img/about-bg.png",
    bg: "bg-[#EAF9F5]",
  },
  {
    title: "Build games",
    highlight: "with us.",
    button: "View openings",
    image: "/homepage/img/about-bg.png",
    bg: "bg-[#F4F2FC]",
  },
];

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6">
        {/* Large Card */}

        <Link
          href="#"
          className={`group relative flex flex-col lg:flex-row h-[420px] sm:h-[470px] lg:h-[620px] overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[34px] ${cards[0].bg}`}
        >
          <div className="flex w-full lg:w-[45%] flex-col justify-start p-6 sm:p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              {cards[0].title}{" "}
              <span className="text-orange-500">{cards[0].highlight}</span>
            </h2>

            <button className="mt-6 sm:mt-8 lg:mt-10 w-fit rounded-full border border-neutral-400 px-6 sm:px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white">
              {cards[0].button}
            </button>
          </div>

          <div className="relative h-[280px] sm:h-[380px] lg:h-auto flex-1">
            <Image
              src={cards[0].image}
              alt=""
              fill
              className="object-contain object-right-bottom transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Bottom Cards */}

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.slice(1).map((card) => (
            <Link
              key={card.title}
              href="#"
              className={`group relative h-[420px] sm:h-[500px] lg:h-[620px] overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[34px] ${card.bg}`}
            >
              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <h3 className="max-w-md text-3xl sm:text-4xl font-bold leading-tight">
                  {card.title}{" "}
                  <span className="text-orange-500">{card.highlight}</span>
                </h3>

                <button className="mt-6 sm:mt-8 lg:mt-10 rounded-full border border-neutral-400 px-6 sm:px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white">
                  {card.button}
                </button>
              </div>

              <Image
                src={card.image}
                alt=""
                fill
                className="pointer-events-none object-contain object-bottom-right transition duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
