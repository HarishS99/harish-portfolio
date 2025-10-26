import Navbar from "./(site)/components/Navbar";
import Hero from "./(site)/sections/Hero";
import About from "./(site)/sections/About";
import Blog from "./(site)/sections/Blog";
import Experience from "./(site)/sections/Experience";
import ProjectsImpact from "./(site)/sections/ProjectsImpact";
import Contact from "./(site)/sections/Contact";
import Education from "./(site)/sections/Education";
import Certifications from "./(site)/sections/Certifications";

export default function Page() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Certifications />
        <ProjectsImpact />
        <Blog />
        <Contact />
        <footer className="text-center text-sm opacity-60 mt-12 mb-4">
        © {new Date().getFullYear()} Harish Subramanian — All Rights Reserved
        </footer>

      </div>
    </main>
  );
}
