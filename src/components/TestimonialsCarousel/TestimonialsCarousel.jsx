import React, { useState } from 'react';
import { Star } from 'lucide-react';
import profile from "../../assets/images/profile.png";

const TestimonialsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: "Sophie Moore",
      image: profile,
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      title: "One of a kind service",
      text: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      consultedFor: "Consulted for Skin"
    },
    {
      name: "Sophie Moore",
      image: profile,
      location: "Mumbai",
      date: "17/02/24",
      rating: 5,
      title: "One of a kind service",
      text: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      consultedFor: "Consulted for hair"
    },
    {
      name: "Sophie Moore",
      image: profile,
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      title: "One of a kind service",
      text: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      consultedFor: "Consulted for hair"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-[#fff9f0]">
      {/* Title with underline */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-green-800 mb-4 relative inline-block">
          Stories from our valued customers!
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-green-800/20"></div>
        </h2>
      </div>

      {/* Testimonials Container */}
      <div className="relative">
        <div className="flex gap-6 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`flex-none w-full md:w-1/3 transition-transform duration-300 ease-in-out transform`}
              style={{
                transform: `translateX(-${activeSlide * 100}%)`
              }}
            >
              <div className="shadow-lg overflow-hidden rounded-3xl w-72">
                {/* Consultation Type Header */}
                <div className={`p-4 ${index === 0 ? 'bg-purple-100' : 'bg-green-100'}`}>
                  {testimonial.consultedFor}
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full">
                        <img
                          src={testimonial.image}
                          alt="Profile Pic"
                          className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="ml-auto text-gray-500 text-sm">
                      {testimonial.date}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Review Title */}
                  <h4 className="text-lg font-semibold mb-2">"{testimonial.title}"</h4>

                  {/* Review Text */}
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeSlide ? 'bg-green-800' : 'bg-gray-300'
              }`}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;