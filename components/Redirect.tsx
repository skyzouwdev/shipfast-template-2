"use client";
import Link from "next/link";
function Shit() {
  return (
    <Link
      href={`/#pricing`}
      className="btn bg-black hover:bg-black text-white rounded-full px-12 py-4 flex items-center justify-center text-center h-auto flex-shrink-0 leading-tight hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      Get Access Now
    </Link>
  );
}
export default Shit;
