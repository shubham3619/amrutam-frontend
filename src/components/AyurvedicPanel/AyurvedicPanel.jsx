import React from 'react';
import ayurvedic1 from "../../assets/images/ayurvedicPannel/ayurvedic1.png";
import ayurvedic2 from "../../assets/images/ayurvedicPannel/ayurvedic2.png";
import ayurvedic3 from "../../assets/images/ayurvedicPannel/ayurvedic3.png";


const AyurvedicPanel = () => {
  return (
    <div className="mx-auto p-4 md:p-6 bg-[#FFF7E2]">
      <h1 className="text-xl md:text-2xl font-semibold text-green-800 mb-6 md:mb-8 text-center underline decoration-2 underline-offset-8">
        What sets Ayurvedic consultations apart?
      </h1>

      <div className="flex flex-col space-y-4 md:space-y-6 px-4 md:px-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {/* Sanskrit Quote Card */}
          <div className="md:col-span-2 shadow-lg rounded-3xl border-t-4 border-[#3A643B] bg-white h-64">
            <div className="p-4 h-full flex flex-col justify-center">
              <div className="rounded-lg">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#3A643B]" style={{ fontFamily: "'Inknut Antiqua', serif" }}>
                  स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
                </h1>
                <div className="text-base md:text-lg text-[#3A643B]">
                  [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Image */}
          <div className="md:col-span-2 h-64">
            <img 
              src={ayurvedic1}
              alt="Ayurvedic consultation"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* Precise Diagnosis Card */}
          <div className="md:col-span-1 shadow-lg rounded-3xl border-t-4 border-[#3A643B] bg-white h-64">
            <div className="p-4 h-full flex flex-col justify-center">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-800">
                Precise Diagnosis
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Zero side-effects Card */}
          <div className="shadow-lg rounded-3xl border-t-4 border-[#3A643B] bg-white h-64">
            <div className="p-4 h-full flex flex-col justify-center">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-800">
                Zero side-effects
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs
              </p>
            </div>
          </div>

          {/* Herbs Image */}
          <div className="h-64">
            <img 
              src={ayurvedic2}
              alt="Ayurvedic herbs"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Individual Treatment Card */}
          <div className="shadow-lg rounded-3xl border-t-4 border-[#3A643B] bg-white h-64">
            <div className="p-4 h-full flex flex-col justify-center">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-800">
                Individual Treatment
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                all Treatments are personalized based on a person's unique constitution and health concerns.
              </p>
            </div>
          </div>

          {/* Treatment Image */}
          <div className="h-64">
            <img 
              src={ayurvedic3}
              alt="Individual treatment"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedicPanel;