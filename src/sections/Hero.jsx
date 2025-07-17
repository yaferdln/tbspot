import Typewriter from "../components/Typewriter";
import heroImage from "/images/pexels-enginakyurt-3065209.webp";

const Hero = () => {
  const words = [
    "Nail Art",
    "Gel Polish",
    "Rebonding",
    "Balayage",
    "Treated Hair",
    "Manicure",
    "Pedicure",
    "FootSpa",
    "Eyelash Extension",
    "Nail Extension",
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

      {/* Content Wrapper (centered, glassy card) */}
      <div className="relative z-10 w-11/12 max-w-3xl p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl flex flex-col items-center space-y-6">
        <p className="text-3xl sm:text-5xl font-extrabold tracking-wide text-amber-600 text-center drop-shadow">
          <Typewriter words={words} />
        </p>
      </div>
    </section>
  );
};

export default Hero;
