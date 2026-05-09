import React, { useState } from "react";

// --- Types ---
type Category = "All" | "Tech" | "SaaS" | "Marketing";

interface BlogPost {
  id: string;
  category: string;
  title: string;
  date: string;
  imageUrl: string;
}

// --- Mock Data ---
const blogPosts: BlogPost[] = [
  {
    id: "1",
    category: "Tech",
    title: "The Ultimate Guide To SaaS Marketing",
    date: "May 23, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800&h=600", // Red-toned drink image placeholder
  },
  {
    id: "2",
    category: "SaaS",
    title: "5 Key Trends In SaaS Growth For 2025",
    date: "May 23, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800&h=600", // Chair placeholder
  },
  {
    id: "3",
    category: "Marketing",
    title: "How Data-Driven Strategies Are Important",
    date: "May 23, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800&h=600", // Cat placeholder
  },
];

const categories: Category[] = ["All", "Tech", "SaaS", "Marketing"];

export default function Scalex() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  return (
    // Added pt-24 here to offset the height of the fixed navbar
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff4d00] selection:text-white pb-20 pt-24">
      {/* Navigation - Made fixed, top-0, with a background to prevent content bleed */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-5 md:px-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 cursor-pointer">
            {/* Logo SVG Placeholder */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6667 6.66663H13.3333L6.66663 13.3333H20L26.6667 6.66663Z"
                fill="white"
              />
              <path
                d="M33.3333 13.3333L26.6667 20H13.3333L20 13.3333H33.3333Z"
                fill="white"
              />
              <path d="M20 20L13.3333 26.6666H0L6.66663 20H20Z" fill="white" />
            </svg>
            <span className="text-xl font-semibold tracking-tight">ScaleX</span>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              About Us
            </li>
            <li className="text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Contact Us
            </li>
          </ul>

          <button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mt-12 md:mt-20 mb-16 px-6 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold tracking-tighter mb-10">
          Insights & Blogs
        </h1>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#ff4d00] text-white"
                  : "bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Blog Cards Grid */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#111111] rounded-[24px] overflow-hidden flex flex-col group cursor-pointer hover:bg-[#151515] transition-colors"
            >
              {/* Image Container */}
              <div className="w-full h-64 sm:h-72 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-[#2d1810] text-[#ff6b35] text-xs font-medium px-3 py-1.5 rounded-md">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold leading-snug mb-6 text-gray-100 line-clamp-2">
                  {post.title}
                </h2>

                {/* Date (pushed to bottom) */}
                <p className="text-gray-500 text-sm mt-auto font-medium">
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
