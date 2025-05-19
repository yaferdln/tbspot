import Marquee from "react-fast-marquee";
import {
  FaSpa,
  FaSprayCan,
  FaHandSparkles,
  FaCrown,
  FaCut,
} from "react-icons/fa";
import {
  GiHairStrands,
  GiComb,
  GiPerfumeBottle,
  GiMirrorMirror,
} from "react-icons/gi";

const icons = [
  GiComb,
  FaSprayCan,
  GiHairStrands,
  FaHandSparkles,
  GiPerfumeBottle,
  FaSpa,
  GiMirrorMirror,
  FaCrown,
  FaCut,
];

const SalonMarqueeIcons = () => {
  return (
    <div className="mt-4 bg-slate-800/20 py-6" data-aos="fade-up">
      <Marquee gradient={false} speed={50} autoFill pauseOnHover>
        {icons.map((IconComponent, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center min-w-[100px]"
          >
            <IconComponent size={80} className="text-slate-300" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SalonMarqueeIcons;
