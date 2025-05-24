import Marquee from "../components/Marquee"; // assuming correct path

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 px-4 sm:px-6 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center space-y-3" data-aos="fade-up">
          <h2 className="text-xl sm:text-3xl font-bold text-amber-600 uppercase tracking-wider">
            About Us
          </h2>
          <p className="text-sm sm:text-lg italic text-slate-400">
            Where Confidence Gets a Makeover
          </p>
        </div>

        {/* Intro */}
        <div
          className="space-y-4 text-slate-400 text-justify leading-loose"
          data-aos="fade-up"
        >
          <p className="text-sm md:text-base">
            Welcome to{" "}
            <strong className="text-slate-300">The Beauty Spot</strong> — not
            just a salon, but your destination for glowing makeovers, renewed
            confidence, and real transformations.
          </p>
          <p className="text-sm md:text-base">
            Here, every snip, style, and shade is tailored not just to your look
            but to your lifestyle. We believe beauty isn’t just about what you
            see — it’s about how you feel when you walk out the door.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="space-y-4" data-aos="fade-up">
          <h3 className="text-lg sm:text-xl font-semibold text-amber-600">
            What Makes Us Different?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-slate-400 leading-relaxed">
            <li>
              <strong className="text-slate-300">Personalized styling –</strong>{" "}
              No cookie-cutter cuts. Every look is made to fit you perfectly.
            </li>
            <li>
              <strong className="text-slate-300">
                Professional & passionate team –
              </strong>{" "}
              Skilled hands, kind hearts, and always ready to listen.
            </li>
            <li>
              <strong className="text-slate-300">Trend meets timeless –</strong>{" "}
              Whether you're into sleek classics or bold new looks, we’ve got
              you.
            </li>
            <li>
              <strong className="text-slate-300">Relaxing experience –</strong>{" "}
              From the wash to the final wave, it’s more than a service — it’s
              self-care.
            </li>
          </ul>
        </div>

        {/* Outro */}
        <div
          className="space-y-4 text-sm md:text-base text-slate-400 text-justify leading-loose"
          data-aos="fade-up"
        >
          <p>
            At <strong className="text-slate-300">The Beauty Spot</strong>, we
            don’t just create hairstyles — we create confidence. Because when
            you love your look, everything else falls into place.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-amber-600 mt-6">
            Let's Glow Together
          </h3>
          <p>
            Whether you're in for a quick touch-up or a full transformation,
            we’re here to bring out the best version of you. Come in with a
            vision — or let us help you find it.
          </p>
        </div>

        {/* Marquee */}
        <Marquee />
      </div>
    </section>
  );
};

export default About;
