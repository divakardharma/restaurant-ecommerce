import React, { useState, useEffect } from 'react';
import './Slider.css'; // Ensure you have this CSS file
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';
import Img4 from '../../assets/img4.png';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use imported images in the array
  const slides = [Img1, Img2, Img3, Img4]; // Add more images as needed

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(autoSlide);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>‹</button>
      <button className="next" onClick={handleNext}>›</button>
    </div>
  );
};

export default Slider;
