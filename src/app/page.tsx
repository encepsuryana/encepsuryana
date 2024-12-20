import About from "@@/components/About";
import Blog from "@@/components/Blogs";
import Contact from "@@/components/Contact/Contact";
import Footer from "@@/components/Footer";
import Hero from "@@/components/Hero";
import Navigation from "@@/components/Navigation";
import Services from "@@/components/Services";
import Works from "@@/components/Works";

export default function Home() {
  return (
    <div id="home">
      <Navigation />

      <div className="">
        <main className="row-start-2">
          <Hero />
          <About />
          <Services />
          <Works />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
