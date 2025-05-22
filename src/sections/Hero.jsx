import tbspotLogo from "/tbspot_logo.webp"; // Adjust path as needed
import heroImage from "/images/pexels-enginakyurt-3065209.webp"; // Adjust path as needed

const Hero = () => {
  return (
    <section style={heroSectionStyle}>
      {/* Background image with reduced opacity */}
      <img src={heroImage} alt="Spa background" style={heroImageStyle} />

      {/* Overlayed Logo (transparent background makes this work well) */}
      <img
        src={tbspotLogo}
        alt="The Beauty Spot Logo"
        style={overlayLogoStyle}
      />
    </section>
  );
};

// Inline Styles
const heroSectionStyle = {
  position: "relative",
  width: "100%",
  height: "100vh", // Full viewport height
  paddingTop: "80px", // Original pt-20, if still desired for overall layout offset
  display: "flex", // Use flexbox for centering
  alignItems: "center", // Center vertically
  justifyContent: "center", // Center horizontally
  overflow: "hidden", // Hide overflow if image is larger
};

const heroImageStyle = {
  position: "absolute", // Position absolutely to cover the section
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover", // Cover the entire area
  opacity: 0.3, // Reduced opacity (e.g., 30%). Adjust this value!
  zIndex: 0, // Ensure it's behind the logo
};

const overlayLogoStyle = {
  position: "relative", // Position relative to be on top of the absolute background
  zIndex: 1, // Ensure it's on top
  width: "80%", // Make the logo large, 80% of its parent's width
  maxWidth: "600px", // Optional: Set a max-width so it doesn't get too huge on very wide screens
  height: "auto", // Maintain aspect ratio
  display: "block", // Ensures proper sizing and centering
  // The flexbox on the parent `heroSectionStyle` will handle the centering
};

export default Hero;
