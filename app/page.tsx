import AboutSection from "@/components/HomePage/AboutSection";
import CTASection from "@/components/HomePage/CTASection";
import FeaturedGames from "@/components/HomePage/FeaturedGames";
import Hero from "@/components/HomePage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedGames />
      <CTASection />
    </>
  );
}
