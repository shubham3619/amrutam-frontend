import bannerImg from "../../assets/images/banner.png";

const HarmonyBanner = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gray-900"
      >
        <img 
          src={bannerImg}
          alt="Ayurvedic medicine bottles"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Text Content */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white max-w-2xl mb-8 leading-relaxed">
          Ready to restore harmony in
          <br />
          your mind, body and spirit?
        </h1>

        {/* CTA Button */}
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition-colors duration-300">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

export default HarmonyBanner;