import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WithWithout from "@/components/WithWithout";
import Testimonials11 from "@/components/Testimonials11";
import Pricing from "@/components/Pricing1";
export default function Home() {
  return (
    <>
      <main>
        <div className="flex space-y-20">
          <Header />
          <Hero />
        </div>
        <WithWithout />
        <Testimonials11></Testimonials11>
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
