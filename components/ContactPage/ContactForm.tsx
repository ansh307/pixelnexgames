"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `
Name: ${form.name}

Email: ${form.email}

Message:

${form.message}
    `;

    const mailto = `mailto:support@pixelnex.com?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="rounded-2xl border border-neutral-300 bg-neutral-50 px-5 py-4 outline-none transition focus:border-orange-500"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="rounded-2xl border border-neutral-300 bg-neutral-50 px-5 py-4 outline-none transition focus:border-orange-500"
        />
      </div>

      <input
        type="text"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-5 py-4 outline-none transition focus:border-orange-500"
      />

      <textarea
        rows={6}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message..."
        className="w-full resize-none rounded-2xl border border-neutral-300 bg-neutral-50 px-5 py-4 outline-none transition focus:border-orange-500"
      />

      <button className="inline-flex items-center gap-3 rounded-full border border-neutral-400  px-8 py-4 font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white">
        Send Message
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
