"use client";

import Link from "next/link";

// Ce composant crée des sessions de paiement Stripe
const ButtonCheckout = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <button
        className={`bg-black text-white hover:bg-gray-800 w-full mr-4 rounded-full px-6 py-2 ${className}`}
        onClick={() => (window.location.href = "/your-link")}
      >
        <span>Get TradeFast</span>
      </button>
    </>
  );
};

export default ButtonCheckout;
