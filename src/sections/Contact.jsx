import SocialIcons from "../components/SocialIcons";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pt-20 px-4 sm:px-6">
      <div
        className="max-w-6xl mx-auto text-center sm:text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-400 uppercase tracking-wider mb-4">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg italic text-slate-400 leading-relaxed tracking-normal mb-10 max-w-2xl mx-auto">
          Walk-ins are welcome, but we’d love to hear from you first!
        </p>

        <div
          className="space-y-6 text-slate-400 text-base sm:text-lg leading-relaxed tracking-normal"
          data-aos="fade-up"
        >
          {/* Address */}
          <div>
            <span className="font-semibold text-slate-300">Address:</span>
            <br />
            <a
              href="https://www.google.com/maps/place/20b+6th+Ave,+Grace+Park+East,+Manila,+Metro+Manila"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 underline underline-offset-4 transition-colors duration-200"
            >
              11th B Banal St. Pag Ibig Sa Nayon Q.C (6th Ave) 1403 Quezon City,
              Philippines
            </a>
          </div>

          {/* Phone */}
          <div>
            <span className="font-semibold text-slate-300">Phone:</span>
            <br />
            <a
              href="tel:09637891454"
              className="hover:text-sky-400 underline underline-offset-4 transition-colors duration-200"
            >
              0963 789 1454
            </a>
          </div>

          {/* Email */}
          <div>
            <span className="font-semibold text-slate-300">Email:</span>
            <br />
            <a
              href="mailto:thespotbeauty888@gmail.com"
              className="hover:text-sky-400 underline underline-offset-4 transition-colors duration-200"
            >
              thespotbeauty888@gmail.com
            </a>
          </div>

          {/* Social Media */}
          <div>
            <span className="font-semibold text-slate-300">Follow us:</span>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
