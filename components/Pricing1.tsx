"use client";
import { useState } from "react";
import ButtonCheckout from "./ButtonCheckout";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 w-full mx-auto flex flex-col items-center text-center">
        <p className="text-primary text-sm font-semibold">Pricing</p>
        <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
          Build better habits and take control of your life
        </h2>
        <p className="text-base-content/80 mt-4 max-w-xl">
          Gain access to the ultimate habit-tracking system. Stay consistent,
          stay motivated, and achieve your goals effortlessly.
        </p>

        <div className="relative w-full max-w-lg mt-12">
          <div className="relative flex flex-col items-center gap-5 lg:gap-8 bg-base-100 p-12 rounded-2xl shadow-xl">
            <div className="flex flex-col items-center">
              <p className="text-lg lg:text-xl font-bold">Membership</p>
              <p className="text-base-content/80 mt-2">
                Get full access to all tracking features and insights.
              </p>
            </div>

            {/* Toggle button */}
            <div className="flex items-center justify-center space-x-4">
              <button
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  isMonthly ? "bg-primary text-white" : "bg-base-300"
                }`}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  !isMonthly ? "bg-primary text-white" : "bg-base-300"
                }`}
                onClick={() => setIsMonthly(false)}
              >
                Lifetime
              </button>
            </div>

            {/* Pricing display */}
            <div className="text-center">
              <p className="text-5xl tracking-tight font-extrabold">
                {isMonthly ? "€10" : "€50"}
              </p>
              <p className="text-sm text-base-content/80">
                {isMonthly ? "Per month" : "Lifetime access"}
              </p>
            </div>

            <div className="space-y-2.5 leading-relaxed text-base">
              <ul className="flex flex-col space-y-4 text-left">
                <li className="flex items-center gap-2">
                  ✅ Unlimited habit tracking
                </li>
                <li className="flex items-center gap-2">
                  ✅ Personalized insights & reports
                </li>
                <li className="flex items-center gap-2">
                  ✅ Access to community & challenges
                </li>
                <li className="flex items-center gap-2">
                  ✅ No ads, no distractions
                </li>
              </ul>
            </div>

            <div className="space-y-2 flex flex-col items-center justify-center text-center w-full">
              <ButtonCheckout className="min-w-[200px]" />
              <div className="text-center text-sm opacity-90">
                Choose your plan and start building strong habits today.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
