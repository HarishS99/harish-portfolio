"use client";

export default function Footer() {
  return (
    <footer className="text-center mt-16 mb-6 opacity-80 text-sm transition hover:opacity-100 px-4">
      <div className="flex justify-center gap-5 mb-3 flex-wrap">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/harish-subramanian-a246a016b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7 opacity-80 hover:opacity-100"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.98 3.5C4.98 4.88..." />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/HarishS99"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7 opacity-80 hover:opacity-100"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.65.5..." />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/mr_culista10"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7 opacity-80 hover:opacity-100"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 2C4.24 2..." />
          </svg>
        </a>
      </div>

      <p className="text-xs sm:text-sm leading-relaxed">
        © {new Date().getFullYear()} Harish Subramanian — All Rights Reserved · Made with ❤️
      </p>
    </footer>
  );
}
