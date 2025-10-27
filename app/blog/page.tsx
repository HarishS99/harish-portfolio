"use client";

import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">My Blog</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* PLACEHOLDER BLOG CARD */}
        <Link
          href="#"
          className="block p-5 rounded-2xl border border-white/10 dark:border-white/20 bg-white/5 hover:scale-[1.01] hover:shadow-xl transition-transform duration-200"
        >
          <div className="w-full h-40 rounded-xl bg-gradient-to-br from-gray-200/40 to-gray-400/10 dark:from-gray-800/40 dark:to-gray-700/10 mb-4" />

          <span className="text-sm opacity-70 px-3 py-1 rounded-full border border-white/10 dark:border-white/20">
            Travel & Tech
          </span>

          <h2 className="text-lg font-medium mt-3">
            Coming Soon — Personal Stories & Insights
          </h2>
          <p className="text-sm opacity-80 mt-2">
            Exploring engineering, life lessons and experiences — blog launching soon.
          </p>
        </Link>
      </div>
    </main>
  );
}
