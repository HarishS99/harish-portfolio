"use client";

import { useState } from "react";
import Navbar from "../(site)/components/Navbar";
import Footer from "../(site)/components/Footer";
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

        {/* Blog Cards - ONE GRID CONTAINING BOTH */}
        <div className="grid gap-8">

          {/* Card 1 — Internal Link */}
          <Link
            href="/blog/first-post"
            className="block p-5 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md hover:scale-[1.01] hover:shadow-xl transition-transform duration-300"
          >
            <img
              src="/background.png"
              alt="Blog Cover"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <p className="text-xs opacity-60">Nov 2025</p>

            <span className="text-sm opacity-70 px-3 py-1 rounded-full border border-white/10 dark:border-white/20 mt-1 inline-block">
              Learnings
            </span>

            <h2 className="text-lg font-medium mt-3">My Story</h2>
            <p className="text-sm opacity-80 mt-2">Everything Harish...</p>
          </Link>

          {/* Card 2 — External Link */}
          <a
            href="https://medium.com/@srnayak165/statistics-for-machine-learning-a-beginners-guide-35901f8e43c4"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md hover:scale-[1.01] hover:shadow-xl transition-transform duration-300"
          >
            <img
              src="/background.png"
              alt="Blog Cover"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <p className="text-xs opacity-60">Nov 2025</p>

            <span className="text-sm opacity-70 px-3 py-1 rounded-full border border-white/10 dark:border-white/20 mt-1 inline-block">
              Learnings
            </span>

            <h2 className="text-lg font-medium mt-3">Stats for Machine Learning</h2>
            <p className="text-sm opacity-80 mt-2">
              An interesting read on the Stats for ML Models
            </p>
          </a>

        </div>
      </main>
      <Footer />
    </>
  );
}
