"use client";

import { useState, useEffect, useRef } from "react";
import type { JSX } from "react";

// Liste des fonctionnalités adaptées au trading
const features = [
  {
    name: "Education",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Access 20+ hours of in-depth trading video content.",
            "Learn proven strategies and risk management techniques.",
            "Master technical and fundamental analysis at your pace.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              🎓 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">🎓</span>,
  },
  {
    name: "Mentorship",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Join daily live mentorship sessions with expert traders.",
            "Get real-time insights and market breakdowns.",
            "Ask questions and refine your trading approach instantly.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              🎥 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">🎥</span>,
  },
  {
    name: "Daily Outlooks",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Receive market forecasts and key levels every morning.",
            "Identify high-probability trade setups in advance.",
            "Stay prepared and confident before entering trades.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              📊 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">📊</span>,
  },
  {
    name: "Setup Review",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Analyze and refine past trades for continuous improvement.",
            "Receive expert feedback on your trading decisions.",
            "Understand what went right and what to avoid next time.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              🔍 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">🔍</span>,
  },
];

const FeaturesListicle = () => {
  const featuresEndRef = useRef<null>(null);
  const [featureSelected, setFeatureSelected] = useState<string>(
    features[0].name
  );
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(
          (feature) => feature.name === featureSelected
        );
        const nextIndex = (index + 1) % features.length;
        setFeatureSelected(features[nextIndex].name);
      }
    }, 5000);

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            clearInterval(interval);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (featuresEndRef.current) {
        observer.observe(featuresEndRef.current);
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className="py-24" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-100 max-md:px-8 max-w-3xl">
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
            Master Trading with Structured Learning & Live Mentorship
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            Gain access to professional trading education, daily market
            insights, and expert mentorship to refine your skills and stay ahead
            in the markets.
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">
          {features.map((feature) => (
            <span
              key={feature.name}
              onClick={() => {
                if (!hasClicked) setHasClicked(true);
                setFeatureSelected(feature.name);
              }}
              className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
            >
              <span
                className={`duration-100 ${
                  featureSelected === feature.name
                    ? "text-primary"
                    : "text-base-content/30 group-hover:text-base-content/50"
                }`}
              >
                {feature.svg}
              </span>
              <span
                className={`font-semibold text-sm ${
                  featureSelected === feature.name
                    ? "text-primary"
                    : "text-base-content/50"
                }`}
              >
                {feature.name}
              </span>
            </span>
          ))}
        </div>
        <div className="bg-base-200">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
            <div
              className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
              key={featureSelected}
            >
              <h3 className="font-semibold text-base-content text-lg">
                {features.find((f) => f.name === featureSelected)?.name}
              </h3>
              {features.find((f) => f.name === featureSelected)?.description}
            </div>
          </div>
        </div>
      </div>
      <p className="opacity-0" ref={featuresEndRef}></p>
    </section>
  );
};

export default FeaturesListicle;
