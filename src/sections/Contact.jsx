import { MapPinned, Phone, Mail, Globe, Instagram } from "lucide-react";
import SocialIcons from "../components/SocialIcons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen pt-20 px-4 sm:px-6 bg-slate-900"
    >
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        data-aos="fade-up"
      >
        {/* LEFT COLUMN - Text Info */}
        <div className="space-y-6 text-slate-400 text-base sm:text-lg leading-relaxed tracking-normal">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-400 uppercase tracking-wider mb-4">
              Contact Us
            </h2>
            <p className="italic text-slate-400 mb-6">
              Walk-ins are welcome, but we’d love to hear from you first!
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            {/* Added flex-shrink-0 for consistent icon sizing */}
            <div className="text-sky-400 w-6 h-6 flex-shrink-0">
              <MapPinned className="w-full h-full" />{" "}
              {/* Icon fills its container */}
            </div>
            <div>
              <h4 className="font-semibold text-slate-300">Address</h4>
              <a
                href="https://www.google.com/maps/place/20b+6th+Ave,+Grace+Park+East,+Manila,+Metro+Manila"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 underline underline-offset-4 transition-colors duration-200"
              >
                11th B Banal St. Pag Ibig Sa Nayon Q.C (6th Ave), 1403 Quezon
                City, Philippines
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="text-sky-400 w-6 h-6 flex-shrink-0">
              <Phone className="w-full h-full" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-300">Phone</h4>
              <a
                href="tel:09637891454"
                className="hover:text-sky-400 underline underline-offset-4 transition-colors duration-200"
              >
                0963 789 1454
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="text-sky-400 w-6 h-6 flex-shrink-0">
              <Mail className="w-full h-full" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-300">Email</h4>
              <a
                href="mailto:thespotbeauty888@gmail.com"
                className="hover:text-sky-400 underline underline-offset-4 transition-colors duration-200"
              >
                thespotbeauty888@gmail.com
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-start gap-4">
            <div className="text-sky-400 w-6 h-6 flex-shrink-0">
              <Globe className="w-full h-full" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-300">Follow us</h4>
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Image + Book Now Button */}
        <div className="w-full h-auto rounded-xl overflow-hidden shadow-lg bg-slate-800 p-4 flex flex-col items-center justify-between gap-4">
          <div className="relative w-full">
            <img
              src="/images/pexels-rdne-7755558.webp"
              alt="Salon"
              className="w-full h-72 object-cover rounded-lg opacity-60"
            />
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 z-10"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
