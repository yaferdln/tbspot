import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="text-slate-400 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 text-center md:text-center">
          {/* Logo / About */}
          <div className="md:flex-1">
            <img
              src="/tbspot_navlogo.webp"
              alt="The Beauty Spot Logo"
              className="h-10 w-auto mx-auto md:mx-auto"
            />
            <p className="mt-3 text-sm sm:text-base leading-relaxed tracking-normal max-w-xs mx-auto md:mx-auto">
              Your beauty escape — from a quick cut to a full glam makeover.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:flex-1">
            <h3 className="text-sm md:text-lg font-semibold mb-3 text-amber-600 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm sm:text-base leading-relaxed tracking-normal">
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-600 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-amber-600 transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:flex-1">
            <h3 className="text-sm md:text-lg font-semibold mb-3 text-amber-600 uppercase tracking-wide">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm sm:text-base leading-relaxed tracking-normal">
              <li>
                <a
                  href="https://www.google.com/maps/place/20b+6th+Ave,+Grace+Park+East,+Manila,+Metro+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 text-sm md:-text-base hover:underline hover:underline-offset-4 transition-colors duration-200"
                >
                  11th B Banal St. Pag Ibig Sa Nayon Q.C (6th Ave) 1403 Quezon
                  City, Philippines
                </a>
              </li>
              <li>
                <a
                  href="tel:09637891454"
                  className="hover:text-amber-600 hover:underline hover:underline-offset-4 transition-colors duration-200"
                >
                  0963 789 1454
                </a>
              </li>
              <li>
                <a
                  href="mailto:thespotbeauty888@gmail.com"
                  className="hover:text-amber-600 hover:underline hover:underline-offset-4 transition-colors duration-200"
                >
                  thespotbeauty888@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex justify-center md:justify-center pt-4">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center text-xs text-slate-400 mt-10 leading-relaxed tracking-normal">
          © {new Date().getFullYear()} The Beauty Spot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
