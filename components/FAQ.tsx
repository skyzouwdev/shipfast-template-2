"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a list of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList array below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What is included in the Education Plan?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The Education Plan gives you lifetime access to 20+ hours of structured
        video lessons covering ICT basics, my personal strategy, risk
        management, trading psychology, and access to my personal trading
        journal with every trade I’ve taken.
      </div>
    ),
  },
  {
    question: "What does the Mentorship Plan offer?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The Mentorship Plan includes daily live outlooks, market breakdowns, and
        Q&A sessions to help you understand my process. I also review your
        setups and provide personalized feedback.
      </div>
    ),
  },
  {
    question: "How does the One-on-One Coaching work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our One-on-One Coaching allows you to book personalized 1-hour sessions
        where i analyze your trades, optimize your strategy, and provide
        tailored feedback to accelerate your growth.
      </div>
    ),
  },
  {
    question: "Is this suitable for beginners?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Absolutely! Our programs are designed for all levels, from beginners to
        advanced traders. The structured lessons and mentorship help you
        progress at your own pace.
      </div>
    ),
  },
  {
    question: "What payment options are available?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We accept payments via Whop, allowing you to pay securely with
        credit/debit cards. You can choose between monthly subscriptions or
        lifetime access depending on your plan.
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="w-full">
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
          style={{ fontSize: "16px" }} // Applique une taille uniforme
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-100" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col gap-12 justify-center items-center">
        <div className="flex flex-col text-center">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>
        <ul className="w-full flex flex-col items-center">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
