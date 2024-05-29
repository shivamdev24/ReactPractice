import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import ourVision from '../../../assets/Image/ourVisionbg.jpg'

function HeroSection() {
  return (
    <div className="md:h-[50rem] h-[40rem] text-white relative imgbg bg-transparent">
      <img
        src={ourVision}
        className="absolute object-cover w-full h-[50rem] top-0 z-[-1]"
        alt=""
      />
      <span className="md:h-[50rem] h-[40rem] w-[100%] z-[-1] absolute top-0 bg-black opacity-[.8]"></span>
      <div className="flex flex-col text-center justify-center items-center pt-[50%] lg:pt-[20%] gap-6 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-6xl font-semibold text-orange">
            <Typewriter
              options={{
                strings: [
                  "Empowering",
                  "Healthcare & Excellence",
                  "Capital Medical Solutions.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h2 className="text-5xl lg:text-4xl font-bold">
            Welcome to Shelvestech
          </h2>
        </div>
        <div className="w-[70%]">
          <p className="text-lg font-sm  lg:text-xl">
            We understand that the heart of exceptional healthcare lies in the
            quality and reliability of the equipment used.
          </p>
          <div className="mt-10 flex gap-6 justify-center items-center">
            <a
              className="bg-white font-bold  px-4 lg:px-6 py-1 lg:py-3 rounded-full text-graydark hover:bg-orange duration-500  hover:text-white"
              href="mailto:mukesh.panchal@shelvestech.com"
            >
              Get Your Product Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
