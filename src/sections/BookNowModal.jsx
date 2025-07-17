import React, { useState } from "react";

const BookNowModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      services: Array.from(e.target.elements["services[]"])
        .filter((el) => el.checked)
        .map((el) => el.value)
        .join(", "),
      preferred_date: e.target.preferred_date.value,
      preferred_time: e.target.preferred_time.value,
      notes: e.target.notes.value,
    };

    try {
      const res = await fetch("https://submit-form.com/VSa80nt9H", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("🎉 Booking submitted successfully!");
        onClose();
      } else {
        alert("❌ Something went wrong. Please try again.");
        console.error(await res.json());
      }
    } catch (err) {
      alert("⚠️ Network error. Please check your connection.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-6">
      <div className="bg-slate-800 text-white w-full max-w-lg sm:max-w-2xl max-h-screen overflow-y-auto p-6 sm:p-8 rounded-lg shadow-xl relative pt-12">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-amber-500 focus:outline-none"
          aria-label="Close booking form"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-500 text-center mb-6">
          Book an Appointment
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded bg-white/10 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Contact Number"
            className="w-full px-4 py-3 rounded bg-white/10 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            className="w-full px-4 py-3 rounded bg-white/10 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          {/* Services */}
          <fieldset className="space-y-3">
            <legend className="font-semibold mb-1 text-white">
              Select Services
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {[
                "Nail Art",
                "Gel Polish",
                "Rebonding",
                "Balayage",
                "Mani / Pedi",
                "FootSpa",
                "Eyelash Ext.",
                "Facial",
                "RF Face",
                "Warts Removal",
                "BBGlow / BB Blush",
              ].map((service) => (
                <label key={service} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services[]"
                    value={service}
                    className="accent-amber-500"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Date & Time */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="preferred_date"
                className="block mb-1 text-sm text-white"
              >
                Preferred Date
              </label>
              <input
                type="date"
                name="preferred_date"
                id="preferred_date"
                required
                className="w-full px-4 py-3 rounded bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="preferred_time"
                className="block mb-1 text-sm text-white"
              >
                Preferred Time
              </label>
              <input
                type="time"
                name="preferred_time"
                id="preferred_time"
                required
                className="w-full px-4 py-3 rounded bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Notes */}
          <textarea
            name="notes"
            placeholder="Special requests or concerns..."
            rows="3"
            className="w-full px-4 py-3 rounded bg-white/10 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 font-semibold rounded transition ${
              isSubmitting
                ? "bg-amber-400 cursor-not-allowed"
                : "bg-amber-600 hover:bg-amber-500"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowModal;
