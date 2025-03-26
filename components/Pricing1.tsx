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

        <div className="relative w-full max-w-7xl mt-12 flex flex-col lg:flex-row gap-8 mx-auto text-center">
          {/* Education Plan */}
          <div className="relative flex flex-col items-center gap-5 lg:gap-8 bg-base-100 p-6 md:p-10 lg:p-12 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg h-full mx-auto">
            <div className="flex flex-col items-center">
              <p className="text-lg lg:text-xl font-bold text-primary">
                Education
              </p>
              <p className="text-base-content/80 mt-2">
                Access 20+ hours of trading videos covering ICT bases, my
                strategy cases studies , and gain access to my personal journal.
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
                  ✅ Psycology & mindset training
                </li>
                <li className="flex items-center gap-2">
                  ✅ My strategy & risk management
                </li>
                <li className="flex items-center gap-2">
                  ✅ My personal trading journal
                </li>
              </ul>
            </div>
            <Shit href="https://whop.com/tradefast-education/" />
          </div>

          {/* Mentorship Plan */}
          <div className="relative flex flex-col items-center gap-5 lg:gap-8 bg-base-100 p-6 md:p-10 lg:p-12 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg h-full mx-auto">
            <div className="flex flex-col items-center">
              <p className="text-lg lg:text-xl font-bold text-primary">
                Mentorship
              </p>
              <p className="text-base-content/80 mt-2">
                Level up your trading with daily live mentorship — get expert
                guidance and full support, every step of the way.
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl tracking-tight font-extrabold">€100</p>
              <p className="text-sm text-base-content/80">Per month</p>
            </div>

            <div className="space-y-2.5 leading-relaxed text-base">
              <ul className="flex flex-col space-y-4 text-left">
                <li className="flex items-center gap-2">
                  ✅ Daily live trading outlooks/reviews
                </li>
                <li className="flex items-center gap-2">
                  ✅ Access to Q&A sessions
                </li>
                <li className="flex items-center gap-2">
                  ✅ Personalized trade feedback
                </li>
                <li className="flex items-center gap-2">
                  ✅ Exclusive community access
                </li>
              </ul>
            </div>
            <Shit href="https://whop.com/tradefast-mentorship/" />
          </div>

          {/* One-on-One Coaching */}
          <div className="relative flex flex-col items-center gap-5 lg:gap-8 bg-base-100 p-6 md:p-10 lg:p-12 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg h-full mx-auto">
            <div className="flex flex-col items-center">
              <p className="text-lg lg:text-xl font-bold text-primary">
                One-on-One Coaching
              </p>
              <p className="text-base-content/80 mt-2">
                Book a private 1-hour session to review your trades, journal,
                and strategy in depth.
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl tracking-tight font-extrabold">€50</p>
              <p className="text-sm text-base-content/80">Per hour</p>
            </div>

            <div className="space-y-2.5 leading-relaxed text-base">
              <ul className="flex flex-col space-y-4 text-left">
                <li className="flex items-center gap-2">
                  ✅ 1-hour private coaching session
                </li>
                <li className="flex items-center gap-2">
                  ✅ Strategy breakdown & trade feedback
                </li>
                <li className="flex items-center gap-2">
                  ✅ Journal & risk management insights
                </li>
                <li className="flex items-center gap-2">
                  ✅ Fully personalized support
                </li>
              </ul>
            </div>
            <Shit href="https://whop.com/1-on-1-coaching-call-63/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
