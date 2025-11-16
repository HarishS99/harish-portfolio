"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../(site)/components/Navbar";
import Footer from "../(site)/components/Footer";

/* --- Types --- */
type InternalPost = {
  id: number;
  title: string;
  href: `/blog/${string}`; // internal route literal
  external: false;
  date: string;
  category: "tech" | "travel" | "learnings" | string;
  excerpt: string;
  img: string;
};

type ExternalPost = {
  id: number;
  title: string;
  href: string; // external full URL
  external: true;
  date: string;
  category: "tech" | "travel" | "learnings" | string;
  excerpt: string;
  img: string;
};

type BlogPost = InternalPost | ExternalPost;

export default function BlogPage(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["All", "Tech", "Travel", "Learnings"] as const;

  const posts: BlogPost[] = [
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
      category: "tech",
      excerpt: "An interesting read on the Stats for ML Models",
      img: "/background.png",
    },
  ];

  // filter first (still union-typed)
  const filtered = posts.filter(
    (p) => activeCategory === "all" || p.category.toLowerCase() === activeCategory
  );

  /**
   * --- CRITICAL CHANGE: split into two typed arrays up front ---
   * We use type predicates to narrow the arrays statically.
   */
  const internalPosts = filtered.filter(
    (p): p is InternalPost => (p as BlogPost).external === false
  );

  const externalPosts = filtered.filter(
    (p): p is ExternalPost => (p as BlogPost).external === true
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

        {/* Blog Cards Grid */}
        <div className="grid gap-8">
          {/* Render internal posts with Link — TS knows href is `/blog/${string}` */}
          {internalPosts.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="block p-5 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md hover:scale-[1.01] hover:shadow-xl transition-transform duration-300"
            >
              <img
                src={p.img}
                alt={`${p.title} cover`}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <p className="text-xs opacity-60">{p.date}</p>

              <span className="text-sm opacity-70 px-3 py-1 rounded-full border border-white/10 dark:border-white/20 mt-1 inline-block">
                {p.category.charAt(0).toUpperCase() + p.category.slice(1)}
              </span>

              <h2 className="text-lg font-medium mt-3">{p.title}</h2>
              <p className="text-sm opacity-80 mt-2">{p.excerpt}</p>
            </Link>
          ))}

          {/* Render external posts with <a> */}
          {externalPosts.map((p) => (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md hover:scale-[1.01] hover:shadow-xl transition-transform duration-300"
            >
              <img
                src={p.img}
                alt={`${p.title} cover`}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <p className="text-xs opacity-60">{p.date}</p>

              <span className="text-sm opacity-70 px-3 py-1 rounded-full border border-white/10 dark:border-white/20 mt-1 inline-block">
                {p.category.charAt(0).toUpperCase() + p.category.slice(1)}
              </span>

              <h2 className="text-lg font-medium mt-3">{p.title}</h2>
              <p className="text-sm opacity-80 mt-2">{p.excerpt}</p>
            </a>
          ))}

          {/* If none */}
          {internalPosts.length + externalPosts.length === 0 && (
            <p className="text-sm opacity-70">No posts in this category yet.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
