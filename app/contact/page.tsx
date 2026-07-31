import ContactSection from "@/components/ContactPage/ContactSection";
import CTASection from "@/components/HomePage/CTASection";
import PageHero from "@/components/PageHero";

const ContactPage = () => {
  return (
    <>
      <PageHero
        badge="Contact PixelNex"
        title={
          <>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Let's build
            </span>

            <span className="mt-3 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              something <span className="text-orange-500">great.</span>
            </span>
          </>
        }
        description="Have a question, business inquiry, partnership opportunity, or just want to say hello? We'd love to hear from you. Reach out and our team will get back to you as soon as possible."
        image="/homepage/img/contact-hero.png"
        imageAlt="Contact PixelNex"
      />
      <ContactSection />
      <CTASection />
    </>
  );
};

export default ContactPage;
