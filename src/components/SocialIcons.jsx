import { FaGlobe, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialIcons = () => {
  const socials = [
    {
      href: "https://thebeautyspot.netlify.app",
      label: "Website",
      icon: <FaGlobe size={24} />,
    },
    {
      href: "https://www.facebook.com/profile.php?id=61569891810170",
      label: "Facebook",
      icon: <FaFacebookF size={24} />,
    },
    {
      href: "https://www.instagram.com/thebeautyspot2024/",
      label: "Instagram",
      icon: <FaInstagram size={24} />,
    },
    {
      href: "https://tiktok.com/@yafercrypto",
      label: "TikTok",
      icon: <FaTiktok size={24} />,
    },
  ];

  return (
    <div className="flex justify-start gap-6 pt-4 text-slate-300 text-2xl">
      {socials.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="transition-colors duration-300 hover:text-amber-600 hover:scale-110"
          style={{ display: "inline-flex" }} // ensure icon scales nicely
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
