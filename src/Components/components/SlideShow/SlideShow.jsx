import { useState, useEffect } from "react";
import PSA from "../../../assets/Image/PsaOxygen.jpeg";
import LA from "../../../assets/Image/LinearAccelerator.jpg";
import MRI from "../../../assets/Image/MRI.jpg";
import CTSCAN from "../../../assets/Image/CTScanMachine.jpg";
import Typewriter from "typewriter-effect";
import "./SildeShow.css";

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      number: "1 / 4",
      src: PSA,
      caption: "Empowering ",
    },
    {
      number: "2 / 4",
      src: MRI,
      caption: "Healthcare & Excellence",
    },
    {
      number: "3 / 4",
      src: LA,
      caption: "Capital Medical Solutions.",
    },
    // {
    //   number: "4 / 4",
    //   src: CTSCAN,
    //   caption: "",
    // },
  ];

  useEffect(() => {
    const showSlides = () => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const interval = setInterval(showSlides, 6000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div>
      <div className="slideshow-container w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mySlides fade ${slideIndex === index ? "block" : "none"}`}
          >
            <div className="black-overlay md:h-[750px] h-[630px]"></div>
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full md:h-[750px] h-[630px] object-center object-cover"
            />
            <div className="text flex justify-center items-center lg:text-7xl text-3xl font-bold ">
              <div className="w-64 text-white md:w-full">
                {slideIndex === index && (
                  <h1>
                    <Typewriter
                      options={{
                        strings: [slide.caption],
                        autoStart: true,
                        loop: false,
                      }}
                    />
                  </h1>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className=" absolute bottom-5 md:right-[47%] right-[37%]">
          <div className=" flex gap-3">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot  ${slideIndex === index ? "active" : ""}`}
                onClick={() => currentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
