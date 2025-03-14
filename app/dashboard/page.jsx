"use client";

import React, { useState } from "react";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [discordOpen, setDiscordOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDiscord = () => {
    setDiscordOpen(!discordOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow-md relative">
        <nav className="flex items-center justify-between px-6 py-4 border-b-2 border-gray-300">
          <div className="flex items-center text-black">
            <img src="/icon.svg" alt="TradeFast Logo" className="h-12" />
            <span className="ml-2 text-xl font-semibold">TradeFast</span>
          </div>
          <div className="lg:hidden flex items-center">
            {!menuOpen && (
              <button
                onClick={toggleMenu}
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 h-8 w-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          {menuOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
              <div className="relative w-1/2 h-1/2 bg-white p-4 shadow-lg rounded-lg">
                <button
                  onClick={closeMenu}
                  className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-red-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="flex flex-col items-start space-y-4">
                  <button
                    onClick={toggleDiscord}
                    className="flex items-center bg-transparent border-none text-blue-600 hover:text-blue-800 transition-colors px-4 py-2 rounded-md"
                  >
                    <img
                      src="/discord.svg"
                      alt="Discord"
                      className="h-8 w-8 mr-1"
                    />
                    <span className="text-lg">Discord</span>
                  </button>
                  <button className="btn btn-outline px-4 py-2 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-colors">
                    Start Learning Now
                  </button>

                  <div className="flex flex-col space-y-2 mt-4">
                    <a
                      href="#chapter1"
                      className="text-lg text-gray-800 hover:text-blue-600 transition-colors link link-neutral"
                    >
                      Chapter 1
                    </a>
                    <a
                      href="#chapter2"
                      className="text-lg text-gray-800 hover:text-blue-600 transition-colors link link-neutral"
                    >
                      Chapter 2
                    </a>
                    <a
                      href="#chapter3"
                      className="text-lg text-gray-800 hover:text-blue-600 transition-colors link link-neutral"
                    >
                      Chapter 3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="hidden lg:flex flex-1 justify-center space-x-6">
            <a
              href="#chapter1"
              className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
            >
              Chapter 1
            </a>
            <a
              href="#chapter2"
              className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
            >
              Chapter 2
            </a>
            <a
              href="#chapter3"
              className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
            >
              Chapter 3
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            <button
              onClick={toggleDiscord}
              className="flex items-center bg-transparent border-none text-blue-600 hover:text-blue-800 transition-colors px-4 py-2 rounded-md"
            >
              <img src="/discord.svg" alt="Discord" className="h-8 w-8 mr-2" />
              <span className="text-lg">Discord</span>
            </button>
            <button className="btn btn-outline px-4 py-2 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-colors">
              Start Learning Now
            </button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Column - Chapters */}
        <div className="w-full md:w-1/4 bg-white p-6 border-b-2 md:border-r-2 border-gray-300 shadow-md mb-4 md:mb-0 rounded-lg">
          <h2 className="text-xl font-semibold mb-6 relative inline-block bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            1. ICT Basics
          </h2>
          <ul>
            <li className="mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 mr-2 text-neutral-content"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#video1"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
              >
                Video 1
              </a>
            </li>
            <li className="mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 mr-2 text-neutral-content"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#video2"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
              >
                Video 2
              </a>
            </li>
            <li
              className="mb-4 flex items-center border-b-2 border-gray-300 pb-4
            
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 mr-2 text-neutral-content"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#video3"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
              >
                Video 3
              </a>
            </li>

            <h2 className="text-xl font-semibold mb-6 relative inline-block bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-0 leading-relaxed whitespace-nowrap">
              2. My Strategy
            </h2>
            <li className="mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 mr-2 text-neutral-content"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#video4"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
              >
                Video 4
              </a>
            </li>
            <li className="mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 mr-2 text-neutral-content"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#video5"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
              >
                Video 5
              </a>
            </li>
            <li className="mb-4 flex items-center border-b-2 border-gray-300 pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 mr-2 text-neutral-content"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#video6"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
              >
                Video 6
              </a>
            </li>
            <h2 className="text-xl font-semibold mb-6 relative inline-block bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
              3. My journal
            </h2>
            <li className="mb-4 flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 mr-2 text-neutral-content"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#video7"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
              >
                Video 7
              </a>
            </li>
            <li className="mb-4 flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 mr-2 text-neutral-content"
              >
                <path
                  fillRule="evenodd"
                  d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#video6"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
              >
                Video 6
              </a>
            </li>
          </ul>
        </div>

        {/* Center Column - Video Player */}
        <div className="flex-1 p-6 bg-white shadow-md rounded-lg mb-4 md:mb-0">
          <h2 className="text-3xl font-semibold mb-6">Video Title</h2>
          <video
            className="w-full rounded-lg shadow-md border-2 border-gray-300"
            controls
          >
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-6 text-lg text-gray-600">
            <h3 className="font-semibold text-xl mb-2">Video Summary</h3>
            <p>
              This is a summary of the video content, providing an overview of
              the key points and details.
            </p>
            <div className="flex flex-col md:flex-row justify-between mt-16">
              <button className="btn outline border-white border-2 rounded-3xl bg-black text-white   px-6 md:px-8 flex items-center justify-center text-lg mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
                    clipRule="evenodd"
                  />
                </svg>
                Previous
              </button>
              <button className="btn outline border-white border-2 rounded-3xl bg-black text-white   px-6 md:px-8 flex items-center justify-center text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                    clipRule="evenodd"
                  />
                </svg>
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Additional Info */}
        <div className="w-full md:w-1/4 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Additional Info</h2>
          <p className="text-lg text-gray-600">
            Some additional details or features you want to add can go here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
