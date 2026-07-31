import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { BsDiscord, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className=" py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-neutral-900 lg:text-6xl">
            We'd love to hear from you
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Whether you have a question, feedback, partnership proposal, or
            simply want to say hello, our team is always happy to connect.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          {/* Contact Form */}

          <div className="rounded-[34px] p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-neutral-900">
              Send us a message
            </h3>

            <p className="mt-3 text-neutral-600">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <ContactForm />
          </div>

          {/* Contact Info */}

          <div className="space-y-8">
            <div className="rounded-[34px] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Contact Information</h3>

              <div className="mt-8 space-y-8">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50">
                    <Mail className="text-orange-500" />
                  </div>

                  <div>
                    <p className="font-semibold">Email</p>

                    <p className="mt-1 text-neutral-600">
                      pixelnexgames@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50">
                    <Phone className="text-orange-500" />
                  </div>

                  <div>
                    <p className="font-semibold">Phone</p>

                    <p className="mt-1 text-neutral-600">+91 12345 67890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}

            <div className="rounded-[34px] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Follow PixelNex</h3>

              <div className="mt-8 flex gap-4">
                {[
                  {
                    icon: BsDiscord,
                    href: "#",
                  },
                  {
                    icon: BsInstagram,
                    href: "#",
                  },
                  {
                    icon: BsTwitterX,
                    href: "#",
                  },
                  {
                    icon: FaFacebook,
                    href: "#",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={i}
                      href={item.href}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition hover:bg-orange-500 hover:text-white"
                    >
                      <Icon size={22} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
