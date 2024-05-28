import { Link } from "react-router-dom";
import AboutImg from "../assets/img/AboutUs/AboutUs.jpg";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";



export default function AboutUs() {
  useEffect(() => {
    console.log("Component re-rendered");
    window.scrollTo(0, 0);
  }, []);

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
         <div className="md:w-[80%]  w-full flex flex-col gap-4 md:gap-8">
           <h1 className="text-orange md:text-4xl text-xl  font-bold">
             Shelves Tech
           </h1>
           <div className="flex flex-col gap-1">
             <h2 className="md:text-lg text-sm font-bold text-darknavyblue">
               At Shelves Tech, we understand that the heart of exceptional
               healthcare lies in the quality and reliability of the equipment
               used. Founded over a decade ago, our company has grown into a
               leading supplier of capital medical equipment, dedicated to
               empowering healthcare providers with the tools they need to
               deliver outstanding patient care.
             </h2>

             <p className="text-sm md:text-md  text-justify">
               Intellio is a healthcare solutions firm focused on providing
               global support that facilitates the governments and organizations
               in providing the best quality health at the most affordable cost.
               At Intellio, we bring together a global team that harbors a
               passion for health access and innovation. The experience and
               outreach of our teams is the core success driver of our
               underlying philosophy of providing the best services at the most
               affordable costs. We have identified and developed the
               relationships with our partners that we leverage for our clients
               to serve their needs in a timely and consistent manner.
             </p>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}
