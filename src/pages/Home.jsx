/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import OT from "../assets/img/ot.jpg";
import MC from "../assets/img/mc.jpg";
import Lab from "../assets/img/lab.jpg";
import SlideShow from "../Components/components/SlideShow/SlideShow";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

import OurVisionBg from "../assets/img/ourVisionbg.jpg";

const OurMission = [
  {
    title: "Quality",
    text: "Ensuring that every product we offer meets the highest standards of performance and safety.",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    text: "Continually updating our inventory with the latest advancements in medical technology.",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Service",
    text: "Providing exceptional customer support and technical assistance to maximize the value of your investment.",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    title: "Affordability",
    text: "Offering competitive pricing and flexible financing options to make top-tier equipment accessible to all.",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
  },
];
const OurCoreValues = [
  {
    title: "Integrity",
    text: "We conduct our business with honesty, transparency, and respect for our clients and partners.",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Excellence",
    text: "We strive for excellence in everything we do, from product selection to customer service.",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    text: "We believe in building strong, long-lasting relationships with our clients, partners, and the medical community.",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    text: "We are committed to staying at the forefront of medical technology to provide the best solutions for our clients.",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
  },
];
const OurProductsandServices = [
  {
    title: "PSA Oxygen Plants",

    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    link: "/PSA-Oxygen-Plant"
  },
  {
    title: "Refurbished CT and MRI Machines",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
    ),
    link: "/Refurbished-CT-MRI-Machines"
  },
  {
    title: "Hospital Management Software",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    link: "/Software-Solutions"
  },
  {
    title: "Onco Radiation Products",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
    link: "/Onco-Radiations-Products"
  },
];
const WhyChooseUs = [
  {
    title: "Quality Assurance",

    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Cost-Effective Solutions",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Technical Support and Maintenance",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    title: "Customized Solutions",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
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
                src={OurVisionBg}
                className="h-[26rem] w-[100%] opacity-28 object-cover"
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
                  <p className="lg:text-lg mt-5  text-xs md:text-center md:w-[60%]  mx-auto text-justify font-bold text-black">
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
                        <div className="relative flex flex-col items-center w-80 py-6 bg-orange rounded-lg border hover:shadow-md overflow-hidden hover:scale-105 hover:text-white transition duration-500">
                          <div className="flex items-center justify-center w-80 bg-white h-[16rem] flex-col transform hover:opacity-0 absolute top-0 duration-500">
                            <span className="border-2 p-2 rounded-md">
                              {props.Icon}
                            </span>
                            <span className="mt-4 text-sm font-medium text-center">
                              {props.title}
                            </span>
                          </div>
                          <div className="overflow-hidden w-[20rem]  top-0 h-[12rem]   ">
                            <p className="text-lg text-center px-5 py-10 flex flex-col">
                              <span className="text-xl font-bold">
                                {props.title}
                              </span>
                              <span>{props.text}</span>
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
                  <p className="lg:text-lg mt-5  text-sm text-center  mx-auto font-bold text-black">
                    At Shelves Tech, our core values guide every aspect of our
                    business:
                  </p>
                </Fade>
                <div className="flex mt-10 flex-col lg:flex-row px-5 gap-4">
                  {OurCoreValues.map((props, index) => (
                    <Link to="/" key={index}>
                      <Fade direction="up" triggerOnce="true">
                        <div className="relative flex flex-col items-center w-80 py-6 bg-orange rounded-lg border hover:shadow-md overflow-hidden hover:scale-105 hover:text-white transition duration-500">
                          <div className="flex items-center justify-center w-80 bg-white h-[16rem] flex-col transform hover:opacity-0 absolute top-0 duration-500">
                            <span className="border-2 p-2 rounded-md">
                              {props.Icon}
                            </span>
                            <span className="mt-4 text-sm font-medium text-center">
                              {props.title}
                            </span>
                          </div>
                          <div className="overflow-hidden w-[20rem]  top-0 h-[12rem]   ">
                            <p className="text-lg text-center px-5 py-10 flex flex-col">
                              <span className="text-xl font-bold">
                                {props.title}
                              </span>
                              <span>{props.text}</span>
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
                        <div className="relative flex flex-col items-center w-80 py-6 bg-white rounded-lg border hover:shadow-md overflow-hidden hover:scale-105 hover:text-orange transition duration-500">
                          <span className="border-2 p-2 rounded-md">
                            {props.Icon}
                          </span>
                          <span className="mt-4 text-md font-medium text-center">
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
                        <div className="relative flex flex-col items-center w-80 py-6 bg-white rounded-lg border hover:shadow-md overflow-hidden hover:scale-105 hover:text-orange transition duration-500">
                          <span className="border-2 p-2 rounded-md">
                            {props.Icon}
                          </span>
                          <span className="mt-4 text-md font-medium text-center">
                            {props.title}
                          </span>
                        </div>
                      </Fade>
                    </Link>
                  ))}
                </div>
              </div>

              <div className=" relative bg-graypowderlight h-[28rem] ">
                <img
                  src={OurVisionBg}
                  className="h-[28rem] w-[100%] opacity-28 object-cover"
                  alt=""
                />
                <span className="h-[28rem] w-[100%] absolute top-0 bg-black opacity-[.9]"></span>


                <div className="flex absolute top-0 py-6 flex-col lg:flex-row items-center justify-between  p-4 gap-4 w-full ">
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
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque cumque illo voluptas laboriosam dignissimos saepe molestias vero tempora ea possimus.
                            </p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Fade>
                  <Fade direction="down" triggerOnce="true">
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
