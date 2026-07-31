import WhoWeAre from "@/components/AboutPage/WhoWeAre";
import CTASection from "@/components/HomePage/CTASection";
import PageHero from "@/components/PageHero";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageHero
        badge="About PixelNex"
        title={
          <>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Discover the
            </span>

            <span className="mt-3 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              <span className="text-orange-500">PixelNex</span> story.
            </span>
          </>
        }
        description="We're crafting unforgettable worlds, memorable characters, and gameplay experiences enjoyed by millions of players around the globe."
        image="/homepage/img/about-hero.png"
        imageAlt="About PixelNex"
      />
      <WhoWeAre />
      <CTASection />
    </>
  );
};

export default AboutPage;
