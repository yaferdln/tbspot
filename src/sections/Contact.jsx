import { useState } from "react";
import SocialIcons from "../components/SocialIcons";
import BookNowModal from "./BookNowModal";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="contact" className="min-h-screen pt-20 px-4 sm:px-6">
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        data-aos="fade-up"
      >
        {/* LEFT - Info */}
        <div className="space-y-6 text-slate-400 text-base sm:text-lg leading-relaxed tracking-normal">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-3xl font-bold text-amber-600 uppercase tracking-wider mb-4">
              Contact Us
            </h2>
            <p className="text-sm sm:text-lg italic">
              Walk-ins are always welcome — but we’d love to hear from you ahead
              of time!
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-slate-300">Address</h4>
            <a
              href="https://www.google.com/maps/place/20b+6th+Ave,+Grace+Park+East,+Manila,+Metro+Manila"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 hover:underline"
            >
              11th B Banal St. Pag Ibig Sa Nayon Q.C (6th Ave), Quezon City
            </a>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-slate-300">Phone</h4>
            <a
              href="tel:09637891454"
              className="hover:text-amber-600 hover:underline"
            >
              0963 789 1454
            </a>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-slate-300">Email</h4>
            <a
              href="mailto:thespotbeauty888@gmail.com"
              className="hover:text-amber-600 hover:underline"
            >
              thespotbeauty888@gmail.com
            </a>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-slate-300">Follow us</h4>
            <SocialIcons />
          </div>
        </div>

        {/* RIGHT - Image + Button */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg p-4 flex flex-col items-center justify-between gap-4">
          <div className="relative w-full">
            <img
              src="/images/pexels-rdne-7755558.webp"
              alt="Salon"
              className="w-full h-72 object-cover rounded-lg opacity-60"
            />
            <button
              onClick={() => setShowModal(true)}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-full transition duration-300 z-10"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookNowModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Contact;
