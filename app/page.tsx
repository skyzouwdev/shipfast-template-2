"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WithWithout from "@/components/WithWithout";
import Testimonials11 from "@/components/Testimonials11";
import Pricing from "@/components/Pricing1";
import Affiliation from "@/components/Affiliation";
export default function Home() {
  return (
    <>
      <main>
        <div className="flex space-y-20">
          <Header />
          <Hero />
        </div>
        <WithWithout />
        <Testimonials11 />
        <Suspense fallback={<div>Loading Pricing...</div>}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<div>Loading FAQ...</div>}>
          <FAQ />
        </Suspense>
        <Affiliation />
      </main>
      <Footer />
    </>
  );
}
