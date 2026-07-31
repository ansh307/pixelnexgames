import PageHero from "@/components/PageHero";
import PrivacyPolicySection from "@/components/PrivacyPolicy/PrivacyPolicySection";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHero
        badge="Privacy Policy"
        title={
          <>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Your privacy
            </span>

            <span className="mt-3 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              <span className="text-orange-500">matters.</span>
            </span>
          </>
        }
        description="We're committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data while you enjoy PixelNex games and services."
        image="/homepage/img/privacy-hero.png"
        imageAlt="PixelNex Privacy Policy"
      />
      <PrivacyPolicySection />
    </>
  );
};

export default PrivacyPolicyPage;
