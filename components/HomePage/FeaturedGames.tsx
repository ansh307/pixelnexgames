"use client";

import Image from "next/image";
import Link from "next/link";

const games = [
  {
    title: "clash of clans",
    category: "ACTION",
    image: "/homepage/img/featured-games/coc.jpg",
    featured: true,
  },
  {
    title: "Brawl stars",
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
    title: "Squad busters",
    category: "ACTION",
    image: "/homepage/img/featured-games/sb.jpg",
  },
];

export default function FeaturedGames() {
  const featured = games[0];
  const rest = games.slice(1);

  return (
    <section className="py-40 bg-[#F2F2F2]">
      <div className="mx-auto  max-w-[1580px] px-6">
        {/* Heading */}

        <div className="mb-16">
          <p className="text-xs font-black uppercase tracking-widest text-neutral-900">
            Featured Games
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-neutral-900">
            Some of our <span className="text-[#F26539]">games</span>
          </h2>
        </div>

        {/* Featured Card */}

        <GameCard game={featured} featured />

        {/* Grid */}

        <div className="mt-8 grid grid-cols-2 gap-8">
          {rest.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>

        {/* Button */}

        <div className="mt-16 flex justify-center">
          <Link
            href="/games"
            className="rounded-full border border-neutral-400 px-14 py-4 text-lg font-semibold transition hover:bg-orange-500 hover:text-white"
          >
            View all
          </Link>
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
      className={`group relative overflow-hidden rounded-[34px] ${
        featured ? "h-[520px]" : "h-[470px]"
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

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col justify-start p-12">
        <p className="text-xs font-black tracking-tight text-white">
          {game.category}
        </p>

        <h3 className="mt-5 text-5xl font-bold text-white">{game.title}</h3>

        <Link
          href="#"
          className="mt-12 inline-flex w-fit rounded-full border border-white/40 bg-white/5 px-12 py-5 text-xl font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
        >
          View game
        </Link>
      </div>
    </div>
  );
}
