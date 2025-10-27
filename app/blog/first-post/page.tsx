"use client";

import Navbar from "../../(site)/components/Navbar";
import Footer from "../(site)/components/Footer";
import Link from "next/link";

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6 md:p-10 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm opacity-70 hover:opacity-100 transition inline-block mb-6"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-3xl font-bold mb-2">
          From Engineering Execution to Strategic Intuition — Finding My Voice Beyond Just Tech
        </h1>
        <p className="opacity-70 text-sm mb-10">Published: October 2025 · Category: Personal Journey</p>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            I didn’t start my career expecting to care about anything beyond pure engineering efficiency.
            In the beginning, my world was about execution — clean architecture, scalability, performance tuning,
            fault tolerance. Build it right, build it bulletproof, ship it fast.
          </p>

          <p>
            But somewhere along the way, I started noticing something subtle yet important —
            the most powerful engineers weren’t just the ones who built things. 
            They were the ones who deeply understood <strong>why</strong> it was being built,
            and <strong>who</strong> it was being built for.
          </p>

          <p>
            That’s when everything started shifting for me — from “How do I architect this system?” 
            to “What problem is this truly solving? For whom? And does the solution matter in the real world?”
          </p>

          <h3>The Moment It Really Hit Me</h3>
          <p>
            It wasn’t during a technical war room or a midnight deployment — 
            it was during a conversation with a customer. 
            The call wasn’t about “what feature is missing” but 
            “what business risk do we eliminate if we solve this today?”  
            And suddenly — everything changed.
          </p>

          <p>
            I realized strategy is not just what leaders decide in boardrooms.
            Strategy quietly begins the moment an engineer chooses 
            <em>which</em> problem is worth solving in the first place.
          </p>

          <h3>What I Know Now</h3>
          <p>
            I used to respect pure technical mastery above everything else.
            Today, I respect <strong>technical intuition</strong> — 
            the ability to translate human needs, urgency, and context into meaningful technical outcomes.
          </p>

          <p>
            And in hindsight, this transition from execution to intuition wasn’t accidental — 
            it was inevitable. Because you can be the smartest engineer in the room, 
            but if you don’t understand human context — you’re solving problems that may not matter.
          </p>

          <hr />

          <p>
            In my next post, I’ll switch gears — and share how 
            <strong>travel exposed me to systems more chaotic and more human than anything in tech</strong>, 
            and what it taught me about simplicity, scalability, and decision-making.
          </p>
        </div>
      </main>
    <Footer/>
    </>
  );
}
