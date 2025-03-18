import Link from "next/link";
import Image from "next/image";

// Composants locaux
import TestimonialsAvatars from "./TestimonialsAvatars";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex items-center justify-center flex-col gap-10 lg:gap-14 px-8 py-8 lg:py-20">
      <div className="flex flex-col items-center justify-center text-center gap-20 lg:gap-24">
        <div className="flex flex-col items-center lg:items-center gap-4 space-y-6">
          <h1 className="font-extrabold text-5xl lg:text-6xl tracking-tight md:-mb-4">
            Turn your goals and routines into{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-green-500 transform scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-green-500">success</span>
            </span>
          </h1>
          <p className="text-xl font-medium leading-relaxed">
            Track your day, build powerful routines, and turn your dreams into
            reality
          </p>
          <Link
            href={`/#pricing`}
            className="btn bg-green-500 hover:bg-green-600 text-white rounded-full px-12 py-4 flex items-center justify-center text-center h-auto flex-shrink-0 leading-tight hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Achieve your goals today
          </Link>
          <TestimonialsAvatars />
        </div>
        <div className="flex flex-col items-center lg:items-center gap-y-1 lg:w-1/2">
          <div className="text-center font-bold text-3xl lg:text-4xl flex-nowrap">
            Build Healthy Habits, Stay Consistent
          </div>
          <div className="flex flex-row gap-3 lg:gap-5 items-center">
            <div className="w-1/2">
              <Image
                src="/a.png"
                alt="Screen showing trading platform"
                width={500}
                height={350}
                className="mx-auto"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/b.png"
                alt="Another screen showing trading platform"
                width={500}
                height={350}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
