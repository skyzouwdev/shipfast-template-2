import React from "react";

const WithWithout = () => {
  return (
    <section className="bg-gradient-to-b from-base-100 to-base-200 py-16 px-6 text-center rounded-lg shadow-md">
      <h1 className="text-2xl md:text-4xl font-bold text-primary">
        Most traders fail because they don’t follow a structured system.
      </h1>
      <p className="mt-4 text-base md:text-lg text-base-content/80">
        Trading without a plan leads to emotional decisions, inconsistency, and
        losses. Without a system, it's easy to give up.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-12 space-y-8 sm:space-y-0 sm:space-x-12">
        {/* Bloc 1 */}
        <div className="flex flex-col items-center bg-base-200 px-6 py-4 rounded-lg shadow-sm border border-base-300">
          <span className="text-4xl md:text-5xl text-primary">📉</span>
          <p className="mt-2 text-sm md:text-lg font-medium text-base-content">
            No clear strategy
          </p>
        </div>

        <span className="block sm:hidden text-gray-500 text-2xl">↓</span>
        <span className="hidden sm:block text-gray-500 text-2xl">→</span>

        {/* Bloc 2 */}
        <div className="flex flex-col items-center bg-base-200 px-6 py-4 rounded-lg shadow-sm border border-base-300">
          <span className="text-4xl md:text-5xl text-primary">😰</span>
          <p className="mt-2 text-sm md:text-lg font-medium text-base-content">
            Emotional decision-making
          </p>
        </div>

        <span className="block sm:hidden text-gray-500 text-2xl">↓</span>
        <span className="hidden sm:block text-gray-500 text-2xl">→</span>

        {/* Bloc 3 */}
        <div className="flex flex-col items-center bg-base-200 px-6 py-4 rounded-lg shadow-sm border border-base-300">
          <span className="text-4xl md:text-5xl text-primary">🚫</span>
          <p className="mt-2 text-sm md:text-lg font-medium text-base-content">
            Give up after losses
          </p>
        </div>
      </div>
    </section>
  );
};

export default WithWithout;
