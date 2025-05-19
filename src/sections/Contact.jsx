import SocialIcons from "../components/SocialIcons";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-teal-500 mb-2">Contact Us</h2>
        <p className="text-slate-400 mb-10">
          Walk-ins are welcome, but we’d love to hear from you first! 💇‍♀️💬
        </p>

        <div className="space-y-6 text-slate-400 text-lg" data-aos="fade-up">
          <div>
            <span className="font-semibold text-teal-400">Address:</span>
            <br />
            11th B Banal St. Pag Ibig Sa Nayon Q.C (6th ave) 1403 Quezon City,
            Philippines
          </div>
          <div>
            <span className="font-semibold text-teal-400">Phone:</span>
            <br />
            0963 789 1454
          </div>
          <div>
            <span className="font-semibold text-teal-400">Email:</span>
            <br />
            thespotbeauty888@gmail.com
          </div>

          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default Contact;
