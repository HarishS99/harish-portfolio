"use client";

import Navbar from "../../(site)/components/Navbar";
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
      <footer className="text-center mt-16 mb-6 opacity-80 text-sm transition hover:opacity-100">
        <div className="flex justify-center gap-5 mb-3">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/harish-subramanian-a246a016b/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 opacity-80 hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.06h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.67 4.78 6.14V23h-4v-6.67c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.74-2.58 3.54V23h-4V8z"/>
            </svg>
          </a>
        
          {/* GitHub */}
          <a href="https://github.com/HarishS99" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 opacity-80 hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.22-.02-2.21-3.2.7-3.88-1.39-3.88-1.39-.52-1.32-1.28-1.67-1.28-1.67-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.97 10.97 0 0 1 12 6.8c.97.01 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.73.81 1.17 1.84 1.17 3.1 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.98 10.98 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
            </svg>
          </a>
        
          {/* Instagram */}
          <a href="https://www.instagram.com/mr_culista10" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 opacity-80 hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 
        2.66-1.34 3-3 3H7c-1.66 0-3-.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3c-2.76 0-5 2.24-5 5s2.24 5 5 5 
        5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm4.5-3c-.83 0-1.5.67-1.5 
        1.5S15.67 9 16.5 9s1.5-.67 1.5-1.5S17.33 4 16.5 4z"/>
            </svg>
          </a>
        </div>
        © {new Date().getFullYear()} Harish Subramanian — All Rights Reserved - Made with ❤️
        </footer>
    </>
  );
}
