
import { Link } from "react-router-dom";
import img1 from "../assets/Image/STImages/1.png"
import img2 from "../assets/Image/STImages/2.png"
import img3 from "../assets/Image/STImages/3.png"
import img4 from "../assets/Image/STImages/4.png"
// import img5 from "../assets/Image/STImages/5.png"
import img6 from "../assets/Image/STImages/6.png"
import img7 from "../assets/Image/STImages/7.png"
import img8 from "../assets/Image/STImages/8.png"
import img9 from "../assets/Image/STImages/9.png"

import SlideShow from "../Components/components/SlideShow/SlideShow";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";

import CTSmachine from "/src/assets/Image/CTScanMachine.jpg";
import OurVision from "../assets/Image/ourVisionbg.jpg";
import PSAOxygen from "../assets/Image/PSA.jpeg";
import MRI from "../assets/Image/MRI.jpg";
import LinearAccelerator from "../assets/Image/LinearAccelerator.jpg";

const OurMission = [
  {
    title: "Quality",
    text: "Ensuring that every product we offer meets the highest standards of performance and safety.",
    Icon: img1,
  },
  {
    title: "Innovation",
    text: "Continually updating our inventory with the latest advancements in medical technology.",
    Icon: img2,
  },
  {
    title: "Service",
    text: "Providing exceptional customer support and technical assistance to maximize the value of your investment.",
    Icon: img3,
  },
  {
    title: "Affordability",
    text: "Offering competitive pricing and flexible financing options to make top-tier equipment accessible to all.",
    Icon: img9,
  },
];
const OurCoreValues = [
  {
    title: "Integrity",
    text: "We conduct our business with honesty, transparency, and respect for our clients and partners.",
    Icon: img7,
  },
  {
    title: "Excellence",
    text: "We strive for excellence in everything we do, from product selection to customer service.",
    Icon: img8,
  },
  {
    title: "Collaboration",
    text: "We believe in building strong, long-lasting relationships with our clients, partners, and the medical community.",
    Icon: img6,
  },
  {
    title: "Innovation",
    text: "We are committed to staying at the forefront of medical technology to provide the best solutions for our clients.",
    Icon: img2,
  },
];
const OurProductsandServices = [
  {
    title: "PSA Oxygen Plants",

    Icon: PSAOxygen,
    link: "/PSA-Oxygen-Plant",
  },
  {
    title: "Refurbished CT and MRI Machines",
    Icon: MRI,
    link: "/Refurbished-CT-MRI-Machines",
  },
  {
    title: "Hospital Management Software",
    Icon: OurVision,
    link: "/Software-Solutions",
  },
  {
    title: "Onco Radiation Products",
    Icon: LinearAccelerator,
    link: "/Onco-Radiations-Products",
  },
];
const WhyChooseUs = [
  {
    title: "Quality Assurance",

    Icon: img8,
  },
  {
    title: "Cost-Effective Solutions",
    Icon: img9,
  },
  {
    title: "Technical Support and Maintenance",
    Icon: img3,
  },
  {
    title: "Customized Solutions",
    Icon: img4,
  },
];




function Home() {
  useEffect(() => {
    console.log("Component re-rendered");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="">
        <SlideShow />
        {/* <HeroSection /> */}
      </div>

      <div>
        <div className="relative ">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between ">
            <div className="flex relative justify-between w-full lg:justify-around">
              <img
                src={CTSmachine}
                className="h-[26rem] w-[100%] opacity-28  object-cover"
                alt=""
              />
              <span className="h-[26rem] w-[100%] absolute top-0 bg-black opacity-[.9]"></span>

              <div className="lg:w-[70%] w-[100%] px-5 mx-auto absolute top-20  leading-8">
                <span className="font-bold text-md md:text-xl text-white">
                  Our Vision
                </span>
                <Fade direction="up" triggerOnce="true">
                  <h1 className="text-lg md:text-3xl font-bold text-[#f44705]">
                    Our vision is simple yet profound
                  </h1>
                  <p className="mt-3 text-sm sm:text-xl text-justify mb-4 text-white">
                    Make advanced medical technology accessible to healthcare
                    facilities worldwide. We believe that every medical
                    professional should have access to the best equipment
                    available, regardless of location or budget. By bridging the
                    gap between innovation and accessibility, we aim to enhance
                    healthcare outcomes and save lives.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="lg:relative ">
            <div className="flex flex-col imgbg ">
              <div className="flex flex-col bg-graypowderlight w-full py-20 justify-center items-center px-5">
                <Fade direction="up" triggerOnce="true">
                  <h2 className="lg:text-4xl text-3xl text-center font-bold text-orange">
                    Our Mission
                  </h2>
                </Fade>

                <div className="flex mt-10 flex-col lg:flex-row px-5 gap-4">
                  {OurMission.map((props, index) => (
                    <Link to="/" key={index}>
                      <Fade direction="up" triggerOnce="true">
                        <div className="relative flex flex-col items-center w-80 py-8 bg-orange rounded-lg border border-orange hover:shadow-md overflow-hidden hover:scale-105 hover:text-white transition duration-500">
                          <div className="flex items-center justify-center w-80 bg-white h-[16rem] flex-col transform hover:opacity-0 absolute top-0 duration-500">
                            <span className="">
                              <img
                                src={props.Icon}
                                alt="img"
                                className="w-36 "
                              />
                            </span>
                            <span className=" text-xl text-orange font-medium text-center">
                              {props.title}
                            </span>
                          </div>
                          <div className="overflow-hidden w-[20rem]  top-0 h-[12rem]   ">
                            <p className=" text-center px-5  py-10 flex flex-col">
                              <span className="text-2xl font-bold">
                                {props.title}
                              </span>
                              <span className="text-justify">
                                {" "}
                                {props.text}
                              </span>
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full py-20 justify-center items-center px-5">
                <Fade direction="up" triggerOnce="true">
                  <h2 className="lg:text-4xl text-3xl text-center font-bold text-orange">
                    Our Core Values
                  </h2>
                </Fade>

                <div className="flex mt-10 flex-col lg:flex-row px-5 gap-4">
                  {OurCoreValues.map((props, index) => (
                    <Link to="/" key={index}>
                      <Fade direction="up" triggerOnce="true">
                        <div className="relative flex flex-col items-center w-80 py-8 bg-orange rounded-lg border border-orange hover:shadow-md overflow-hidden hover:scale-105 hover:text-white transition duration-500">
                          <div className="flex items-center justify-center w-80 bg-white h-[16rem] flex-col transform hover:opacity-0 absolute top-0 duration-500">
                            <span className="">
                              <img
                                src={props.Icon}
                                alt="img"
                                className="w-36 "
                              />
                            </span>
                            <span className="text-xl text-orange font-medium text-center">
                              {props.title}
                            </span>
                          </div>
                          <div className="overflow-hidden w-[20rem]  top-0 h-[12rem]   ">
                            <p className=" text-center px-5 py-10 flex flex-col">
                              <span className="text-2xl font-bold">
                                {props.title}
                              </span>
                              <span className="text-justify">{props.text}</span>
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col bg-graypowderlight w-full py-20 justify-center items-center px-5">
                <Fade direction="up" triggerOnce="true">
                  <h2 className="lg:text-4xl text-3xl text-center font-bold text-orange">
                    Our Products and Services
                  </h2>
                </Fade>

                <div className="flex mt-10 flex-col lg:flex-row px-5 gap-4">
                  {OurProductsandServices.map((props, index) => (
                    <Link to={props.link} key={index}>
                      <Fade direction="up" triggerOnce="true">
                        <div className="relative flex flex-col items-center w-80 h-80  bg-white rounded-lg  hover:shadow-md overflow-hidden hover:scale-105 hover:text-orange transition duration-500">
                          <span className=" w-80 h-72">
                            <img
                              src={props.Icon}
                              alt="img"
                              className="w-80 h-64 rounded-t object-cover"
                            />
                          </span>
                          <span className="text-lg px-2 pb-5  text-center">
                            {props.title}
                          </span>
                        </div>
                      </Fade>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col  w-full py-20 justify-center items-center px-5">
                <Fade direction="up" triggerOnce="true">
                  <h2 className="lg:text-4xl text-3xl text-center font-bold text-orange">
                    Why Choose Us
                  </h2>
                </Fade>

                <div className="flex mt-10 flex-col lg:flex-row px-5 gap-4">
                  {WhyChooseUs.map((props, index) => (
                    <Link to="/" key={index}>
                      <Fade direction="up" triggerOnce="true">
                        <div className="relative flex flex-col items-center w-80 py-8 bg-white rounded-lg border border-orange hover:shadow-md overflow-hidden hover:scale-105 hover:text-orange transition duration-500">
                          <span className="">
                            <img src={props.Icon} alt="img" className="w-36 " />
                          </span>
                          <span className="text-lg text-orange font-medium text-center">
                            {props.title}
                          </span>
                        </div>
                      </Fade>
                    </Link>
                  ))}
                </div>
              </div>

              <div className=" relative h-[28rem] ">
                <img
                  src={OurVision}
                  className="h-[28rem] absolute top-0 bg-black  object-cover w-full"
                />
                <div className="h-[28rem] absolute top-0 bg-black opacity-[.9] w-full"></div>
                <div className="w-[80%] mx-auto py-20">
                  <Fade direction="left" triggerOnce="true">
                    <div className="w-96 bg-white p-4 flex flex-col gap-2 border-b-4 border-orange  shadow-md shadow-orange  rounded">
                      <p className="text-sm text-justify italic">
                        <q>
                          ShelvesTech has been an absolute game-changer for our
                          business. Their innovative shelving solutions have
                          revolutionized our storage capabilities, maximizing
                          our space efficiency and organization. The quality of
                          their products is unmatched, and their customer
                          service is exceptional. Working with ShelvesTech has
                          truly been a pleasure, and we look forward to
                          continuing our partnership for years to come.
                        </q>
                      </p>
                      <div className="italic  text-sm">
                        <p>Piyush Sanawar</p>
                        <p className="text-xs">Sanawar Hospital</p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
