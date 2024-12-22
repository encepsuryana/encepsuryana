import About from "@@/components/About";
import Contact from "@@/components/Contact";
import Footer from "@@/components/Footer";
import Hero from "@@/components/Hero";
import Navigation from "@@/components/Navigation";
import Services from "@@/components/Services";

export default function Home() {
  return (
    <div id="home">
      <Navigation />

      <div className="">
        <main className="row-start-2">
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
