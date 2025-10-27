
import Hero from "./(site)/sections/Hero";
import About from "./(site)/sections/About";
import Blog from "./(site)/sections/Blog";
import Experience from "./(site)/sections/Experience";
import ProjectsImpact from "./(site)/sections/ProjectsImpact";
import Contact from "./(site)/sections/Contact";
import Education from "./(site)/sections/Education";
import Certifications from "./(site)/sections/Certifications";
import Publications from "./(site)/sections/Publications";
import Footer from "./(site)/components/Footer";
import Navbar from "./(site)/components/Navbar";

export default function Page() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <ProjectsImpact />
        <Publications />    
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
