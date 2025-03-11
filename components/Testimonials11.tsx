import { JSX } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import config from "@/config";

const refTypes: {
  productHunt: {
    id: string;
    ariaLabel: string;
    svg: JSX.Element;
  };
  twitter: {
    id: string;
    ariaLabel: string;
    svg: JSX.Element;
  };
  other: { id: string; ariaLabel?: null; svg?: null };
} = {
  productHunt: {
    id: "product_hunt",
    ariaLabel: "See user review on Product Hunt",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.245 26.256"
        className="w-[18px] h-[18px]"
      >
        <path
          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
          fill="#da552f"
        />
        <path
          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
          fill="#fff"
        />
      </svg>
    ),
  },
  twitter: {
    id: "twitter",
    ariaLabel: "See user post on Twitter",
    svg: (
      <svg
        className="w-5 h-5 fill-[#00aCee]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
      </svg>
    ),
  },
  other: { id: "other" },
};

const list: {
  username?: string;
  name: string;
  text: string;
  type?: (typeof refTypes)[keyof typeof refTypes];
  link?: string;
  img?: string | StaticImageData;
}[] = [
  {
    username: "fasttrader",
    name: "John Doe",
    text: "TradeFast has revolutionized my trading. The platform is intuitive, and I can make trades faster than ever. It's a game changer for serious traders!",
    type: refTypes.twitter,
    link: "https://twitter.com/fasttrader",
    img: "https://pbs.twimg.com/profile_images/1234567890/johndoe.jpg",
  },
  {
    username: "speedytrader",
    name: "Anna Smith",
    text: "With TradeFast, I'm able to execute trades quickly and efficiently. The platform makes trading feel easy and accessible. Highly recommend it to anyone looking to boost their trading speed.",
    type: refTypes.twitter,
    link: "https://twitter.com/speedytrader",
  },
  {
    username: "quickinvestor",
    name: "Michael Brown",
    text: "I was struggling to keep up with the market, but TradeFast has helped me execute trades much faster. I feel more confident with my decisions now.",
    type: refTypes.productHunt,
    link: "https://www.producthunt.com/posts/tradefast",
  },
  {
    name: "James Lee",
    text: "TradeFast is a great tool for anyone who wants to take their trading to the next level. It's simple, quick, and effective. I've seen a huge improvement in my trades!",
    type: refTypes.other,
  },
  {
    username: "fasttracktrader",
    name: "Sophia Johnson",
    text: "I’ve used other platforms before, but nothing compares to TradeFast’s speed and ease of use. It’s truly designed with traders in mind.",
    type: refTypes.productHunt,
    link: "https://www.producthunt.com/posts/tradefast",
  },
  {
    username: "marketpro",
    name: "David Miller",
    text: "TradeFast has made a huge difference in how I trade. The speed at which I can execute trades is incredible, and it’s helped me become a more efficient trader overall.",
    type: refTypes.twitter,
    link: "https://twitter.com/marketpro",
    img: "https://pbs.twimg.com/profile_images/9876543210/davidmiller.jpg",
  },
];

const Testimonial = ({ i }: { i: number }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative h-full p-6 bg-base-100 rounded-lg">
        <blockquote className="relative">
          <p className="text-sm text-base-content/80">{testimonial.text}</p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
          <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
            {i === 0 ? (
              <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                J
              </span>
            ) : i === 5 ? (
              <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                D
              </span>
            ) : testimonial.img ? (
              <Image
                className="w-10 h-10 rounded-full object-cover"
                src={list[i].img}
                alt={`${list[i].name}'s testimonial for ${config.appName}`}
                width={48}
                height={48}
              />
            ) : (
              <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="w-full flex items-end justify-between gap-2">
            <div>
              <div className="text-sm font-medium text-base-content">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>

            {testimonial.link && testimonial.type?.svg && (
              <a
                href={testimonial.link}
                target="_blank"
                className="shrink-0 "
                aria-label={testimonial.type?.ariaLabel}
              >
                {testimonial.type?.svg}
              </a>
            )}
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials11 = () => {
  return (
    <section className="bg-base-100" id="testimonials-section">
      {" "}
      {/* Ajout de l'id */}
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <p className="text-primary text-sm font-semibold">Review</p>
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              32 traders are already trading faster!
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Don&apos;t take our word for it. Here&apos;s what they have to say
            about TradeFast.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:max-w-none"
        >
          {[...Array(6)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials11;
