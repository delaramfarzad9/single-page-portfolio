import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;