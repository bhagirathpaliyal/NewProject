// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
  { src: './src/assets/dy-slider-1.jpg', text: 'SPECIALIST FAMILY LAWYERS' ,text1: 'We achieve a result that is right for you'},
  { src: './src/assets/Rectangle-329.jpg', text: 'FAMILY LAW FIRM',text1: 'Rely On Us For The Best Outcome' },
  { src: './src/assets/Rectangle-331.jpg', text: 'FAMILY LAW FIRM',text1: 'Expertise with care and empathy' }
];

const HSection1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-h-[90vh]  overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-[140px] max-md:top-[50px] left-[2.5%] w-[50%] max-sm:w-[100%]">
              <div className=" text-white ">
                <p className="text-[20px] max-md:text-[16px] md:font-bold md:mb-[30px]">{image.text}</p>
                <h2 className='text-[55px] max-md:text-[30px] max-lg:text-[40px] text-secondary font-bold'>{image.text1}</h2>
                <div className='flex items-center'>
                    <div className='w-[25px] h-[1px] bg-secondary mr-[10px]'></div>
                  <Link to={'/about-us'}>  <button className='text-[#fff] max-md:text-[12px] text-[15px] font-bold'>View More </button></Link>
                    </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-[2%]  transform -translate-y-1/2 text-[#fff]"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-[1.5%] transform -translate-y-1/2 text-[#fff] "
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full  ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HSection1;
