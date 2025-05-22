import Marquee from "react-fast-marquee";
import { FaPalette, FaHandSparkles, FaCut } from "react-icons/fa";
import {
  GiFootprint,
  GiEyelashes,
  GiBarefoot,
  GiFingernail,
} from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
// Define the services with their icons and labels
import { PiHairDryerFill } from "react-icons/pi";
const services = [
  { icon: FaCut, label: "Haircut" },
  { icon: PiHairDryerFill, label: "Hair Rebond" },
  { icon: FaPalette, label: "Hair Color" }, // Using FaPaintBrush for Hair Color
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
      className="mt-4 bg-slate-800/20 py-6 px-6 overflow-hidden"
      data-aos="zoom-in"
    >
      <Marquee gradient={false} speed={50} autoFill pauseOnHover>
        {services.map((service, index) => (
          <div
            key={index}
            className="mx-6 flex flex-col items-center justify-center min-w-[100px] text-center"
          >
            <service.icon size={60} className="text-sky-300 mb-2" />
            <p className="text-slate-200 text-sm font-medium whitespace-nowrap">
              {service.label}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SalonMarqueeIcons;
