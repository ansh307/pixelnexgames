import AboutSection from "@/components/HomePage/AboutSection";
import FeaturedGames from "@/components/HomePage/FeaturedGames";
import Hero from "@/components/HomePage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturedGames />
      <div className="relative h-[780px] overflow-hidden rounded-[36px]"></div>
    </main>
  );
}
