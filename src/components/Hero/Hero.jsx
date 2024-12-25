import backgroundImg from "../../assets/images/background1.png";
import speechBubble from "../../assets/images/speech-bubble.png";
import shield from "../../assets/images/shield.png";
import doctor from "../../assets/images/doctor.png";
import prescreption from "../../assets/images/prescrIption.png";
import Navbar from "../Navbar/Navbar";
import backgroundMobileImg from "../../assets/images/backgroundMobileImg.png";


const Hero = () => {
  const features = [
    {
      icon: speechBubble,
      text: "convenient online & In-clinic consultations"
    },
    {
      icon: shield,
      text: "Safe and effective treatment"
    },
    {
      icon: doctor,
      text: "Experienced Ayurvedic Practitioners"
    },
    {
      icon: prescreption,
      text: "personalized Treatment Plans & Guidance"
    }
  ];



  return (
    <div className="h-[100vh]">
        <Navbar />
      {/* <div className="relative flex items-center h-[75vh] bg-gradient-to-r from-[rgba(18,18,18,0.88)] via-[rgba(18,18,18,0.92)] to-transparent">

        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${window.innerWidth <= 768 ?  backgroundMobileImg : backgroundImg  })`, // Use the imported image here
            filter: "blur(0.3px)",
          }}
        ></div> */}

<div className="relative flex items-center min-h-[75vh] bg-gradient-to-r from-[rgba(18,18,18,0.88)] via-[rgba(18,18,18,0.92)] to-transparent">
        <style>{`
          @media (min-width: 768px) {
            .hero-background {
              background-image: url(${backgroundImg});
            }
          }
          @media (max-width: 767px) {
            .hero-background {
              background-image: url(${backgroundMobileImg});
            }
          }
        `}</style>
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center hero-background"
          style={{
            filter: "blur(0.3px)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl pt-20 sm:pt-24 lg:pt-32">
            <div>
              {/* Welcome Text */}
              <h2 className="text-gray-200 font-light text-xl mb-4">
                Namaste, Welcome to Amrutam
              </h2>

              {/* Main Heading */}
              <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                Step into Holistic Healing with{" "}
                <span className="border-b-2 border-white">Ayurveda</span>
              </h1>

              {/* Subheading */}
              <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
                Book Consultation With Certified Experts.
              </h2>

              {/* Description */}
              <p className="text-gray-200 text-lg mb-8 max-w-xl">
                Dive into the world of ayurveda and experience personalized
                health solutions and holistic guidance from trusted ayurvedic
                doctors anytime, anywhere.
              </p>

              {/* CTA Button */}
              <button className="bg-[#3F704D] hover:bg-[#345C3F] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* Features Section */}
      {/* <div className="flex justify-between items-center bg-[#FFF7E2] px-12 py-5 gap-2">
        <div className="flex items-center gap-4 p-5">
          <div className="border-2 border-[#3A643B] rounded-full p-3">
            <img src={speechBubble}  className="w-14"/>
          </div>
          <p className="text-[#3A643B] font-semibold">convenient online & In-clinic consultations</p>
        </div>
        <div className="flex items-center gap-4 p-2">
          <div className="border-2 border-[#3A643B] rounded-full p-3">
            <img src={shield}  className="w-14"/>
          </div>
          <p className="text-[#3A643B] font-semibold">Safe and effective treatment</p>
        </div>
        <div className="flex items-center gap-4 p-5">
          <div className="border-2 border-[#3A643B] rounded-full p-3">
            <img src={doctor}  className="w-14"/>
          </div>
          <p className="text-[#3A643B] font-semibold">Experienced Ayurvedic Practitioners</p>
        </div>
        <div className="flex items-center gap-4 p-5">
          <div className="border-2 border-[#3A643B] rounded-full p-3">
            <img src={prescreption}  className="w-14"/>
          </div>
          <p className="text-[#3A643B] font-semibold">personalized Treatment 
          Plans & Guidance</p>
        </div>
        
      </div> */}

<div className="flex flex-col md:flex-row md:justify-between items-center   md:px-12 py-5 gap-4 md:gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center bg-[#FFF7E2] gap-4 p-3 md:p-5 w-full md:w-auto">
            <div className="border-2 border-[#3A643B] rounded-full p-3">
              <img src={feature.icon} alt="" className="w-10 md:w-14"/>
            </div>
            <p className="text-[#3A643B] font-semibold text-sm md:text-base">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
