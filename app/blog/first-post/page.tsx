// app/blog/my-story/page.tsx
'use client';

import Link from 'next/link';
import Navbar from '../../(site)/components/Navbar'; // ← adjust path if your Navbar lives elsewhere
import Navbar from '../../(site)/components/Footer';
export default function MyStory() {
  return (
    <>
      <Navbar />

      {/* same container + spacing as first post */}
      <div className="max-w-3xl mx-auto px-6 pt-6">
        {/* back link aligned with content */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900 opacity-80 hover:opacity-100"
        >
          <span aria-hidden>←</span> back to blog
        </Link>

        <article className="mt-6 leading-relaxed text-[17px] text-zinc-800 font-serif">
          <h1 className="text-3xl mb-6 tracking-tight italic">my story.</h1>

          <p className="mb-6">
            I’ve spent the last few years juggling IT work, late-night production calls,
            spontaneous travel plans and conversations with strangers I’ll probably never
            meet again — and somewhere in that chaos, life has actually felt more honest
            than any five-year plan.
          </p>

          <p className="mb-6">
            I’m 25, still figuring things out — not in a meltdown way, just in a
            <em> “what’s the rush, but also what the hell is happening?” </em>
            kind of way. I’m an engineer by profession, football keeps me sane, and travel
            is my favourite way of remembering that there’s more to life than Teams calls
            and Jira tickets.
          </p>

          <p className="mb-6">
            This space isn’t a self-help blog or a Dear Diary. It’s just my little corner
            of the internet — to document the moments that disappear from Instagram in 24 hours
            and the thoughts that only show up at 2 AM in buses, airports or hostel balconies.
          </p>

          <p className="mb-10">
            I don’t know where this goes — and I kind of like it that way. If you connect with
            that, welcome. You’re already part of the story.
          </p>

          <p className="font-medium">
            — Harish <br />
            <span className="text-sm italic opacity-80">currently surviving on curiosity</span>
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
