import Navbar from "./(site)/components/Navbar";
import Hero from "./(site)/sections/Hero";
import About from "./(site)/sections/About";
import Blog from "./(site)/sections/Blog";
import Experience from "./(site)/sections/Experience";
import ProjectsImpact from "./(site)/sections/ProjectsImpact";
import Contact from "./(site)/sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Blog />
        <Experience />
        <ProjectsImpact />
        <Contact />
      </div>
    </main>
  );
}
