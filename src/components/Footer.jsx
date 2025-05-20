import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo / About */}
        <div className="hidden md:block space-y-3">
          <img
            src="/tbspot_navlogo.png"
            alt="The Beauty Spot Logo"
            className="h-10 w-auto mx-auto md:mx-0"
          />
          <p className="text-sm sm:text-base leading-relaxed tracking-normal">
            Your beauty escape — from a quick cut to a full glam makeover.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-sky-400 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-base leading-relaxed tracking-normal">
            <li>
              <a
                href="#contact"
                className="hover:text-sky-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-sky-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-sky-400 transition-colors duration-200"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-sky-400 uppercase tracking-wide">
            Get in Touch
          </h3>
          <ul className="text-sm sm:text-base space-y-2 leading-relaxed tracking-normal">
            <li>
              <a
                href="https://www.google.com/maps/place/20b+6th+Ave,+Grace+Park+East,+Manila,+Metro+Manila"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 underline underline-offset-4 transition-colors duration-200"
              >
                11th B Banal St. Pag Ibig Sa Nayon Q.C (6th ave) 1403 Quezon
                City, Philippines
              </a>
            </li>
            <li>
              <a
                href="tel:09637891454"
                className="hover:text-sky-400 underline underline-offset-4 transition-colors duration-200"
              >
                0963 789 1454
              </a>
            </li>
            <li>
              <a
                href="mailto:thespotbeauty888@gmail.com"
                className="hover:text-sky-400 underline underline-offset-4 transition-colors duration-200"
              >
                thespotbeauty888@gmail.com
              </a>
            </li>
            <div className="flex justify-center md:justify-start pt-2">
              <SocialIcons />
            </div>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-slate-400 mt-10 leading-relaxed tracking-normal">
        © {new Date().getFullYear()} The Beauty Spot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
