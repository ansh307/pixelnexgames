"use client";

import Link from "next/link";
import { Blocks, ChevronDown } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { title: "Home", href: "/" },
  { title: "Games", href: "#", dropdown: true },
  { title: "About", href: "#" },
  { title: "FAQs", href: "#" },
  { title: "Support", href: "#" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

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

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-50">
      <nav
        className="
    mx-auto
    flex
    h-24
    w-full
    items-center
    justify-between
    px-14

    bg-white/70
    backdrop-blur-2xl

    hover:bg-white
    hover:backdrop-blur-none

    transition-all
    duration-300
  "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center text-lg font-bold text-orange-500">
            <Blocks />
          </div>

          <span className="text-2xl font-black tracking-tight">PIXELNEX</span>
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group flex items-center gap-1 text-[15px] font-semibold text-neutral-800 hover:text-black"
              >
                {item.title}

                {item.dropdown && (
                  <ChevronDown
                    size={15}
                    className="transition-transform group-hover:rotate-180"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className="rounded-full border border-orange-500 px-8 py-3.5 text-[16px] font-semibold transition hover:bg-orange-500 hover:text-white hidden lg:inline-block"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
