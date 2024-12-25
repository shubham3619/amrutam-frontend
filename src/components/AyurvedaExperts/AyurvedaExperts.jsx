import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, GraduationCap, Stethoscope } from 'lucide-react';
import profile from "../../assets/images/profile.png";
const AyurvedaExperts = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const experts = [
            {
              name: "Dr. Vaishali Sharma",
              title: "Ayurveda Practitioner (BAMS, MD)",
              experience: "25 years of experience",
              rating: 4.5,
              specialty: "Skin Specialist",
              image: profile
            },
            {
              name: "Dr. Vaishali Sharma",
              title: "Ayurveda Practitioner (BAMS, MD)",
              experience: "25 years of experience",
              rating: 4.5,
              specialty: "Skin Specialist",
              image: profile
            },
            {
              name: "Dr. Vaishali Sharma",
              title: "Ayurveda Practitioner (BAMS, MD)",
              experience: "25 years of experience",
              rating: 4.5,
              specialty: "Skin Specialist",
              image: profile
            }
          ];
  return (
    <div className="w-full">
      {/* Title Section */}
      <div className="text-center p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4">
          Meet Our<br className="md:hidden" /> Ayurveda Experts
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative px-4 md:px-0">
        {/* Only show navigation buttons on desktop */}
        <div className="hidden md:block">
          <button 
            onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-500" />
          </button>
          
          <button 
            onClick={() => setActiveSlide(Math.min(experts.length - 1, activeSlide + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Experts Grid/Carousel */}
        <div className="flex gap-6 overflow-hidden md:mx-24">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/3 transition-transform duration-300 ease-in-out transform"
              style={{
                transform: `translateX(-${activeSlide * 100}%)`
              }}
            >
              {/* Expert Card */}
              <div className="bg-[#fff9f0] mx-auto rounded-3xl md:w-60 max-w-[280px] flex flex-col relative">
                {/* Content Container */}
                <div className="p-6 pb-16">
                  {/* Expert Image & Rating */}
                  <div className="relative mb-4 flex justify-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                      <img 
                        src={expert.image} 
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 bg-black text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                      <span>{expert.rating}</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>

                  {/* Expert Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{expert.title}</p>
                    
                    <div className="flex items-center justify-center gap-2 text-gray-600 mb-3">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-sm">{expert.experience}</span>
                    </div>

                    <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full">
                      <div className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4" />
                        <span className="text-sm">{expert.specialty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <button className="absolute bottom-0 left-0 right-0 bg-green-800 text-white py-3 rounded-b-3xl hover:bg-green-700 transition-colors">
                  Book a session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {experts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeSlide ? 'bg-green-800' : 'bg-gray-300'
              }`}
            >
              <span className="sr-only">Expert {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AyurvedaExperts;