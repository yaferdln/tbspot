const Pricing = () => {
  return (
    <section id="pricing" className="min-h-screen pt-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto mb-12 text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-400 uppercase tracking-wider mb-3">
          Our Pricing
        </h2>
        <p className="text-base sm:text-lg leading-relaxed tracking-normal text-slate-400 max-w-2xl mx-auto italic">
          From quick touch-ups to full glam makeovers — we’ve got a beauty
          package for every vibe.
        </p>
      </div>

      <div
        className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        data-aos="fade-up"
      >
        {/* Basic */}
        <div className="bg-slate-800/40 rounded-xl shadow-md p-8 text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-300">
            Glow Basic
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-slate-300">₱499</p>
          <ul className="text-slate-400 space-y-2 text-sm sm:text-base leading-relaxed tracking-normal">
            <li>Haircut & Style</li>
            <li>Wash & Blow-dry</li>
            <li>Basic Manicure</li>
          </ul>
        </div>

        {/* Premium */}
        <div className="bg-slate-800/40 rounded-xl shadow-lg p-8 text-center space-y-4 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-300">
            Glow Premium
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-slate-300">₱999</p>
          <ul className="text-slate-400 space-y-2 text-sm sm:text-base leading-relaxed tracking-normal">
            <li>Haircut + Treatment</li>
            <li>Full Body Massage</li>
            <li>Gel Mani + Pedi</li>
            <li>Face Glow Mask</li>
          </ul>
        </div>

        {/* Luxe */}
        <div className="bg-slate-800/40 rounded-xl shadow-md p-8 text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-300">
            Glow Luxe
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-slate-300">
            ₱1,499
          </p>
          <ul className="text-slate-400 space-y-2 text-sm sm:text-base leading-relaxed tracking-normal">
            <li>All-In Hair Makeover</li>
            <li>Spa Facial & Massage</li>
            <li>Nail Art + Foot Spa</li>
            <li>🕯 Aromatherapy Included</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
