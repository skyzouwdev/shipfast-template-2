import Link from "next/link";

import config from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Go back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms of services {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last updated: March 25, 2025

Welcome to TradeFast (https://tradefast). These Terms and Conditions ("Terms") govern the use of our platform, designed to help traders improve through education, mentorship, and shared resources. By accessing or using TradeFast, you agree to comply with these Terms.

1. Contact Information

For any questions or information, contact us at: leclubvvp@gmail.com

2. Ownership and Use of Service

When purchasing a plan or subscription on TradeFast, you gain access to a variety of educational content and community features. If not satisfied, we offer a full refund within 7 days of purchase.

3. Data Collection

We collect personal data such as name, email, phone number, and payment information. We also use web cookies to collect non-personal data. For more details, refer to our Privacy Policy: https://tradefast/privacy-policy

4. Governing Law

These Terms are governed by the laws of France.

5. Changes to Terms

We reserve the right to modify these Terms at any time. Updates take effect immediately upon posting. Significant changes will be communicated via email.

6. Acceptance of Terms

By using TradeFast, you confirm that you have read, understood, and agree to be bound by these Terms.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
