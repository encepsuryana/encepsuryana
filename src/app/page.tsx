import About from "@@/components/About";
import Hero from "@@/components/Hero";
import Navigation from "@@/components/Navigation";

export default function Home() {
  return (
    <div id="home">
      <Navigation />

      <div className="">
        <main className="row-start-2">
          <Hero />
          <About />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
