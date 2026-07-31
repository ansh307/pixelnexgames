import FAQSection from "@/components/FAQsPage/FAQSection";
import CTASection from "@/components/HomePage/CTASection";
import PageHero from "@/components/PageHero";

const FAQsPage = () => {
  return (
    <>
      <PageHero
        badge="Frequently Asked Questions"
        title={
          <>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Got{" "}
            </span>
            <span className="mt-3 text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              <span className="text-orange-500">questions?</span>
            </span>
          </>
        }
        description="Find answers to the most common questions about PixelNex, our games, accounts, purchases, and technical support."
        image="/homepage/img/faqs-hero.png"
        imageAlt="FAQs"
      />

      <FAQSection />

      <CTASection />
    </>
  );
};

export default FAQsPage;
