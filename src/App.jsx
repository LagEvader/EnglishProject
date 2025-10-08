import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-200">
      <Navbar />
      <Hero />
      <About />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
