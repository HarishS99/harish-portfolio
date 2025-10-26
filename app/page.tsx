import Navbar from "./(site)/components/Navbar";
import Hero from "./(site)/sections/Hero";
import About from "./(site)/sections/About";
import Blog from "./(site)/sections/Blog";
import Experience from "./(site)/sections/Experience";
import ProjectsImpact from "./(site)/sections/ProjectsImpact";
import Contact from "./(site)/sections/Contact";
import Education from "./(site)/sections/Education";
import Certifications from "./(site)/sections/Certifications";
import Publications from "./(site)/sections/Publications";


export default function Page() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <ProjectsImpact />
        <Publications />    
        <Education />
        <Contact />
        <footer className="text-center mt-16 mb-6 opacity-80 text-sm transition hover:opacity-100">
        <div className="flex justify-center gap-5 mb-3">
          <a href="https://www.linkedin.com/in/harish-subramanian-a246a016b/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            🔗
          </a>
          <a href="https://github.com/HarishS99" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            💻
          </a>
          <a href="https://www.instagram.com/mr_culista10?igsh=MTAwczZ3c2dnbmh3ZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            📸
          </a>
        </div>
        © {new Date().getFullYear()} Harish Subramanian — All Rights Reserved
        </footer>


      </div>
    </main>
  );
}
