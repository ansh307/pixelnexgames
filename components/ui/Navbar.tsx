"use client";

import Link from "next/link";
import { Blocks, ChevronDown, Menu, X } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiMenu } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { title: "Home", href: "/" },
  { title: "Games", href: "#" },
  { title: "About", href: "/about" },
  { title: "FAQs", href: "#" },
  { title: "Support", href: "#" },
  { title: "Contact", href: "#" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
          className="
          mx-auto
          flex
          h-24
          w-full
          items-center
          justify-between
          bg-white/70
          px-6
          backdrop-blur-2xl
          transition-all
          duration-300
          hover:bg-white
          hover:backdrop-blur-none
          lg:px-14
        "
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
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-1 text-[15px] font-semibold text-neutral-800 hover:text-black"
                >
                  {item.title}

                  {item.title === "Games" && (
                    <ChevronDown
                      size={15}
                      className="transition-transform group-hover:rotate-180"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}

          <Link
            href="#"
            className="hidden rounded-full border border-orange-500 px-8 py-3.5 text-[16px] font-semibold transition hover:bg-orange-500 hover:text-white lg:inline-block"
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
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-semibold text-white transition duration-300 hover:opacity-75"
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
