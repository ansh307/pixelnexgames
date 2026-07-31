import Link from "next/link";

export default function TermsOfServiceSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-sm text-neutral-500">Last updated on 31 July 2026</p>

        <div className="mt-10 space-y-8 text-lg leading-8 text-neutral-700">
          <p>
            Welcome to PixelNex. These Terms of Service ("Terms") govern your
            access to and use of our website, games, applications, and related
            services. By accessing or using our services, you agree to be bound
            by these Terms.
          </p>

          <p>
            If you do not agree with any part of these Terms, please discontinue
            using our services immediately.
          </p>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              1. Acceptance of Terms
            </h2>

            <p className="mt-6">
              By using PixelNex services, you confirm that you have read,
              understood, and agreed to these Terms. If you are under the legal
              age required in your jurisdiction, you may only use our services
              with the permission of a parent or legal guardian.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              2. Eligibility
            </h2>

            <p className="mt-6">
              You must comply with all applicable laws while using our services.
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              3. Acceptable Use
            </h2>

            <p className="mt-6">
              While using PixelNex services, you agree not to:
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-6">
              <li>Cheat, exploit, or modify our games.</li>
              <li>Reverse engineer or attempt to copy our software.</li>
              <li>Harass, abuse, or threaten other users.</li>
              <li>Upload malicious software or harmful content.</li>
              <li>Violate applicable laws or regulations.</li>
              <li>Attempt unauthorized access to our systems.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              4. User Accounts
            </h2>

            <p className="mt-6">
              Some services may require an account. You are responsible for
              providing accurate information, keeping your credentials secure,
              and notifying us immediately of any unauthorized use of your
              account.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              5. Purchases & Payments
            </h2>

            <p className="mt-6">
              Certain games or services may include paid content, subscriptions,
              or in-game purchases. All payments are processed by trusted
              third-party providers and are subject to their terms and refund
              policies where applicable.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              6. Intellectual Property
            </h2>

            <p className="mt-6">
              All games, artwork, characters, logos, trademarks, software,
              music, text, graphics, and other content provided by PixelNex are
              owned by or licensed to PixelNex and are protected by intellectual
              property laws. You may not reproduce, distribute, or use our
              content without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              7. User Content
            </h2>

            <p className="mt-6">
              If you submit feedback, suggestions, screenshots, videos, or other
              content, you grant PixelNex a non-exclusive, worldwide,
              royalty-free license to use, reproduce, modify, and display such
              content in connection with our services.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              8. Suspension & Termination
            </h2>

            <p className="mt-6">
              We reserve the right to suspend or terminate accounts that violate
              these Terms, disrupt our services, or engage in fraudulent,
              abusive, or illegal activities.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              9. Disclaimer
            </h2>

            <p className="mt-6">
              Our services are provided on an "as is" and "as available" basis.
              While we strive to provide reliable services, we do not guarantee
              uninterrupted availability or that our games will be free from
              bugs, errors, or security vulnerabilities.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              10. Limitation of Liability
            </h2>

            <p className="mt-6">
              To the fullest extent permitted by law, PixelNex shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              11. Changes to These Terms
            </h2>

            <p className="mt-6">
              We may update these Terms from time to time. Continued use of our
              services after changes become effective constitutes your
              acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              12. Governing Law
            </h2>

            <p className="mt-6">
              These Terms shall be governed by and interpreted in accordance
              with the laws applicable to PixelNex's principal place of
              business, without regard to conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
              13. Contact Us
            </h2>

            <p className="mt-6">
              If you have any questions regarding these Terms of Service, please{" "}
              <Link
                href="/contact"
                className="font-medium text-orange-500 hover:underline"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
