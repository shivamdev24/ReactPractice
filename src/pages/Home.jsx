
import { Link } from "react-router-dom";
import img1 from "../assets/Image/STImages/1.png"
import img2 from "../assets/Image/STImages/2.png"
import img3 from "../assets/Image/STImages/3.png"
import img4 from "../assets/Image/STImages/4.png"
import img5 from "../assets/Image/STImages/5.png"
import img6 from "../assets/Image/STImages/6.png"
import img7 from "../assets/Image/STImages/7.png"
import img8 from "../assets/Image/STImages/8.png"
import img9 from "../assets/Image/STImages/9.png"
import img10 from "../assets/Image/STImages/10.png"

// import SlideShow from "../Components/components/SlideShow/SlideShow";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

import CTSmachine from "/src/assets/Image/CTScanMachine.jpg";
import OurVision from "../assets/Image/ourVisionbg.jpg";
import PSAOxygen from "../assets/Image/PSAOxygen.jpeg";
import MRI from "../assets/Image/MRI.jpg";
import LinearAccelerator from "../assets/Image/LinearAccelerator.jpg";
import HeroSection from "../Components/components/hero/HeroSection";

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
        {/* <SlideShow /> */}
        <HeroSection />
      </div>

      <div>
        <div className="relative ">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between ">
            {/* <div className="flex flex-col z-20 gap-1">
              {sectTwo.map((props, index) => (
                <Fade direction="up" triggerOnce="true">
                <div key={index} className="flex flex-col gap-1 relative">
                  <div className="bg-orange md:w-[27rem] w-[25rem] rounded md:rounded-none h-64 overflow-hidden transition duration-500 hover:bg-darknavyblue text-white">
                    <Link
                      to={props.to}
                      className="flex flex-col items-center mt-16 gap-3 text-2xl font-bold"
                    >
                      <span>{props.icon}</span>
                      <span>{props.title}</span>
                    </Link>
                  </div>
                </div>
                </Fade>
              ))}
            </div> */}

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
                <Fade direction="up" triggerOnce="true">
                  <p className="lg:text-lg mt-5  text-sm md:text-center md:w-[60%] font-medium  mx-auto text-justify text-black">
                    To support healthcare professionals and healthcare units by
                    providing high-quality, reliable medical equipment that
                    meets the evolving needs of modern medicine. We are
                    committed to:
                  </p>
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
                <Fade direction="up" triggerOnce="true">
                  <p className="lg:text-lg mt-5  text-sm text-center  mx-auto font-medium text-black">
                    At Shelves Tech, our core values guide every aspect of our
                    business:
                  </p>
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
                              className="w-80 h-64 rounded object-cover"
                            />
                          </span>
                          <span className="text-xl text-orange font-medium text-center">
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

              <div className=" relative hidden lg:block bg-graypowderlight h-[28rem] ">
                <img
                  src={OurVision}
                  className="h-[28rem] w-[100%] opacity-28 object-cover"
                  alt=""
                />
                <span className="h-[28rem] w-[100%] absolute top-0 bg-black opacity-[.9]"></span>

                <div className="flex absolute left-[30%] w-[40%] mx-auto top-0 py-6 flex-col lg:flex-row items-center justify-between  p-4 gap-4 w-full ">
                  <Fade direction="left" triggerOnce="true">
                    <div className="flex h-96 flex-col  shadow-xl rounded-md bg-cream  py-2 justify-center items-center  text-graydark px-2">
                      <Fade direction="up" triggerOnce="true">
                        <h1 className="lg:text-3xl text-xl text-center text-orange font-bold ">
                          Testimonials Demo
                        </h1>
                      </Fade>

                      <div className="flex mt-1   px-2 gap-4">
                        <Fade direction="up" triggerOnce="true">
                          <div className="relative flex flex-col items-center  mx-auto py-6  rounded px-8   overflow-hidden scale-105 transition duration-500">
                            <p className="text-sm text-justify ">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Neque cumque illo voluptas
                              laboriosam dignissimos saepe molestias vero
                              tempora ea possimus.
                            </p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Fade>
                  {/* <Fade direction="down" triggerOnce="true">
                    <div className="flex flex-col  shadow-xl rounded-md bg-cream  h-96  py-5  justify-center items-center   ">
                      <Fade direction="up" triggerOnce="true">
                        <h1 className="lg:text-2xl mx-auto  w-[80%] text-xl text-center font-bold text-orange ">
                         Testimonial demo2
                        </h1>
                      </Fade>

                      <div className="flex mt-1   px-2 gap-4">
                        <Fade direction="up" triggerOnce="true">
                          <div className="relative flex flex-col items-center  mx-auto py-6  px-8   overflow-hidden scale-105 transition duration-500">
                            <p className="text-sm text-justify ">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at pariatur quos recusandae repudiandae ratione nam, earum officia ipsum eveniet quidem sequi, possimus fugit commodi distinctio error sapiente, ut quis!
                            </p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Fade>
                  <Fade direction="right" triggerOnce="true">
                    <div className="flex flex-col shadow-xl  bg-cream rounded-md h-96 py-5  justify-center   items-center ">
                      <Fade direction="up" triggerOnce="true">
                        <h1 className="lg:text-2xl text-xl text-center font-bold text-orange">
                          Testimonial demo3
                        </h1>
                      </Fade>

                      <div className="flex mt-1   px-2 gap-4">
                        <Fade direction="up" triggerOnce="true">
                          <div className="relative flex flex-col items-center  mx-auto py-8   rounded px-10   overflow-hidden scale-105 transition duration-500">
                            <p className="text-sm text-justify text-black">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis laudantium quae ab deleniti suscipit qui, impedit, nobis labore magnam voluptatem doloribus ut veritatis tempore optio molestias corrupti rem tenetur consequuntur at quibusdam aspernatur minima? Possimus nisi nobis consequatur voluptatem.
                            </p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Fade> */}
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
