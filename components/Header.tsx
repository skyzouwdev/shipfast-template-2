"use client";

// Group 1: Imports externes
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Group 2: Imports locaux
import Link from "next/link";
import Image from "next/image";
import Redirect from "./Redirect"; // Import du composant Redirect

// Logo path
const logo = "/icon.svg";

const links = [
  {
    href: "/#testimonials-section",
    label: "Review",
  },
  {
    href: "/#pricing",
    label: "Pricing",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
  {
    href: "/#affiliation",
    label: "Affiliation",
  },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "border-b border-gray-300 shadow-sm" : ""
      } mb-8`}
    >
      <nav
        className="container flex justify-between items-center px-8 py-4 mx-auto"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1 justify-start">
          <Link
            className="flex items-center gap-2 shrink-0"
            href="/"
            title={`TradeFast homepage`}
          >
            <Image
              src={logo}
              alt={`TradeFast logo`}
              className="w-8"
              width={32}
              height={32}
            />
            <span className="font-semibold text-md">TradeFast</span>
          </Link>
        </div>

        {/* Links on desktop */}
        <div className="hidden lg:flex justify-center gap-12 items-center flex-grow w-full">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-gray-700 hover:text-gray-900 hover:underline transition"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="gray"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Redirect component */}
        <div className="hidden lg:flex justify-end items-center">
          <Redirect /> {/* Insertion du composant Redirect ici */}
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300 bg-white`}
        >
          {/* Logo on mobile */}
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0"
              title={`TradeFast homepage`}
              href="/"
            >
              <Image
                src={logo}
                alt={`TradeFast logo`}
                className="w-8"
                width={32}
                height={32}
              />
              <span className="font-semibold text-md">TradeFast</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Links on mobile */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="text-gray-700 hover:text-gray-900 transition"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* Ajout du bouton Redirect sous les liens */}
              <div className="mt-6">
                <Redirect /> {/* Insertion du composant Redirect ici */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const HeaderWrapper = () => {
  return (
    <Suspense fallback={<div>Loading header...</div>}>
      <Header />
    </Suspense>
  );
};

export default HeaderWrapper;
