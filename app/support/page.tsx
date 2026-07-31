import CTASection from "@/components/HomePage/CTASection";
import PageHero from "@/components/PageHero";
import SupportSection from "@/components/SupportPage/SupportSection";
import React from "react";

const SupportPage = () => {
  return (
    <>
      <PageHero
        badge="Support Center"
        title={
          <>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              We're here
            </span>

            <span className="mt-3 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              to <span className="text-orange-500">help.</span>
            </span>
          </>
        }
        description="Need assistance? Find answers, troubleshoot issues, or get in touch with our support team. We're committed to making your PixelNex experience as smooth as possible."
        image="/homepage/img/support-hero.png"
        imageAlt="PixelNex Support"
      />
      <SupportSection />
      <CTASection />
    </>
  );
};

export default SupportPage;
