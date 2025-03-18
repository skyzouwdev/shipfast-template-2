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
    question: "What is BetterLife?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        BetterLife is an intuitive habit-tracking platform designed to help you
        build strong routines, achieve your goals, and enhance your overall
        well-being through simple daily tracking.
      </div>
    ),
  },
  {
    question: "What is the difference between the Monthly and Lifetime plan?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The Monthly plan gives you full access to all features with a flexible
        monthly subscription. The Lifetime plan is a one-time payment providing
        unlimited lifetime access, offering the best long-term value.
      </div>
    ),
  },
  {
    question: "Is there an iOS/Android app?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes! BetterLife is fully accessible on both iOS and Android devices,
        allowing you to track your routines effortlessly wherever you are.
      </div>
    ),
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Absolutely! You can easily cancel your monthly subscription whenever you
        want, with no hidden fees or penalties.
      </div>
    ),
  },
  {
    question: "Is my personal information safe on BetterLife?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Your privacy and security are our highest priority. BetterLife uses
        advanced encryption and strict data-protection policies to ensure your
        information is always safe and private.
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
