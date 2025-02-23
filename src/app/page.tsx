import Educations from "@@/components/About/components/Educations";
import Experiences from "@@/components/About/components/Experiences";
import General from "@@/components/About/components/General";
import Skills from "@@/components/About/components/Skills";
import Contact from "@@/components/Contact";
import Footer from "@@/components/Footer";
import Hero from "@@/components/Hero";
import Navigation from "@@/components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="row-start-2" id="content-resume">
        <Hero />
        <div className="py-16 md:py-32">
          <General />
          <Experiences />
          <Skills />
          <Educations />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
