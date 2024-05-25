/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import OT from "../assets/img/ot.jpg";
import MC from "../assets/img/mc.jpg";
import Lab from "../assets/img/lab.jpg";
import SlideShow from "../Components/components/SlideShow/SlideShow";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";

const sectTwo = [
  {
    title: "Service Offering",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
    img: "",
    to: "/",
  },
  {
    title: "Product PortFolio",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
        />
      </svg>
    ),
    img: "",
    to: "/",
  },
];

const sectionOne = [
  {
    title: "Management Consulting",
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
    title: "Insight and Analytics",
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
    title: "Digital Health",
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
    title: "Care System Redesign",
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
const sectionTwo = [
  {
    title: "Goverment AID",
    img: (
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
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
        />
      </svg>
    ),
  },
  {
    title: "Capital Investment",
    img: (
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
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
        />
      </svg>
    ),
  },
  {
    title: "Global Joint Ventures",
    img: (
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
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
  {
    title: "Business Care Development",
    img: (
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
  },
];

// const sectionThree = [
//     {
//         title: "Goverment AID",
//         img: (
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-20 h-20"
//             >
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                 />
//             </svg>
//         ),
//     },
//     {
//         title: "Capital Investment",

//         img: (
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-20 h-20"
//             >
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
//                 />
//             </svg>
//         ),
//     },
//     {
//         title: "Global Joint Ventures",
//         img: (
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-20 h-20"
//             >
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
//                 />
//             </svg>
//         ),
//     },
//     {
//         title: "Business Care Development",
//         img: (
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-20 h-20"
//             >
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
//                 />
//             </svg>
//         ),
//     },
// ];
const sectionFour = [
  {
    title: "Sergical & Medical Managment",

    img: (
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
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    title: "HealthCare IT",

    img: (
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
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: "Dialysis",

    img: (
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
  },
  {
    title: "Diagnostic Labs",
    img: (
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
  },
];
const sectionFive = [
  {
    title: "Pharmacy",
    img: (
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
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    title: "Clinical Materials",
    img: (
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
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "Sipport Service",
    img: (
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
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
  {
    title: "Capital Equipment",
    img: (
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
          d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9"
        />
      </svg>
    ),
  },
];

const productPortfolio = [
  {
    title: "Medical & Surgical Equipment",
    img: OT,
    path: "/mse",
  },
  {
    title: "Medical Consumables",
    img: MC,
    path: "/medical-consumables",
  },
  {
    title: "Laboratory Solutions",
    img: Lab,
    path: "/Lab-Solutions",
  },
];

function Home() {

  // useEffect(() => {
  //   console.log("Component re-rendered");
  //   window.scrollTo(0, 0);
  // }, []);


 return (
  <>
   <div className="">
    <SlideShow />
   </div>
   <div>
    <div className="relative ">
     <div className="flex flex-col-reverse md:flex-row items-center justify-between ">
      <div className="flex flex-col z-20 gap-1">
       {sectTwo.map((props, index) => (
        <div key={index} className="flex flex-col gap-1 relative">
         <div className="bg-orange md:w-[27rem] w-[25rem] rounded md:rounded-none h-64 overflow-hidden transition duration-500 hover:bg-darknavyblue  text-white">
          <Link
           // eslint-disable-next-line react/prop-types
           to={props.to}
           className="  flex flex-col items-center mt-16 gap-3  text-2xl font-bold 0"
          >
           <span> {props.icon} </span>
           <span>{props.title}</span>
          </Link>
         </div>
        </div>
       ))}
      </div>

      <div className="flex justify-between  px-5 lg:justify-around">
       <div className="lg:w-[70%] lg:mt-[-80px] leading-8">
        <span className="font-bold text-md md:text-lg text-black">Our Vision</span>
        <h1 className="text-lg md:text-2xl font-bold text-[#f44705]">
         INTELLIGENCE DRIVEN HEALTHCARE
        </h1>
        <p className="mt-3 text-sm md:text-lg text-justify mb-4 text-graylight">
         Intellio is a healthcare solutions firm focused on providing global
         support that facilitates the governments and organizations in providing
         the best quality health at the most affordable cost. At Intellio, we
         bring together a global team that harbors a passion for health access
         and innovation. The experience and outreach of our teams is the core
         success driver of our underlying philosophy of providing the best
         services at the most affordable costs. We have identified and developed
         the relationships with our partners that we leverage for our clients to
         serve their needs in a timely and consistent manner....{" "}
         <Link
          to="/"
          className="text-[#f44705] duration-500 hover:text-[#00085c] font-bold"
         >
          Read More
         </Link>
        </p>
       </div>
      </div>
     </div>
     <div className=" lg:relative top-[-90px] ">
      <div className="flex flex-col  imgbg ">
       <div className="flex flex-col w-full   py-10  justify-center items-center px-5">
        <h2 className="lg:text-4xl text-2xl text-center  font-bold text-orange">
         OUR SERVICE
        </h2>
        <div className="flex mt-20 flex-col lg:flex-row px-5 gap-4">
         {sectionOne.map((props, index) => (
          <Link to="/" key={index}>
           <div className=" flex flex-col items-center w-[20rem] lg:w-80 py-6 h-auto bg-white  rounded text-darknavyblue hover:scale-105 duration-500 hover:text-orange hover:shadow-md hover:bg-white  border">
            <span className=" border-2 p-2 rounded-md"> {props.Icon} </span>
            <span className="text-sm pt-10 font-meduim   text-center">
             {" "}
             {props.title}{" "}
            </span>
           </div>
          </Link>
         ))}
        </div>
       </div>
       <div className="flex flex-col  justify-center w-full  py-20 px-5  items-center">
        <h2 className="lg:text-4xl text-2xl text-center  font-bold text-orange">
         MANAGEMENT CONSULTING
        </h2>
        <div className="flex mt-20 flex-col lg:flex-row gap-4">
         {sectionTwo.map((props, index) => (
          <Link to="/" key={index}>
           <div className=" flex flex-col items-center w-[20rem] lg:w-80 py-6 h-auto bg-white  rounded text-darknavyblue hover:scale-105 duration-500 hover:text-orange hover:shadow-md hover:bg-white  border">
            <span className=" border-2 p-2 rounded-md"> {props.img} </span>
            <span className="text-sm pt-10 font-bold   text-center">
             {" "}
             {props.title}{" "}
            </span>
           </div>
          </Link>
         ))}
        </div>
       </div>
      
       <div className="flex flex-col py-20  justify-center px-5 items-center">
        <h2 className="lg:text-4xl text-2xl text-center  font-bold text-orange">
         PROGRAM MANAGEMENT
        </h2>
        <div className="flex mt-20 flex-col lg:flex-row gap-8">
         {sectionFour.map((props, index) => (
          <Link to="/" key={index}>
           <div className=" flex flex-col items-center w-[20rem] lg:w-80 py-6 h-auto bg-white  rounded text-darknavyblue hover:scale-105 duration-500 hover:text-orange hover:shadow-md hover:bg-white  border">
            <span className=" border-2 p-2 rounded-md"> {props.img} </span>
            <span className="text-sm pt-10 font-bold   text-center">
             {" "}
             {props.title}{" "}
            </span>
           </div>
          </Link>
         ))}
        </div>
       </div>
       <div className="flex flex-col  py-20  justify-center px-5 items-center">
        <h2 className="lg:text-4xl text-2xl text-center  font-bold text-orange">
         PROCUREMENT AND SUPPLY CHAIN
        </h2>
        <div className="flex mt-20 flex-col lg:flex-row gap-8">
         {sectionFive.map((props, index) => (
          <Link to="/" key={index}>
           <div className=" flex flex-col items-center w-[20rem] lg:w-80 py-6 h-auto bg-white  rounded text-black hover:scale-105 duration-500 hover:text-orange hover:shadow-md hover:bg-white  border">
            <span className=" border-2 p-2 rounded-md"> {props.img} </span>
            <span className="text-sm pt-10 font-bold   text-center">
             {" "}
             {props.title}{" "}
            </span>
           </div>
          </Link>
         ))}
        </div>
       </div>

       <div className="bg-white mt-10 flex flex-col items-center py-10 px-5 z-10">
        <h2 className="lg:text-4xl text-xl text-center text-orange py-5">
         <span className="font-bold">OUR</span> PRODUCT PORTFOLIO
        </h2>
        <div className="flex flex-col sm:flex-row  gap-10 justify-center">
         {productPortfolio.map((props, index) => (
          <div key={index} className="flex flex-col items-start gap-4">
           <Link to={props.path}>
            <img src={props.img} alt="" className="w-96 rounded" />
           </Link>
           <Link
            className="text-md font-semibold hover:text-orange duration-500"
            to={props.path}
           >
            {props.title}
           </Link>

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
