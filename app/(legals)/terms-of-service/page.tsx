import PageHero from "@/components/PageHero";
import TermsOfServiceSection from "@/components/TermsOfService/TermsOfServiceSection";

const TermsOfServicePage = () => {
  return (
    <>
      <PageHero
        badge="Terms of Service"
        title={
          <>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Terms &
            </span>

            <span className="mt-3 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              <span className="text-orange-500">Conditions.</span>
            </span>
          </>
        }
        description="These Terms of Service outline the rules and conditions for using the PixelNex website, games, and services. By accessing our platform, you agree to these terms and help us maintain a safe and enjoyable experience for everyone."
        image="/homepage/img/terms-hero.png"
        imageAlt="PixelNex Terms of Service"
      />
      <TermsOfServiceSection />
    </>
  );
};

export default TermsOfServicePage;
