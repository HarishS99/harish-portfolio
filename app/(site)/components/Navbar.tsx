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
    <nav className="flex items-center justify-between py-4 px-8 mb-8 sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-black/80 border-b border-white/10 dark:border-white/10 shadow-sm">
      <div className="text-sm flex gap-8 text-gray-600 dark:text-gray-300">
        <a href="#about" className="hover:text-black dark:hover:text-white transition">About</a>
        <a href="#education" className="hover:text-black dark:hover:text-white transition">Education</a>
        <a href="#experience" className="hover:text-black dark:hover:text-white transition">Experience</a>
        <a href="#certifications" className="hover:text-black dark:hover:text-white transition">Certifications</a>
        <a href="#projects-impact" className="hover:text-black dark:hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a>
      </div>

      <button
        onClick={onToggle}
        className="text-lg opacity-90 hover:opacity-100 transition-transform duration-200"
        aria-label="Toggle theme"
      >
        {typeof window !== "undefined" &&
        document.documentElement.classList.contains("dark") ? (
          <span className="inline-block transition-transform duration-200">🌙</span>
        ) : (
          <span className="inline-block transition-transform duration-200">💡</span>
        )}
      </button>
    </nav>
  );
}
