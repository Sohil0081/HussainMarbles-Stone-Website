import React, { useRef, useState } from "react";
import "./Pallete.css";

function Pallete() {

  const [slide, setSlide] = useState(0);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const images = [
    "https://img.magnific.com/premium-vector/luxury-white-gold-marble-texture-background-vector-panoramic-marbling-texture-design-banner_350405-519.jpg?semt=ais_hybrid&w=740&q=80",

    "https://img.magnific.com/premium-vector/luxury-white-gold-marble-texture-background-vector-panoramic-marbling-texture-design-banner_350405-519.jpg?semt=ais_hybrid&w=740&q=80",

    "https://img.magnific.com/premium-vector/luxury-white-gold-marble-texture-background-vector-panoramic-marbling-texture-design-banner_350405-519.jpg?semt=ais_hybrid&w=740&q=80",

    "https://img.magnific.com/premium-vector/luxury-white-gold-marble-texture-background-vector-panoramic-marbling-texture-design-banner_350405-519.jpg?semt=ais_hybrid&w=740&q=80",

    "https://img.magnific.com/premium-vector/luxury-white-gold-marble-texture-background-vector-panoramic-marbling-texture-design-banner_350405-519.jpg?semt=ais_hybrid&w=740&q=80"
  ];


  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % images.length);
  };


  const previousSlide = () => {
    setSlide((prev) => (prev - 1 + images.length) % images.length);
  };


  // Start swipe
  const handlePointerDown = (e) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };


  // End swipe
  const handlePointerUp = (e) => {

    if (!isDragging.current) return;

    const endX = e.clientX;

    const distance = startX.current - endX;

    // Swipe left
    if (distance > 50) {
      nextSlide();
    }

    // Swipe right
    else if (distance < -50) {
      previousSlide();
    }

    isDragging.current = false;
  };


  return (
    <div
      className="slider"

      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        isDragging.current = false;
      }}
    >

      <div
        className="slider-track"
        style={{
          transform: `translateX(-${slide * 100}%)`
        }}
      >

        {images.map((image, index) => (

          <div className="slide" key={index}>

            <img
              src={image}
              alt={`Marble ${index + 1}`}
            />

            <div className="slide-content">

              <h1>Premium Marble</h1>

              <p>
                Elegant marble for your dream space
              </p>

              <button>
                Explore Collection
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* Dots */}

      <div className="dots">

        {images.map((_, index) => (

          <span
            key={index}
            className={
              slide === index
                ? "dot active"
                : "dot"
            }
            onClick={() => setSlide(index)}
          />

        ))}

      </div>

    </div>
  );
}

export default Pallete;