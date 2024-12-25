import React from "react";
import meditationWoman from "../../assets/images/image 57.png";
import WomanBcakground from "../../assets/images/image 54.png";
import heartbeat from "../../assets/images/heartbeat.png";
import lotusPosition from "../../assets/images/lotus-position.png";
import strong from "../../assets/images/strong.png";
import ayurveda from "../../assets/images/ayurveda.png";
import ribbon from "../../assets/images/ribbon.png";
import protection from "../../assets/images/protection.png";

const AyurvedaMagic = () => {
  const features = [
    {
      title: "Personalized Wellness",
      description: "Get treatments made just for you based on your individual needs. Every step!",
      icon: heartbeat,
    },
    {
      title: "Focus on prevention",
      description: "Stop problems even before they start.",
      icon: ribbon,
    },
    {
      title: "Mind-Body Connection",
      description: "Keep your mind and body in sync for a happy life.",
      icon: lotusPosition,
    },
    {
      title: "Holistic Healing",
      description: "Fix the root problem for long-lasting health.",
      icon: protection,
    },
    {
      title: "Natural Remedies",
      description: "Using herbs and natural therapies for healing.",
      icon: ayurveda,
    },
    {
      title: "Boosting Immunity",
      description: "Stay strong and healthy for life, not just for today.",
      icon: strong,
    },
  ];

  return (
    <div className="pt-[40vh] md:pt-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#3A643B] mb-4 relative inline-block">
            Discover Ayurveda's Magic With Us
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-green-800/20"></div>
          </h1>
          <p className="text-[#666666] text-sm md:text-base max-w-2xl mx-auto">
            Ayurvedic treatment aims to balance your body and mind, bringing
            harmony and vitality. It's like a journey to better health using
            ancient wisdom, a totally effective approach for a better life.
          </p>
        </div>

        <div className="relative">
          <div className="relative w-64 md:max-w-md mx-auto mb-8 md:mb-12">
            <div className="absolute inset-0">
              <img
                src={WomanBcakground}
                alt="Background"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <img
              src={meditationWoman}
              alt="Meditation"
              className="relative z-10 w-full pt-8"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-3 md:p-4">
                <div className="w-12 h-12 md:w-16 md:h-16 p-2 md:p-3 bg-[#E8F3E9] rounded-full flex items-center justify-center shrink-0">
                  <img src={feature.icon} className="w-6 h-6 md:w-8 md:h-8" alt={feature.title} />
                </div>
                <div>
                  <h2 className="font-bold text-base md:text-lg mb-1">{feature.title}</h2>
                  <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedaMagic;

