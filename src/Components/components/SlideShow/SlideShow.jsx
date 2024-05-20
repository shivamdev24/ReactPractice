import { useState, useEffect } from "react";
import Img1 from "../../../assets/img/img1.jpg";
import Img2 from "../../../assets/img/img2.jpg";
import Img3 from "../../../assets/img/img3.jpg";
import Img4 from "../../../assets/img/img4.jpg";
import Typewriter from "typewriter-effect";
import "./SildeShow.css";

const SlideShow = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = [
        {
            number: "1 / 4",
            src: Img1,
            caption: "INTELIGENCE DRIVEN HEALTH CARE",
        },
        {
            number: "2 / 4",
            src: Img2,
            caption: "SMART HEALTH CARE SOLUTIONS",
        },
        {
            number: "3 / 4",
            src: Img3,
            caption: "ITS ALL ABOUT HEALTH CARE SOLUTIONS",
        },
        {
            number: "4 / 4",
            src: Img4,
            caption: "EFFCIENT. TRUSTED. COMMITTED.",
        },
    ];

    useEffect(() => {
        const showSlides = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };

        const interval = setInterval(showSlides, 6000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    // const plusSlides = (n) => {
    //     setSlideIndex((prevIndex) => {
    //         let newIndex = prevIndex + n;
    //         if (newIndex >= slides.length) newIndex = 0;
    //         if (newIndex < 0) newIndex = slides.length - 1;
    //         return newIndex;
    //     });
    // };

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
                        {/* <div className="numbertext">{slide.number}</div> */}
                        <div className="black-overlay"></div>
                        <img
                            src={slide.src}
                            style={{ width: "100%" }}
                            alt={`Slide ${index + 1}`}
                            className="w-full md:h-[700px] h-[655px] object-cover"
                        />
                        <div className="text flex justify-center items-center lg:text-7xl text-3xl font-bold ">
                            <div className="w-64 md:w-full">
                                {slideIndex === index && (
                                    <Typewriter
                                        options={{
                                            strings: [slide.caption],
                                            autoStart: true,
                                            loop: false,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* <a className="prev" onClick={() => plusSlides(-1)}>
                    ❮
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                    ❯
                </a> */}
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
