import Image from "next/image";

type PageHeroProps = {
  badge: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt?: string;
  backgroundColor?: string;
};

export default function PageHero({
  badge,
  title,
  description,
  image,
  imageAlt = "Hero Image",
  backgroundColor = "bg-[#F4F4F4]",
}: PageHeroProps) {
  return (
    <section id="hero" className={`${backgroundColor} pt-28 lg:pt-36`}>
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-6 lg:h-[720px] lg:flex-row lg:justify-between mt-20 lg:mt-0">
        {/* Left */}

        <div className="z-10 max-w-3xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-orange-500">
            {badge}
          </p>

          <h1 className="leading-[0.92] font-black tracking-tight text-black">
            {title}
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-neutral-600 lg:text-xl">
            {description}
          </p>
        </div>

        {/* Right */}

        <div className="relative mt-16 h-[250px] w-full max-w-xl sm:h-[450px] lg:mt-0 lg:h-[680px] lg:max-w-[800px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
