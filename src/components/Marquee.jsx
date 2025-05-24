import Marquee from "react-fast-marquee";
import { FaPalette, FaHandSparkles, FaCut } from "react-icons/fa";
import {
  GiFootprint,
  GiEyelashes,
  GiBarefoot,
  GiFingernail,
} from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { PiHairDryerFill } from "react-icons/pi";

// Define the services with their icons and labels
const services = [
  { icon: FaCut, label: "Haircut" },
  { icon: PiHairDryerFill, label: "Hair Rebond" },
  { icon: FaPalette, label: "Hair Color" },
  { icon: FaHandSparkles, label: "Manicure" },
  { icon: GiFootprint, label: "Pedicure" },
  { icon: GiBarefoot, label: "Foot Spa" },
  { icon: GiEyelashes, label: "Eyelash" },
  { icon: MdFaceRetouchingNatural, label: "Facial" },
  { icon: GiFingernail, label: "Gel Polish" },
];

const SalonMarqueeIcons = () => {
  return (
    <div
      className="mt-4 bg-slate-900/40 py-6 px-4 md:px-6 overflow-hidden w-full"
      data-aos="zoom-in"
    >
      <Marquee
        gradient={false}
        speed={50}
        autoFill
        pauseOnHover
        className="w-full"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="mx-3 flex-shrink-0 flex flex-col items-center justify-center min-w-[72px] sm:min-w-[80px] text-center"
          >
            <service.icon size={36} className="text-slate-400 mb-2" />
            <p className="text-xs md:text-sm text-slate-200 whitespace-nowrap">
              {service.label}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SalonMarqueeIcons;
