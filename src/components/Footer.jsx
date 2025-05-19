import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo / About */}
        <div>
          <img
            src="/tbspot_navlogo.png"
            alt="The Beauty Spot Logo"
            className="h-10 w-auto block"
          />

          <p className="text-sm">
            Your beauty escape — from a quick cut to a full glam makeover.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-teal-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#contact" className="hover:text-teal-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-teal-400">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-teal-300">
            Get in Touch
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              11th B Banal St. Pag Ibig Sa Nayon Q.C (6th ave) 1403 Quezon City,
              Philippines
            </li>
            <li>0963 789 1454</li>
            <li>thespotbeauty888@gmail.com</li>
            <div className="flex justify-start">
              <SocialIcons />
            </div>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-slate-400 mt-10">
        © {new Date().getFullYear()} The Beauty Spot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
