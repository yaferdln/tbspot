import Typewriter from "../components/Typewriter";
import tbspotLogo from "/tbspot_logo.webp";
import heroImage from "/images/pexels-enginakyurt-3065209.webp";

const Hero = () => {
  const words = [
    "Nail Art",
    "Gel Polish",
    "Rebonding",
    "Balayage",
    "Treated Hair",
    "Mani / Pedi",
    "FootSpa",
    "Eyelash Ext.",
    "Nail Ext.",
    "Facial",
    "Eyebag Minimizer",
    "RF Face",
    "Warts Removal",
    "BBGlow / BB Blush",
  ];

  return (
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

        {/* Right: Typewriter + Button */}
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-6">
          <p className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-wide text-amber-600 text-center">
            <Typewriter words={words} />
          </p>

          <button
            onClick={() => (window.location.href = "#contact")}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md transition text-sm sm:text-base"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
