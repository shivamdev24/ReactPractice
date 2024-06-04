
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






 
const testimonials = [
  {
    text: "We recently installed a PSA oxygen plant from Shelves Tech to meet the growing demand for medical oxygen in our hospital. The plant has been a game-changer for us, providing a reliable and continuous supply of high-quality oxygen to our patients. The installation process was smooth, and the team at Shelves Tech provided excellent support and service throughout. We are extremely satisfied with the performance of the PSA oxygen plant and would highly recommend it to other healthcare facilities in India. The plant not only reduced our ongoing cost  also help us to get rid of storing and managing cylinders",
    name: "Dr. Aslam, Director",
    title: "Gaurav hospital Bilaspur Chhattisgarh",
  },
  {
    text: "Our diagnostic center and hospital recently implemented software from Shelves Tech, and it has transformed the way we manage patient records and streamline our operations. The software is user-friendly, comprehensive, and tailored to meet the specific needs of healthcare providers in Myanmar. The seamless integration of electronic health records, appointment scheduling, billing, and reporting functionalities has significantly improved our efficiency and patient care delivery. The customer support team at Shelves Tech has been exceptional, providing timely assistance and training to ensure a smooth transition to the new software. We appreciate their dedication to customer satisfaction and ongoing support. I highly recommend the hospital software from Shelves Tech to other healthcare providers in Myanmar looking to enhance their operational efficiency and deliver quality care to patients.",
    name: "Dr. Aung, Chief Medical Officer",
    title: "Nini Hospitals and diagnostic center, Yangon, Myanmar",
  },
  {
    text: "We recently purchased and installed a refurbished CT machine from Shelvestech at our New Hospital in Maharashtra, India. The quality of the machine exceeded our expectations, providing us with high-resolution imaging capabilities at a fraction of the cost of a new machine. The installation process was seamless, and the technical team at Shelves Tech ensured that the machine was up and running in no time. Since the installation, the refurbished CT machine has been instrumental in improving our diagnostic capabilities and patient care. The images produced are clear and accurate, allowing our radiologists to make precise diagnoses efficiently. The machine has been a valuable addition to our facility, enabling us to offer advanced diagnostic services to our patients in Maharashtra. We are extremely satisfied with the performance of the refurbished CT machine and the service provided by Shelves Tech. I would highly recommend their refurbished medical equipment to other healthcare facilities looking to upgrade their imaging capabilities while staying within budget",
    name: "Dr. Patel, Radiology Department Head",
    title: "Sai Mauli Hospital, Maharashtra, India",
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

              <div className=" relative h-auto  bg-white border-t border-graypowder py-10 ">
                <h1 className="text-4xl text-center font-bold text-orange">
                  Testimonials
                </h1>
                <div className="flex flex-wrap  justify-center gap-4 py-5">
                  {testimonials.map((props, indx) => (
                    <div
                      className="w-[24rem] h-auto flex flex-col justify-between bg-cream p-4 rounded shadow-lg"
                      key={indx}
                    >
                      <p className="text-sm italic  text-grapowderlight  text-justify">
                        <q>{" "}
                        {props.text}{" "}
                        </q>
                      </p>
                      <div className="py-4">
                        <p className="text-sm font-bold text-orange">
                          {props.name}
                        </p>
                        <p className="text-sm italic text-graypowder">
                          {props.title}
                        </p>
                      </div>
                    </div>
                  ))}
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
