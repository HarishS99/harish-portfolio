"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDarkMode = saved === "dark";
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const onToggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <nav className="flex items-center justify-between py-4 px-8 mb-8 sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-black/80 border-b border-white/10 dark:border-white/10 shadow-sm">

      {/* LEFT - MENU LINKS (DESKTOP) */}
      <div className="hidden md:flex text-sm gap-8 text-gray-600 dark:text-gray-300">
        <a href="#about" className="hover:text-black dark:hover:text-white transition">About</a>
        <a href="#education" className="hover:text-black dark:hover:text-white transition">Education</a>
        <a href="#experience" className="hover:text-black dark:hover:text-white transition">Experience</a>
        <a href="#certifications" className="hover:text-black dark:hover:text-white transition">Certifications</a>
        <a href="#projects-impact" className="hover:text-black dark:hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a>
      </div>

      {/* RIGHT - THEME TOGGLE + HAMBURGER (MOBILE + DESKTOP) */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleTheme}
          className="text-lg opacity-90 hover:opacity-100 transition-transform duration-200"
          aria-label="Toggle theme"
        >
          {isDark ? "🌙" : "💡"}
        </button>

        {/* HAMBURGER (MOBILE ONLY) */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
          <div className="w-64 h-full bg-white dark:bg-black shadow-lg p-6">
            <button
              className="text-2xl mb-6"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <div className="flex flex-col gap-4 text-lg text-gray-700 dark:text-gray-300">
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
              <a href="#projects-impact" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
