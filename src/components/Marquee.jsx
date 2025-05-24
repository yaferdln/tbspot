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
    <div className="w-full overflow-hidden mt-8">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover
        autoFill
        className="!overflow-visible"
      >
        {services.map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center min-w-[80px] mx-3"
          >
            <Icon size={36} className="text-slate-400 mb-1" />
            <p className="text-xs md:text-sm text-slate-200 whitespace-nowrap">
              {label}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SalonMarqueeIcons;
