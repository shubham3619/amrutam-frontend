import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AyurvedicApproach = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Make Appointment",
      description: "You must make an appointment in advance, to choose the service and date."
    },
    {
      number: "2",
      title: "Consultations",
      description: "The next stage involves a thorough consultation with an Ayurveda practitioner."
    },
    {
      number: "3",
      title: "Treatment Planning",
      description: "The Ayurvedic practitioner creates a personalized treatment plan for you"
    },
    {
      number: "4",
      title: "Maintenance",
      description: "These visits allow for assessment of progress, adjustments to the treatment."
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <div className="mx-auto px-4 py-12 bg-white">
      {/* Title Section with Faded Border */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-3xl font-semibold text-green-800 mb-4 relative">
            Our Ayurvedic Approach
            {/* Faded Border */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-green-800 to-transparent opacity-30"></div>
          </h2>
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto text-center mt-6">
          At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient's body type, medical history, and current health conditions.
        </p>
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden relative px-4">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {steps.map((step) => (
              <div key={step.number} className="w-full flex-shrink-0">
                <div className="bg-[#FFF7E2] rounded-lg border-t-4 border-[#3A643B] shadow-sm h-64 mx-2">
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#7D8F7C] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl font-semibold">{step.number}</span>
                    </div>
                    <h1 className="text-green-800 text-xl font-semibold mb-2">
                      {step.title}
                    </h1>
                    <p className="text-lg text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-green-800" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-green-800" />
        </button>

        {/* Mobile Dots Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeSlide ? 'bg-green-800' : 'bg-gray-300'
              }`}
            >
              <span className="sr-only">Step {index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-4 gap-6 px-20">
        {steps.map((step) => (
          <div key={step.number} className="bg-[#FFF7E2] rounded-lg border-t-4 border-[#3A643B] shadow-sm h-64">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-[#7D8F7C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-semibold">{step.number}</span>
              </div>
              <h1 className="text-green-800 text-xl font-semibold mb-2">
                {step.title}
              </h1>
              <p className="text-lg text-gray-700">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AyurvedicApproach;