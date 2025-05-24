import { Typewriter } from "react-simple-typewriter";
import tbspotLogo from "/tbspot_logo.webp";
import heroImage from "/images/pexels-enginakyurt-3065209.webp";

const Hero = () => (
  <section className="relative w-full h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Background image */}
    <img
      src={heroImage}
      alt="Spa background"
      className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
    />

    {/* Content Wrapper */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-6xl bg-white/5 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm">
      {/* Left: Logo with background */}
      <div className="bg-slate-900 flex items-center justify-center p-6">
        <img
          src={tbspotLogo}
          alt="The Beauty Spot Logo"
          className="w-4/5 max-w-sm"
        />
      </div>

      {/* Right: Typewriter */}
      <div className="flex items-center justify-center p-6">
        <p className="text-xl md:text-2xl font-semibold text-amber-500 text-center">
          <Typewriter
            words={[
              "Haircut",
              "Hair Color",
              "Hair Rebond",
              "Hair Treatment",
              "Blow Dry",
              "Highlights",
              "Gel Polish",
              "Manicure",
              "Pedicure",
              "Foot Spa",
              "Facial",
              "Massage",
              "Eyebrow Threading",
              "Lash Lift",
              "Lash Extensions",
              "Makeup Services",
              "Underarm Wax",
              "Leg Wax",
              "Diamond Peel",
              "Book Your Appointment Today",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
