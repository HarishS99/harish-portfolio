"use client";

export default function Navbar() {
  const onToggle = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    localStorage.setItem("theme", el.classList.contains("dark") ? "dark" : "light");
  };

  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved) {
      const el = document.documentElement;
      if (saved === "dark") el.classList.add("dark");
      else el.classList.remove("dark");
    }
  }

  return (
    <nav className="flex items-center justify-between mb-8 sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-black/80">
      <div className="opacity-80 text-sm flex gap-4">
        <a href="#about" className="hover:opacity-50 transition">About</a>
        <a href="#education" className="hover:opacity-50 transition">Education</a>
        <a href="#experience" className="hover:opacity-50 transition">Experience</a>
        <a href="#certifications" className="hover:opacity-50 transition">Certifications</a>
        <a href="#projects-impact" className="hover:opacity-50 transition">Projects</a>
        <a href="#contact" className="hover:opacity-50 transition">Contact</a>
      </div>
      <button
        onClick={onToggle}
        className="text-lg opacity-80 hover:opacity-100 transition-transform duration-200"
        aria-label="Toggle theme"
      >
        {typeof window !== "undefined" &&
        document.documentElement.classList.contains("dark") ? (
          <span className="inline-block transition-transform duration-200">🌙</span> // dark mode icon
        ) : (
          <span className="inline-block transition-transform duration-200">💡</span> // light mode icon
        )}
      </button>
    </nav>
  );
}
