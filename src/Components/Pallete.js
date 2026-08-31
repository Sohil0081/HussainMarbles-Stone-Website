import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pallete.css";

function Pallete() {

  const [slide, setSlide] = useState(0);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const navigate = useNavigate();


  /* =========================================
     SLIDER DATA
  ========================================= */

  const images = [

    {
      image: "/Images/Image_1.webp",
      title: "Sandstone & Texture Stone",
      description: "Pure elegance crafted for luxurious interiors.",
      buttonText: "Explore Collection",
      path: "/products/Sandstone"
    },

    {
      image: "/Images/Image_2.webp",
      title: "Natural Stone Cladding",
      description: "Timeless natural stone designed for sophisticated spaces.",
      buttonText: "Explore Collection",
      path: "/products/Stone-Cladding"
    },

    {
      image: "/Images/Image_3.webp",
      title: "Marble & Stone Inlay",
      description: "Natural Indian marble with exceptional character.",
      buttonText: "Explore Collection",
      path: "/products/Stone-Inlay"
    },

    {
      image: "/Images/Image_4.webp",
      title: "Stone Paving & Cobblestone",
      description: "Elegant paving solutions crafted from natural stone.",
      buttonText: "Explore Collection",
      path: "/products/Stone-Paving"
    },

    {
      image: "/Images/Image_5.webp",
      title: "Rocks & Mineral",
      description: "Unique natural patterns designed to stand apart.",
      buttonText: "Explore Collection",
      path: "/products/Rocks-Mineral"
    }

  ];


  /* =========================================
     NEXT SLIDE
  ========================================= */

  const nextSlide = () => {

    setSlide((prev) => (prev + 1) % images.length);

  };


  /* =========================================
     PREVIOUS SLIDE
  ========================================= */

  const previousSlide = () => {

    setSlide(
      (prev) => (prev - 1 + images.length) % images.length
    );

  };


  /* =========================================
     AUTO SLIDER
  ========================================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setSlide(
        (prev) => (prev + 1) % images.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [images.length]);


  /* =========================================
     POINTER DOWN
  ========================================= */

  const handlePointerDown = (e) => {

    startX.current = e.clientX;

    isDragging.current = true;

  };


  /* =========================================
     POINTER UP
  ========================================= */

  const handlePointerUp = (e) => {

    if (!isDragging.current) return;

    const endX = e.clientX;

    const distance =
      startX.current - endX;


    /* =====================================
       SWIPE LEFT
    ===================================== */

    if (distance > 50) {

      nextSlide();

    }


    /* =====================================
       SWIPE RIGHT
    ===================================== */

    else if (distance < -50) {

      previousSlide();

    }


    isDragging.current = false;

  };


  /* =========================================
     OPEN CATEGORY
  ========================================= */

  const openCategory = (path) => {

    navigate(path);

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


      {/* =========================================
          SLIDER TRACK
      ========================================= */}

      <div
        className="slider-track"

        style={{
          transform: `translateX(-${slide * 100}%)`
        }}
      >


        {images.map((item, index) => (

          <div
            className="slide"
            key={index}
          >


            {/* =====================================
                IMAGE
            ===================================== */}

            <img
              src={item.image}
              alt={item.title}
              draggable="false"
            />


            {/* =====================================
                CONTENT
            ===================================== */}

            <div className="slide-content">


              {/* TITLE */}

              <h1>
                {item.title}
              </h1>


              {/* DESCRIPTION */}

              <p>
                {item.description}
              </p>


              {/* =================================
                  EXPLORE BUTTON
                  ONLY THIS NAVIGATES
              ================================= */}

              <button
                type="button"

                onClick={() => {
                  openCategory(item.path);
                }}
              >

                {item.buttonText}

              </button>


            </div>

          </div>

        ))}


      </div>


      {/* =========================================
          DOTS
      ========================================= */}

      <div
        className="dots"

        onPointerDown={(e) => {
          e.stopPropagation();
        }}
      >


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