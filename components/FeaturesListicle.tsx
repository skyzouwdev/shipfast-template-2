"use client";

import { useState, useEffect, useRef } from "react";
import type { JSX } from "react";

// Liste des fonctionnalités
const features = [
  {
    name: "Meals",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Track your daily meals easily.",
            "Discover eating patterns and improve your diet.",
            "Make healthier decisions effortlessly.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              🥗 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">🥗</span>,
  },
  {
    name: "Sleep",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Monitor your sleep patterns.",
            "Improve your sleep quality.",
            "Wake up feeling refreshed every day.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              🌙 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">🌙</span>,
  },
  {
    name: "Meditation",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Track your meditation sessions.",
            "Reduce stress and increase focus.",
            "Build a habit of mindfulness.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              🧘 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">🧘</span>,
  },
  {
    name: "Exercise",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Log your workouts and track progress.",
            "Stay consistent with exercise routines.",
            "Boost your energy and stay fit.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              🏃 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">🏃</span>,
  },
  {
    name: "Goals",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Set and achieve personal goals.",
            "Stay motivated with clear milestones.",
            "Track progress towards success.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              🎯 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">🎯</span>,
  },
  {
    name: "Daily Review",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Reflect on your day with structured reviews.",
            "Identify areas of improvement.",
            "Build a habit of self-awareness and growth.",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              📔 {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <span className="text-4xl">📔</span>,
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
            Build strong habits, track your progress, and achieve more.
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            BetterLife gives you everything you need to track your habits
            effortlessly. Stop struggling, stay motivated, and easily achieve
            your daily goals.
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
