import React from "react";

const WithWithout = () => {
  return (
    <section className="bg-base-100 text-white py-16 px-6 text-center dark:text-gray-100">
      <h1 className="text-2xl md:text-4xl font-bold">
        90% of people fail because they don’t track their habits.
      </h1>
      <p className="text-gray-400 mt-4 text-base md:text-lg">
        Meals, sleep, exercise, screen time… Without tracking, it’s easy to lose
        control.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-12 space-y-8 sm:space-y-0 sm:space-x-12">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl">💻</span>
          <p className="mt-2 text-sm md:text-lg font-medium text-gray-300">
            Forget to track habits
          </p>
        </div>
        <span className="block sm:hidden text-gray-500 text-2xl">↓</span>
        <span className="hidden sm:block text-gray-500 text-2xl">→</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl">😓</span>
          <p className="mt-2 text-sm md:text-lg font-medium text-gray-300">
            Lose motivation
          </p>
        </div>
        <span className="block sm:hidden text-gray-500 text-2xl">↓</span>
        <span className="hidden sm:block text-gray-500 text-2xl">→</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl">😔</span>
          <p className="mt-2 text-sm md:text-lg font-medium text-gray-300">
            Give up on goals
          </p>
        </div>
      </div>
    </section>
  );
};

export default WithWithout;
