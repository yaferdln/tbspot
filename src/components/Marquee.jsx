const SalonMarqueeIcons = () => {
  return (
    <div
      className="mt-4 bg-slate-900/40 py-6 px-4 md:px-6 overflow-hidden"
      data-aos="zoom-in"
    >
      <Marquee gradient={false} speed={50} autoFill pauseOnHover>
        {services.map((service, index) => (
          <div
            key={index}
            className="mx-3 flex-shrink-0 flex flex-col items-center justify-center min-w-[70px] sm:min-w-[80px] text-center"
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
