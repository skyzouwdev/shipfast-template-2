import Link from "next/link";
import Image from "next/image";

// Composants locaux
import TestimonialsAvatars from "./TestimonialsAvatars";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex items-center justify-center flex-col gap-10 lg:gap-14 px-8 py-8 lg:py-20">
      <div className="flex flex-col items-center justify-center text-center gap-10 lg:gap-16">
        <div className="flex items-center gap-3">
          <Image
            src="/skyz.png"
            alt="Skyzouw logo"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full border border-base-200 shadow-sm"
          />
          <span className="text-lg font-semibold text-base-content/80">
            by Skyzouw
          </span>
        </div>
        <div className="flex flex-col items-center lg:items-center gap-4 space-y-6">
          <h1 className="font-extrabold text-5xl lg:text-6xl tracking-tight md:-mb-4">
            Learn to trade{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-primary">in months</span>
            </span>
            ,{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-base-100 transform scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 ">not years</span>
            </span>
          </h1>
          <p className="text-xl font-medium leading-relaxed">
            Reaching profitability never been so easy - Even as a complete
            beginner
          </p>
          <Link
            href={`/#pricing`}
            className="btn bg-primary hover:bg-primary text-white rounded-full px-12 py-4 flex items-center justify-center text-center h-auto flex-shrink-0 leading-tight hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Get instant access
          </Link>
          <TestimonialsAvatars />
        </div>
        <div className="flex flex-col items-center lg:items-center gap-y-3 lg:w-full">
          <div className="text-center font-bold text-4xl lg:text-4xl flex-nowrap">
            Join the <span className="text-primary">best</span>{" "}
            <span className="text-primary">trading</span> group
          </div>
          <div className="flex flex-row gap-3 lg:gap-5 items-center w-full max-w-screen-lg">
            <div className="w-full lg:w-1/2">
              <Image
                src="/a.png"
                alt="Screen showing trading platform"
                width={1000}
                height={700}
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/b.png"
                alt="Another screen showing trading platform"
                width={1000}
                height={700}
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
