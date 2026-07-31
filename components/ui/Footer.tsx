import Link from "next/link";
import { Blocks } from "lucide-react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const studioLinks = ["About", "Games", "Contact"];

const gameLinks = [
  "Cyber Arena",
  "Pixel Rush",
  "Dragon Quest",
  "Space Hunters",
  "All Games",
];

const supportLinks = [
  "Help Center",
  "FAQs",
  "Privacy Policy",
  "Terms of Service",
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Studio */}

          <div>
            <h3 className="mb-6 lg:mb-8 text-2xl sm:text-3xl lg:text-4xl font-semibold text-orange-500">
              Studio
            </h3>

            <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
              {studioLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-base lg:text-lg text-neutral-700 transition hover:text-orange-500"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}

          <div>
            <h3 className="mb-6 lg:mb-8 text-2xl sm:text-3xl lg:text-4xl font-semibold text-orange-500">
              Games
            </h3>

            <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
              {gameLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-base lg:text-lg text-neutral-700 transition hover:text-orange-500"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}

          <div>
            <h3 className="mb-6 lg:mb-8 text-2xl sm:text-3xl lg:text-4xl font-semibold text-orange-500">
              Support
            </h3>

            <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
              {supportLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-base lg:text-lg text-neutral-700 transition hover:text-orange-500"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}

          <div>
            <Link href="/" className="flex items-center gap-3">
              <Blocks
                size={28}
                className="text-orange-500 sm:size-8 lg:size-9"
              />

              <span className="text-3xl sm:text-[2rem] lg:text-4xl font-black">
                PIXEL
                <span className="text-orange-500">NEX</span>
              </span>
            </Link>

            <div className="mt-5 sm:mt-6 text-lg lg:text-xl leading-relaxed text-neutral-600">
              <p>Building unforgettable</p>
              <p>gaming experiences.</p>
            </div>

            {/* Social */}

            <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4">
              {[BsFacebook, BsInstagram, BsTwitter, BsYoutube].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 lg:size-12 shrink-0 items-center justify-center rounded-full bg-[#FFF1EC] text-orange-500 transition-colors hover:bg-orange-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 text-center text-sm sm:text-base text-neutral-500">
          © {new Date().getFullYear()} PixelNex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
