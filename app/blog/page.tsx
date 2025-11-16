"use client";

import { useState } from "react";
import Navbar from "../(site)/components/Navbar";
import Footer from "../(site)/components/Footer";
import Link from "next/link";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["All", "Tech", "Travel", "Learnings"];

  // Define posts with a `category` key (lowercase)
  const posts = [
    {
      id: 1,
      title: "My Story",
      href: "/blog/first-post",
      external: false,
      date: "Nov 2025",
      category: "learnings",
      excerpt: "Everything Harish...",
      img: "/background.png",
    },
    {
      id: 2,
      title: "Stats for Machine Learning",
      href: "https://medium.com/@srnayak165/statistics-for-machine-learning-a-beginners-guide-35901f8e43c4",
      external: true,
      date: "Nov 2025",
      category: "tech", // <-- set this one to tech
      excerpt: "An interesting read on the Stats for ML Models",
      img: "/background.png",
    },
  ];

  // Filter posts according to activeCategory
  const visiblePosts = posts.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6 md:p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Blog</h1>

        {/* Category Pills */}
        <div className="flex gap-3 mb-10">
          {categories.map((cat) => {
            const lower = cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(lower)}
                className={`px-4 py-1 rounded-full text-sm transition border ${
                  activeCategory === lower
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Cards - ONE GRID CONTAINING BOTH (but filtered) */}
        <div className="grid gap-8">
          {visiblePosts.map((p) =>
            p.external ? (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md hover:scale-[1.01] hover:shadow-xl transition-transform duration-300"
              >
                <img
                  src={p.img}
                  alt="Blog Cover"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <p className="text-xs opacity-60">{p.date}</p>
                <span className="text-sm opacity-70 px-3 py-1 rounded-full border border-white/10 dark:border-white/20 mt-1 inline-block">
                  {p.category.charAt(0).toUpperCase() + p.category.slice(1)}
                </span>
                <h2 className="text-lg font-medium mt-3">{p.title}</h2>
                <p className="text-sm opacity-80 mt-2">{p.excerpt}</p>
              </a>
            ) : (
              <Link
                key={p.id}
                href={p.href}
                className="block p-5 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md hover:scale-[1.01] hover:shadow-xl transition-transform duration-300"
              >
                <img
                  src={p.img}
                  alt="Blog Cover"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <p className="text-xs opacity-60">{p.date}</p>
                <span className="text-sm opacity-70 px-3 py-1 rounded-full border border-white/10 dark:border-white/20 mt-1 inline-block">
                  {p.category.charAt(0).toUpperCase() + p.category.slice(1)}
                </span>
                <h2 className="text-lg font-medium mt-3">{p.title}</h2>
                <p className="text-sm opacity-80 mt-2">{p.excerpt}</p>
              </Link>
            )
          )}

          {/* Optional: show a message when no posts match */}
          {visiblePosts.length === 0 && (
            <p className="text-sm opacity-70">No posts in this category yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
