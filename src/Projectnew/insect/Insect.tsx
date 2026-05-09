import React from "react";
import insectimage from "./insectimage.png";

export default function Insect() {
  return (
    <div className="min-h-screen w-full relative flex font-sans overflow-hidden bg-white text-gray-800">
      {/* Background Split */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-[#fbfbfb]"></div>
        <div className="w-1/2 bg-[#b82a24]"></div>
      </div>

      {/* Center Insect Image Overlapping Both Sides */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 h-[85vh] pointer-events-none">
        <img
          src={insectimage}
          alt="Insect in glass dome"
          className="h-full w-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 w-full px-12 py-8 flex items-center justify-between z-30">
        {/* Left Side Nav */}
        <div className="flex items-center gap-12 w-1/2">
          <div className="text-2xl font-bold tracking-widest text-[#152e27]">
            INSECT
          </div>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-[#b82a24]/20"
            />
          </div>
        </div>

        {/* Right Side Nav */}
        <div className="w-1/2 flex justify-end">
          <ul className="flex items-center gap-8 text-white text-sm font-medium">
            <li className="cursor-pointer hover:opacity-80 transition-opacity">
              Home
            </li>
            <li className="cursor-pointer hover:opacity-80 transition-opacity">
              Shop
            </li>
            <li className="cursor-pointer hover:opacity-80 transition-opacity">
              About
            </li>
            <li className="cursor-pointer hover:opacity-80 transition-opacity">
              Gallery
            </li>
            <li className="cursor-pointer hover:opacity-80 transition-opacity">
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 w-full flex h-full min-h-screen pt-32 pb-16">
        {/* Left Column (White) */}
        <div className="w-1/2 flex items-center relative pl-24 md:pl-32 lg:pl-40 pr-12">
          {/* Vertical Rotated Text */}
          <div className="absolute left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 -rotate-90 transform origin-center text-5xl lg:text-6xl font-serif text-[#152e27] tracking-wider opacity-90 whitespace-nowrap">
            Classification
          </div>

          {/* Classification List */}
          {/* FIX: Increased left margin to safely clear the rotated text's bounding box */}
          <div className="flex flex-col gap-6 ml-24 md:ml-32 lg:ml-48">
            {[
              { label: "Class", value: "Insecta" },
              { label: "Order", value: "Coleoptera" },
              { label: "Family", value: "Cerambycidae" },
              { label: "Sub-Family", value: "Cerambycinae" },
              { label: "Tribe", value: "Callichromatini" },
              { label: "Genus", value: "Pachyteria" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 border-b border-gray-200 pb-4 w-48 md:w-56 lg:w-64"
              >
                <div className="w-2 h-2 rounded-full bg-[#b82a24] mt-1.5 shrink-0 shadow-sm"></div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800 text-sm">
                    {item.label}:
                  </span>
                  <span className="text-gray-600 text-sm">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Red) */}
        <div className="w-1/2 flex items-center pl-32 lg:pl-76 pr-12 text-white">
          <div className="max-w-md">
            <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-12 drop-shadow-md">
              Pachyteria <br /> equestris
            </h1>

            {/* Details Grid */}
            <div className="flex items-center gap-12 mb-10">
              {/* Bug Outline Icon */}
              <div className="flex flex-col items-center gap-3">
                <svg
                  width="48"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/80"
                >
                  <path d="M12 20a6 6 0 0 0 6-6V9a6 6 0 0 0-12 0v5a6 6 0 0 0 6 6Z" />
                  <path d="M12 20v2" />
                  <path d="M8 9h8" />
                  <path d="M8 14h8" />
                  <path d="M5.5 12 3 10" />
                  <path d="M18.5 12 21 10" />
                  <path d="M6 16.5 3 19" />
                  <path d="M18 16.5 21 19" />
                  <path d="M9 4.5 10.5 7" />
                  <path d="M15 4.5 13.5 7" />
                </svg>
                <span className="text-sm font-medium">32 mm</span>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] h-24 bg-white/30"></div>

              {/* Location/Sex/Size Info */}
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-white/80 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-sm text-white/80">Locality:</span>
                    <span className="text-sm font-semibold">Malaysia</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-white/80 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4m16 0a8 8 0 11-16 0 8 8 0 0116 0z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-sm text-white/80">Sex:</span>
                    <span className="text-sm font-semibold">Male</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-white/80 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M9 9l6 6"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-sm text-white/80">Size:</span>
                    <span className="text-sm font-semibold">32 mm / 12 mm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="text-5xl font-bold text-[#d1b37f] mb-8 drop-shadow-sm">
              $5.99
            </div>

            {/* Toggles */}
            <div className="flex flex-col gap-4 mb-10">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-5 bg-white/30 rounded-full flex items-center px-0.5 transition-colors group-hover:bg-white/40">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
                <span className="text-sm font-medium">
                  View detailed antennae
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-5 bg-white/30 rounded-full flex items-center px-0.5 transition-colors group-hover:bg-white/40">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
                <span className="text-sm font-medium">View underside</span>
              </label>
            </div>

            {/* CTA Button */}
            <button className="bg-[#d1b37f] hover:bg-[#c2a36d] text-black px-8 py-3.5 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
              Add to collection
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
