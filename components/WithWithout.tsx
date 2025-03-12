import React from "react";

const WithWithout = () => {
  return (
    <section className="w-full mx-auto text-center py-32 px-6 bg-black">
      <h2 className="text-3xl lg:text-4xl text-white font-bold mb-8">
        Tired of <span className="text-[#FF8B8B]">losing money</span> in trading
        ? Get <span className="text-[#8BFF8B]">TradeFast</span>
      </h2>
      <div className="p-8 flex flex-col md:flex-row gap-8 mb-16 justify-center items-center">
        {/* Colonne "Sans" */}
        <div className="w-full md:w-4/12 bg-[#2A1E1E] p-6 rounded-xl border border-[#FF8B8B] min-h-[300px] md:min-h-[370px] flex flex-col h-full">
          <h3 className="text-[#FF8B8B] font-bold text-lg mb-4 w-full text-center">
            Trading without TradeFast
          </h3>
          <ul className="text-[#FF8B8B] space-y-8 text-left w-full text-center h-full flex flex-col justify-between">
            <li className="text-sm md:text-base">✗ Lack of consistency</li>
            <li className="text-sm md:text-base">✗ Strategy Hopping </li>
            <li className="text-sm md:text-base">✗ Don&apos;t have an edge </li>
            <li className="text-sm md:text-base">✗ Losing money </li>
            <li className="text-sm md:text-base">✗ Quitting trading</li>
          </ul>
        </div>

        {/* Colonne "Avec" */}
        <div className="w-full md:w-4/12 bg-[#1E2A1E] p-6 rounded-xl border border-[#8BFF8B] min-h-[300px] md:min-h-[370px] flex flex-col h-full">
          <h3 className="text-[#8BFF8B] font-bold text-lg mb-4 w-full text-center">
            Trading with TradeFast
          </h3>
          <ul className="text-[#8BFF8B] space-y-8 text-left w-full text-center h-full flex flex-col justify-between">
            <li className="text-sm md:text-base">✓ Consistency every month</li>
            <li className="text-sm md:text-base">
              ✓ Stick to one strategy and master it{" "}
            </li>
            <li className="text-sm md:text-base">✓ Have a real edge </li>
            <li className="text-sm md:text-base">
              ✓ Earn while learning with signals
            </li>
            <li className="text-sm md:text-base">
              ✓ Make trading your full-time job
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WithWithout;
