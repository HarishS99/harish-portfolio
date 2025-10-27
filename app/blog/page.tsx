"use client";

import { useState } from "react";
import Navbar from "../(site)/components/Navbar";
import Link from "next/link";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["All", "Tech", "Travel", "Learnings"];

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6 md:p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Blog</h1>

        {/* Category Pills */}
        <div className="flex gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat.toLowerCase())}
              className={`px-4 py-1 rounded-full text-sm transition border ${
                activeCategory === cat.toLowerCase()
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        {/* Blog Cards */}
        <div className="grid gap-8">
          <Link
            href="/blog/first-post"
            className="block p-5 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md hover:scale-[1.01] hover:shadow-xl transition-transform duration-300"
          >
            <div className="w-full h-40 rounded-xl bg-gradient-to-br from-gray-200/50 to-gray-400/10 dark:from-gray-800/50 dark:to-gray-700/20 mb-4" />
        
            <span className="text-sm opacity-70 px-3 py-1 rounded-full border border-white/10 dark:border-white/20">
              Learnings
            </span>
        
            <h2 className="text-lg font-medium mt-3">
              From Engineering Execution to Strategic Intuition — Finding My Voice Beyond Just Tech
            </h2>
            <p className="text-sm opacity-80 mt-2">
              A personal shift from “just building” to truly understanding why and for whom —
              where intuition starts to matter more than pure execution.
            </p>
          </Link>
        </div>

      </main>
    </>
  );
}
