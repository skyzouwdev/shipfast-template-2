"use client";
import { useState } from "react";
import Shit from "./Redirect";

const Pricing = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 w-full mx-auto flex flex-col items-center text-center">
        <p className="text-primary text-sm font-semibold">Pricing</p>
        <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
          Choose the plan that fits your trading journey
        </h2>
        <p className="text-base-content/80 mt-4 max-w-xl">
          Gain access to structured trading education, live mentorship, and
          personalized coaching to refine your skills and stay ahead of the
          market.
        </p>

        <div className="relative w-full max-w-7xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch mx-auto text-center">
          {/* Education Plan */}
          <div className="relative flex flex-col items-center gap-5 lg:gap-8 bg-base-100 p-12 rounded-2xl shadow-xl w-full md:w-3/4 lg:w-full max-w-lg h-full">
            <div className="flex flex-col items-center">
              <p className="text-lg lg:text-xl font-bold text-primary">
                Education
              </p>
              <p className="text-base-content/80 mt-2">
                Access 20+ hours of trading videos covering strategies, risk
                management, and mindset training.
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl tracking-tight font-extrabold">€100</p>
              <p className="text-sm text-base-content/80">Lifetime access</p>
            </div>

            <div className="space-y-2.5 leading-relaxed text-base">
              <ul className="flex flex-col space-y-4 text-left">
                <li className="flex items-center gap-2">
                  ✅ 20+ hours of structured content
                </li>
                <li className="flex items-center gap-2">
                  ✅ Learn at your own pace
                </li>
                <li className="flex items-center gap-2">
                  ✅ Proven trading strategies
                </li>
                <li className="flex items-center gap-2">
                  ✅ Risk management techniques
                </li>
              </ul>
            </div>
            <Shit />
          </div>

          {/* Mentorship Plan */}
          <div className="relative flex flex-col items-center gap-5 lg:gap-8 bg-base-100 p-12 rounded-2xl shadow-xl w-full md:w-3/4 lg:w-full max-w-lg h-full">
            <div className="flex flex-col items-center">
              <p className="text-lg lg:text-xl font-bold text-primary">
                Mentorship
              </p>
              <p className="text-base-content/80 mt-2">
                Join daily live mentorship sessions and get direct insights into
                market trends and strategies.
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl tracking-tight font-extrabold">€100</p>
              <p className="text-sm text-base-content/80">Per month</p>
            </div>

            <div className="space-y-2.5 leading-relaxed text-base">
              <ul className="flex flex-col space-y-4 text-left">
                <li className="flex items-center gap-2">
                  ✅ Daily live trading breakdowns
                </li>
                <li className="flex items-center gap-2">
                  ✅ Priority access to Q&A sessions
                </li>
                <li className="flex items-center gap-2">
                  ✅ Market analysis & trade setups
                </li>
                <li className="flex items-center gap-2">
                  ✅ Exclusive community access
                </li>
              </ul>
            </div>
            <Shit />
          </div>

          {/* One-on-One Coaching */}
          <div className="relative flex flex-col items-center gap-5 lg:gap-8 bg-base-100 p-12 rounded-2xl shadow-xl w-full md:w-3/4 lg:w-full max-w-lg h-full">
            <div className="flex flex-col items-center">
              <p className="text-lg lg:text-xl font-bold text-primary">
                One-on-One Coaching
              </p>
              <p className="text-base-content/80 mt-2">
                Get personalized coaching to improve your trading strategy, risk
                management, and mindset.
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl tracking-tight font-extrabold">€50</p>
              <p className="text-sm text-base-content/80">Per hour</p>
            </div>

            <div className="space-y-2.5 leading-relaxed text-base">
              <ul className="flex flex-col space-y-4 text-left">
                <li className="flex items-center gap-2">
                  ✅ Custom strategy review
                </li>
                <li className="flex items-center gap-2">
                  ✅ Personalized feedback on past trades
                </li>
                <li className="flex items-center gap-2">
                  ✅ Risk management optimization
                </li>
                <li className="flex items-center gap-2">
                  ✅ Ask anything & get expert guidance
                </li>
              </ul>
            </div>
            <Shit />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
