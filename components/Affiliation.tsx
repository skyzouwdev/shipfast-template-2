import { useState } from "react";
import Image from "next/image";
import TestimonialRating from "./TestimonialRating";

const AffiliateSection = () => {
  const [referrals, setReferrals] = useState(1);
  const earnings = referrals * 50;

  return (
    <div className="flex flex-col justify-center text-center items-center p-8 bg-base-100 shadow-md rounded-lg">
      <div className="w-full max-w-md">
        <Image
          src="/com.png"
          alt="Commission"
          width={900}
          height={900}
          className="w-full h-auto "
        />
      </div>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold">
          Earn ${earnings} today with commissions
        </h2>
        <p className="mt-4 text-gray-600">
          When you refer a new student to TradeFast, you earn 50% of the current
          price.
        </p>
        <button className="btn btn-primary mt-6">Become an Affiliate</button>
      </div>
      <div className="mt-10 w-full max-w-md md:w-3/4 lg:w-1/2">
        <label
          htmlFor="referrals"
          className="block text-lg font-medium text-gray-700 text-center"
        >
          {referrals} referral{referrals > 1 ? "s" : ""}
        </label>
        <input
          id="referrals"
          type="range"
          min="1"
          max="100"
          value={referrals}
          onChange={(e) => setReferrals(Number(e.target.value))}
          className="w-full mt-2 bg-base-100"
        />
      </div>
    </div>
  );
};

export default AffiliateSection;
