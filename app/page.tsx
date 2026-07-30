import AboutSection from "@/components/HomePage/AboutSection";
import Hero from "@/components/HomePage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <div className="relative h-[780px] overflow-hidden rounded-[36px]"></div>
      <div className="relative h-[780px] overflow-hidden rounded-[36px]"></div>
    </main>
  );
}
