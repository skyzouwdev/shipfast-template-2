import Image from "next/image";

// A tailored testimonial for BetterLife
const Testimonial = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-base-100 px-8 py-24 sm:py-32"
      id="testimonials"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.base-300),theme(colors.base-100))] opacity-20" />
      {/* Removed the middle screen line */}
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <figure className="mt-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative rounded-xl border border-base-content/5 bg-base-content/5 p-1.5 sm:-rotate-1">
              <Image
                width={320}
                height={320}
                className="rounded-lg max-w-[320px] md:max-w-[280px] lg:max-w-[320px] object-center border-2 border-white/10 shadow-md"
                src="/image.png"
                alt="A satisfied BetterLife user"
              />
            </div>

            <div>
              <blockquote className="text-xl font-medium leading-8 text-base-content sm:text-2xl sm:leading-10">
                "Thanks to the mentorship and personalized guidance, I was able
                to structure my trading strategy and achieve real results. In
                just a few weeks, I gained discipline and confidence, and today,
                I execute profitable trades with ease."
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-start gap-5">
                <div className="text-base">
                  <div className="font-semibold text-base-content mb-0.5">
                    Ayoub Bouadel
                  </div>
                  <div className="text-base-content/60">
                    Independent Trader &amp; Mentorship Student
                  </div>
                </div>

                <Image
                  width={150}
                  height={50}
                  className="w-16 md:w-20"
                  src="/trade.png"
                  alt="Sport logo"
                />
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
