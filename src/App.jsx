import { useEffect } from "react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Booking from "./sections/BookNowModal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in ms)
      once: true, // Whether animation should happen only once
      easing: "ease-in-sine", // Easing function
    });
  }, []);
  return (
    <>
      <div className="bg-slate-900 text-slate-400 overflow-x-hidden scroll-smooth leading-relaxed">
        <Navbar />

        <Hero />
        <About />
        <Pricing />
        <Contact />
        <Booking />
        <Footer />
      </div>
    </>
  );
};

export default App;
