import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sliderImg1 from '/public/assets/dy-slider-1.jpg';
import sliderImg2 from '/public/assets/Rectangle-329.jpg';
import sliderImg3 from '/public/assets/Rectangle-331.jpg';

const images = [
  { src: sliderImg1, text: 'SPECIALIST FAMILY LAWYERS', text1: 'We achieve a result that is right for you' },
  { src: sliderImg2, text: 'FAMILY LAW FIRM', text1: 'Rely On Us For The Best Outcome' },
  { src: sliderImg3, text: 'FAMILY LAW FIRM', text1: 'Expertise with care and empathy' },
];

const HeroSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const changeSlide = (direction) => {
    setCurrentIndex((currentIndex + direction + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            <img src={image.src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            {/* Text Overlay */}
            <div className="absolute top-[30%] left-[5%] max-w-[500px] text-left">
              <p className="text-white text-sm sm:text-lg font-medium">{image.text}</p>
              <h2 className="text-secondary text-3xl sm:text-4xl font-bold mt-2">{image.text1}</h2>
              <Link to="/about-us">
                <button className="mt-4 bg-secondary text-white px-6 py-2 text-sm sm:text-base font-semibold rounded hover:bg-opacity-90 transition">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => changeSlide(-1)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
      >
        &#10094;
      </button>
      <button
        onClick={() => changeSlide(1)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
      >
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? 'bg-secondary' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSec;
