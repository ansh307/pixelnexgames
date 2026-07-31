"use client";

import Link from "next/link";
import { Blocks, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiMenu } from "react-icons/bi";
import { games } from "../HomePage/FeaturedGames";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { title: "Home", href: "/" },
  { title: "Games", href: "#" },
  { title: "About", href: "/about" },
  { title: "FAQs", href: "/faqs" },
  { title: "Support", href: "/support" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setGamesOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setGamesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const nav = navRef.current;

      gsap.set(nav, {
        y: 0,
      });

      ScrollTrigger.create({
        trigger: "#hero",
        start: "bottom top",

        onLeave: () => {
          gsap.to(nav, {
            yPercent: -120,
            duration: 0.45,
            ease: "power3.out",
          });
        },

        onEnterBack: () => {
          gsap.to(nav, {
            yPercent: 0,
            duration: 0.45,
            ease: "power3.out",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    document.body.style.overflow = menuOpen ? "auto" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <header ref={navRef} className="fixed inset-x-0 top-0 z-50">
        <nav
          className={`
          mx-auto
          flex
          h-24
          w-full
          items-center
          justify-between
          px-6
          transition-all
          duration-300
          hover:backdrop-blur-none
          lg:px-14
          ${gamesOpen ? "bg-white " : "bg-white/70  backdrop-blur-2xl"}
        `}
        >
          {/* Logo */}

          <Link href="/" className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center text-orange-500">
              <Blocks />
            </div>

            <span className="text-2xl font-black tracking-tight">PIXELNEX</span>
          </Link>

          {/* Desktop Links */}

          <ul className="hidden items-center gap-10 lg:flex">
            {links.slice(0, 5).map((item) => (
              <li
                key={item.title}
                className={`${item.title === "Games" && "relative"}`}
              >
                {item.title === "Games" ? (
                  <button
                    onClick={() => setGamesOpen((prev) => !prev)}
                    className={`group flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                      gamesOpen
                        ? "text-orange-500"
                        : "text-neutral-800 hover:text-black"
                    }`}
                  >
                    {item.title}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${
                        gamesOpen ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                      pathname === item.href
                        ? "text-orange-500"
                        : "text-neutral-800 hover:text-black"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Button */}

          <Link
            href="/contact"
            className={`hidden rounded-full border px-8 py-3.5 text-[16px] font-semibold transition lg:inline-block ${
              pathname === "/contact"
                ? "border-orange-500 bg-orange-500 text-white"
                : "border-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            Contact
          </Link>

          {/* Mobile Hamburger */}

          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 lg:hidden"
          >
            <BiMenu size={24} />
          </button>
        </nav>

        {/* Game tab */}
        {gamesOpen && (
          <div
            className={`absolute left-0 top-full hidden w-full  bg-white  transition-all duration-300 lg:block ${
              gamesOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 pointer-events-none opacity-0"
            }`}
          >
            <div className="mx-auto max-w-[1800px] px-6 py-8 lg:px-10 xl:px-14">
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-5">
                {games.map((game) => (
                  <div
                    key={game.title}
                    onClick={() => setGamesOpen(false)}
                    className="group cursor-pointer"
                  >
                    <div className="overflow-hidden rounded-2xl lg:rounded-3xl">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <p className="mt-3 text-base font-semibold text-neutral-900 lg:mt-4 lg:text-lg xl:text-xl">
                      {game.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[999] bg-orange-500 transition-all duration-500 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Close */}

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff835d] text-white"
        >
          <X size={28} />
        </button>

        {/* Links */}

        <div className="flex h-full items-center justify-center">
          <ul className="space-y-8 text-center">
            {links.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`text-4xl font-semibold transition ${
                    pathname === item.href
                      ? "text-white underline underline-offset-8"
                      : "text-white hover:opacity-75"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
