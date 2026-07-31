import Image from "next/image";
import Link from "next/link";

export const games = [
  {
    title: "Clash of Clans",
    category: "ACTION",
    image: "/homepage/img/featured-games/coc.jpg",
    featured: true,
  },
  {
    title: "Brawl Stars",
    category: "ACTION",
    image: "/homepage/img/featured-games/bs.jpg",
  },
  {
    title: "Clash Royale",
    category: "ACTION",
    image: "/homepage/img/featured-games/cr.jpg",
  },
  {
    title: "Hay Day",
    category: "SIMULATION",
    image: "/homepage/img/featured-games/hay-day.jpg",
  },
  {
    title: "Squad Busters",
    category: "ACTION",
    image: "/homepage/img/featured-games/sb.jpg",
  },
];

export default function FeaturedGames() {
  const featured = games[0];
  const rest = games.slice(1);

  return (
    <section className="bg-[#F4F4F4] py-20 sm:py-28 lg:py-40">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6">
        {/* Heading */}

        <div className="mb-10 sm:mb-14 lg:mb-16">
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-neutral-900">
            Featured Games
          </p>

          <h2 className="mt-3 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
            Some of our <span className="text-orange-500">games</span>
          </h2>
        </div>

        {/* Featured */}

        <GameCard game={featured} featured />

        {/* Grid */}

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {rest.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>

        {/* Button */}

        <div className="mt-10 sm:mt-14 lg:mt-16 flex justify-center">
          <div className="cursor-pointer rounded-full border border-neutral-400 px-8 sm:px-10 lg:px-14 py-3 lg:py-4 text-base lg:text-lg font-semibold transition hover:bg-orange-500 hover:text-white">
            Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}

type Game = {
  title: string;
  category: string;
  image: string;
};

function GameCard({
  game,
  featured = false,
}: {
  game: Game;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[34px]
      ${
        featured
          ? "h-[420px] sm:h-[470px] lg:h-[620px]"
          : "h-[350px] sm:h-[400px] lg:h-[520px]"
      }`}
    >
      {/* Background */}

      <Image
        src={game.image}
        alt={game.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Blur */}

      <div className="absolute inset-0 backdrop-blur-[1px] transition duration-500 group-hover:backdrop-blur-none" />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col justify-start p-6 sm:p-8 lg:p-12">
        <p className="text-[10px] sm:text-xs font-black tracking-tight text-white">
          {game.category}
        </p>

        <h3 className="mt-3 sm:mt-4 lg:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          {game.title}
        </h3>

        <Link
          href="#"
          className="mt-8 sm:mt-10 lg:mt-12 inline-flex w-fit rounded-full border border-white/40 bg-white/5 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
        >
          View game
        </Link>
      </div>
    </div>
  );
}
