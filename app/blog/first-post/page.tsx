"use client";

import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="min-h-screen p-6 md:p-10 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="text-sm opacity-70 hover:opacity-100 transition inline-block mb-6"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-2">
        Coming Soon — Personal Stories & Insights
      </h1>
      <p className="opacity-70 text-sm mb-10">Published: October 2025 · Category: Travel & Tech</p>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to my upcoming blog section! Here I’ll be sharing a mix of my
          personal travels, professional learnings, and perspectives from my
          journey as a tech enthusiast and storyteller.
        </p>

        <p>
          This space will evolve with time — from deep dives into infrastructure
          and AI to reflections from my travel experiences across Asia.
        </p>

        <p>
          Stay tuned — and feel free to connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/harish-subramanian-a246a016b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/HarishS99"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </main>
  );
}
