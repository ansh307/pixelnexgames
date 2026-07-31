import Link from "next/link";
import { Mail, MessageCircle, Disc } from "lucide-react";
import { BsDiscord, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const supportChannels = [
  {
    title: "Facebook Support",
    description:
      "Need help with your account, purchases, or technical issues? Reach out to our support team.",
    icon: FaFacebook,
    href: "#",
    button: "Follow Us",
  },
  {
    title: "Discord Community",
    description:
      "Join our Discord server to connect with players, report issues, and get real-time assistance.",
    icon: BsDiscord,
    href: "#",
    button: "Join Discord",
  },
  {
    title: "Instagram",
    description:
      "Stay updated with our latest news, events, and announcements while sending us a direct message.",
    icon: BsInstagram,
    href: "#",
    button: "Follow Us",
  },
  {
    title: "X (Twitter)",
    description:
      "Follow us for updates and send us a message for quick support or feedback.",
    icon: BsTwitterX,
    href: "#",
    button: "Visit X",
  },
];

export default function SupportSection() {
  return (
    <section className=" py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-neutral-900 lg:text-6xl">
            We're always here to help
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Choose your preferred way to reach us. Whether you need technical
            support, have a question, or simply want to connect with our team,
            we're happy to help.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {supportChannels.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-[34px] border border-neutral-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Orange top bar */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                <div>
                  {/* Icon */}

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 transition-transform duration-500 ">
                    <Icon
                      size={34}
                      className="text-orange-500 transition-transform duration-500 "
                    />
                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-bold text-neutral-900">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-8 text-neutral-600">
                    {item.description}
                  </p>
                </div>

                {/* Button */}

                <div className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-orange-500">
                  {item.button}

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
