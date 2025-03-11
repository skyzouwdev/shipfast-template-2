import Link from "next/link";
import Image from "next/image";

// Composants locaux
import TestimonialsAvatars from "./TestimonialsAvatars";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex items-center justify-center flex-col gap-10 lg:gap-14 px-8 py-8 lg:py-20">
      <div className="flex flex-col items-center justify-center text-center gap-20 lg:gap-24">
        <div className="flex flex-col items-center gap-16">
          <h1 className="font-extrabold text-5xl lg:text-6xl tracking-tight md:-mb-4">
            Learn to trade{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-black transform scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 underline">in weeks</span>
            </span>{" "}
            ,not months
          </h1>
          <p className="text-xl font-medium leading-relaxed">
            Reaching profitability never been so easy - Even as a complete
            beginner
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:gap-14 items-center">
        <div className="flex flex-col items-center gap-2 lg:gap-4">
          <Link
            href={`/#pricing`}
            className="btn bg-black hover:bg-black text-white rounded-full px-12 py-4 flex items-center justify-center text-center h-auto flex-shrink-0 leading-tight hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Get Access Now
          </Link>
          <TestimonialsAvatars />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center font-bold text-3xl lg:text-4xl">
            Join The Best Community
          </div>
          <div className="flex flex-col gap-3 lg:gap-5 items-center">
            <Image
              src="/Screen.png"
              alt="Screen showing trading platform"
              width={1000}
              height={700}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
