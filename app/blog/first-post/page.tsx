import Navbar from "../../(site)/components/Navbar";
import Footer from "../../(site)/components/Footer";

// app/my-story/page.tsx  — Next.js App Router
export default function MyStory() {
  return (
    <>
    < Navbar/>
   <a href="/blog" className="text-sm opacity-70 hover:opacity-100 mb-6 inline-block">
  ← back to blog
    </a>
    <main className="min-h-screen bg-[#FAF7F2] px-6 py-20">
      <div className="max-w-3xl mx-auto font-serif leading-relaxed text-[17px] text-zinc-800">
        <h1 className="text-3xl italic mb-10 tracking-tight">
          my story.
        </h1>

        <p className="mb-6">
          I’ve spent the last few years juggling IT work, late-night production calls,
          spontaneous travel plans and conversations with strangers I’ll probably never
          meet again — and somewhere in that chaos, life has actually felt more honest
          than any five-year plan.
        </p>

        <p className="mb-6">
          I’m 25, still figuring things out — not in a meltdown way, just in a 
          <em>“what’s the rush, but also what the hell is happening?”</em> kind of way.
          I’m an engineer by profession, football keeps me sane, and travel is my favourite
          way of remembering that there’s more to life than Teams calls and Jira tickets.
        </p>

        <p className="mb-6">
          This space isn’t a self-help blog or a Dear Diary. It’s just my little corner of
          the internet — to document the moments that disappear from Instagram in 24 hours
          and the thoughts that only show up at 2 AM in buses, airports or hostel balconies.
        </p>

        <p className="mb-12">
          I don’t know where this goes — and I kind of like it that way. If you connect 
          with that, welcome. You’re already part of the story.
        </p>

        <p className="font-medium">
          — Harish <br />
          <span className="text-[15px] italic opacity-80">
            currently surviving on curiosity
          </span>
        </p>
      </div>
    </main>
    < Footer/>
    </>
  )
}
