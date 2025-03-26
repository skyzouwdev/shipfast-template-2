import Link from "next/link";

import config from "@/config";

export const metadata = {
  title: "Privacy Policy | TradeFast",
  description:
    "Read our privacy policy to learn how we handle your data at TradeFast.",
};

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Go back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy-policy {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last updated: March 25, 2025

Welcome to TradeFast (https://tradefast), a trading community designed to help traders improve their skills through education, interaction with other members, and various tools and features.

1. Information We Collect

We collect the following types of information:

Personal Data: This includes your name, email address, phone number, and payment information. We collect this data to better understand our users and provide a more personalized service.

Non-Personal Data: We use web cookies to enhance your experience on our platform. These cookies help us analyze user behavior without collecting personally identifiable information.

2. Purpose of Data Collection

We collect data to get to know our users better, improve our services, and provide a personalized user experience.

3. Data Sharing and Disclosure

At TradeFast, your privacy is important to us. We do not share your personal data with third parties. All collected data is used exclusively for the operation and improvement of the platform.

4. Children's Privacy

Our services are not intended for children under the age of 13. We do not knowingly collect personal information from minors. If we discover that we have unintentionally collected such information, we will promptly delete it from our records.

5. Changes to Our Privacy Policy

This Privacy Policy may be updated from time to time. If significant changes are made, we will notify you via email and update the "Last updated" date on this page.

6. Contact Us

If you have any questions about this Privacy Policy, please contact us at: leclubvvp@gmail.com.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
