import React, { useState } from 'react';
import { carousel1, carousel2, carousel3 } from "../assets/imagesFile/Images";

export default function CarouselleHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [carousel1, carousel2, carousel3];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="default-carousel" className="relative w-full pt-[10vh]">
      <div className="relative overflow-hidden h-[60vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-lg mb-6">Women Collection 2018</h2>
              <p className="text-6xl font-bold mb-4">NEW ARRIVALS</p>
              <button className="bg-white text-black px-6 py-2 rounded-full text-lg hover:bg-red-700 hover:text-white cursor-pointer ">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={handlePrev}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </span>
      </button>

      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={handleNext}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button>
    </div>
  );
}
