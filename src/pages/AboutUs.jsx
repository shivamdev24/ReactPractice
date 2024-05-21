import { Link } from "react-router-dom";
import AboutImg from "../assets/img/AboutUs/AboutUs.jpg";

const AboutUsCards = [
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-24 h-24"
   >
    <path
     strokeLinecap="round"
     strokeLinejoin="round"
     d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
    />
   </svg>
  ),
  title: "STRATEGIC SUPPORT",
  description:
   "Our services are designed to be aligned with the strategic needs of the clients. ",
  to: "/",
 },
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-24 h-24"
   >
    <path
     strokeLinecap="round"
     strokeLinejoin="round"
     d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
    />
   </svg>
  ),
  title: "On-demand Services",
  description:
   "Our team supports the bandwidth to be available for our client at the time when needed.",
  to: "/",
 },
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-24 h-24"
   >
    <path
     strokeLinecap="round"
     strokeLinejoin="round"
     d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
    />
   </svg>
  ),
  title: "Global Sourcing",
  description:
   "We are able to supply the best services and products because we look for the solutions globally.",
  to: "/",
 },
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-24 h-24"
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
  title: "Change Management",
  description:
   "For every project, we help the organization to undertake the change smoothly.",
  to: "/",
 },
 {
  icon: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-24 h-24"
   >
    <path
     strokeLinecap="round"
     strokeLinejoin="round"
     d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
    />
   </svg>
  ),
  title: "Responsible Advocacy",
  description:
   "We are ethical and responsible while advocating for the better health of a nation. ",
  to: "/",
 },
];

export default function AboutUs() {
 return (
  <div>
   <div>
    <div className="relative">
     <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
     <img
      src={AboutImg}
      className="h-[29rem] object-top w-full object-cover  "
      alt=""
     />
     <div className="absolute top-48 left-[30px] md:left-[11rem]">
      <div className="flex gap-4 items-center font-bold text-white">
       <span>Home</span>
       <hr className="h-4 w-[2px] bg-white" />
       <span>About Us</span>
      </div>
      <div className="mt-4">
       <span className="text-6xl font-bold text-white">ABOUT US</span>
      </div>
     </div>
    </div>


    
    <div className="py-8 flex w-full  px-5 justify-around">
     <div className="md:w-[80%] w-full flex flex-col gap-4 md:gap-8">
      <h1 className="text-orange md:text-3xl text-xl  font-bold">
       INTELLIGENCE DRIVEN HEALTHCARE
      </h1>
      <div className="flex flex-col gap-1">
       <h2 className="md:text-md text-sm font-bold text-darknavyblue">
        We strive to enable nations in achieving Universal Healthcare Goals
       </h2>
       <p className="text-md text-justify">
        Intellio is a healthcare solutions firm focused on providing global
        support that facilitates the governments and organizations in providing
        the best quality health at the most affordable cost. At Intellio, we
        bring together a global team that harbors a passion for health access
        and innovation. The experience and outreach of our teams is the core
        success driver of our underlying philosophy of providing the best
        services at the most affordable costs. We have identified and developed
        the relationships with our partners that we leverage for our clients to
        serve their needs in a timely and consistent manner.
       </p>
      </div>
     </div>
    </div>
    <div className="imgbg flex  w-full  py-10 justify-around">
     <div className="md:w-[80%] w-full flex flex-col items-center">
      <h1 className="text-orange text-center text-4xl font-bold">
       PILLARS OF OUR PHILOSOPHY
      </h1>
      <div className="py-10 flex gap-6 flex-wrap items-center px-5 sm:px-0 justify-center">
       {AboutUsCards.map((props, index) => (
        <Link key={index} to={props.to}>
         <div className="w-96 flex flex-col items-center rounded hover:shadow-lg hover:scale-105 duration-500 gap-3 border bg-white text-darknavyblue hover:text-orange p-6  h-64">
          <span className="text-4xl border-4 rounded-md text-yellow-500">
           {props.icon}
          </span>
          <span className="text-lg  font-bold">{props.title}</span>
          <p className="text-sm text-graydark">{props.description}</p>
         </div>
        </Link>
       ))}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
