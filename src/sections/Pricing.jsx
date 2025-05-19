const Pricing = () => {
  return (
    <section id="pricing" className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto mb-12 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-teal-500 mb-2">Our Pricing</h2>
        <p className="text-slate-400 text-md md:text-lg">
          From quick touch-ups to full glam makeovers — we’ve got a beauty
          package for every vibe.
        </p>
      </div>

      <div
        className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3"
        data-aos="fade-up"
      >
        {/* Basic */}
        <div className="bg-slate-800/40 rounded-xl shadow-md p-8 text-center">
          <h3 className="text-xl font-bold text-slate-300 mb-2">Glow Basic</h3>
          <p className="text-3xl font-bold text-slate-300 mb-4">₱499</p>
          <ul className="text-slate-300 space-y-2 text-sm mb-6">
            <li>Haircut & Style</li>
            <li>Wash & Blow-dry</li>
            <li>Basic Manicure</li>
          </ul>
        </div>

        {/* Premium */}
        <div className="bg-slate-800/40 rounded-xl shadow-lg p-8 text-center transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110">
          <h3 className="text-xl font-bold text-slate-300 mb-2">
            Glow Premium
          </h3>
          <p className="text-3xl font-bold text-slate-300 mb-4">₱999</p>
          <ul className="space-y-2 text-sm text-slate-300 mb-6">
            <li> Haircut + Treatment</li>
            <li> Full Body Massage</li>
            <li> Gel Mani + Pedi</li>
            <li> Face Glow Mask</li>
          </ul>
        </div>

        {/* Luxe */}
        <div className="bg-slate-800/40 rounded-xl shadow-md p-8 text-center">
          <h3 className="text-xl font-bold text-slate-300 mb-2">Glow Luxe</h3>
          <p className="text-3xl font-bold text-slate-300 mb-4">₱1,499</p>
          <ul className="text-slate-300 space-y-2 text-sm mb-6">
            <li> All-In Hair Makeover</li>
            <li> Spa Facial & Massage</li>
            <li> Nail Art + Foot Spa</li>
            <li>🕯 Aromatherapy Included</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
