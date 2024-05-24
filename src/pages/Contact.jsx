import AboutImg from "../assets/img/AboutUs/AboutUs.jpg";
import { Link } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";


const socialLink = [
 {
  path: "/",
  icon: <FacebookIcon />,
 },
 {
  path: "/",
  icon: <XIcon />,
 },
 {
  path: "/",
  icon: <InstagramIcon />,
 },
 {
  path: "/",
  icon: <LinkedInIcon />,
 },
];








export default function Contact() {
 return (
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
           <span to="/medical-consumables">Contact Us</span>
         </div>
         <div className="mt-4">
           <span className="text-6xl font-bold text-white">CONTACT</span>
         </div>
       </div>
     </div>

     <div className="my-10 h-[80rem] md:h-[50rem] w-full relative">
       <div className=" z-30 absolute  top-28 md:left-48 left-1.5 border px-5 border-orange ">
         <div className="flex gap-10 flex-col-reverse md:flex-row  justify-between px-10 py-10 bg-white">
           <div className="mt-16 flex flex-col text-md">
             <div className="flex flex-col gap-3 w-72">
               <span>
                 {" "}
                 <PhoneIcon  className="text-orange"/> +91 9910998246, +91 11-42283156
               </span>
               <span> <EmailIcon className="text-orange"/> info@intelliohealthcare.com</span>
               <span> <EmailIcon className="text-orange"/> info.intelliohealthcare@gmail.com</span>
               <span>
                 {" "}
                <BusinessIcon className="text-orange"/> B-180, DDA Sheds, Okhla Industrial Area, Phase 1, New Delhi,
                 India - 110020
               </span>
               <span><LanguageIcon className="text-orange"/> www.intelliohealthcare.com</span>
               <div className="flex gap-2 mt-3">
                 {socialLink.map((props, index) => (
                   <Link
                     className=" text-graydark hover:text-orange  flex  rounded-lg duration-500"
                     key={index}
                     to={props.path}
                   >
                     {props.icon}
                   </Link>
                 ))}
               </div>
             </div>
           </div>
           <div>
             <div>
               <form className="flex flex-col">
                 <h1 className="text-start font-bold text-daeknavyblue md:text-lg text-sm">
                   Get In Touch
                 </h1>
                 <h1 className="text-start font-bold text-orange md:text-4xl text-lg">
                   Contact With Us
                 </h1>
                 <div className="py-6 flex flex-col gap-4">
                   <div className="flex flex-col md:flex-row gap-4">
                     <input
                       type="text"
                       className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
                       placeholder="Enter Your Name"
                     />
                     <input
                       type="text"
                       className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
                       placeholder="Your Email"
                     />
                   </div>
                   <div className="flex flex-col md:flex-row gap-4">
                     <input
                       type="text"
                       className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
                       placeholder="Subject"
                     />
                     <input
                       type="text"
                       className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
                       placeholder="Phone Number"
                     />
                   </div>
                   {/* <div className="flex flex-col md:flex-row gap-4">
                     <input
                       type="text"
                       className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
                       placeholder="Enter Info"
                     />
                     <input
                       type="text"
                       className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
                       placeholder="Enter Info"
                     />
                   </div> */}
                   <textarea
                     name=""
                     id=""
                     className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 h-32 md:w-[617px]"
                     placeholder="Enter Your Message"
                     
                   ></textarea>
                   <div className="flex md:justify-end">
                     <button className="border-none font-bold md:w-32 w-full py-3 rounded bg-orange hover:bg-darknavyblue text-white duration-500 ">
                       Submit
                     </button>
                   </div>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
       <div className="absolute top-0 z-[-10] right-0 md:h-[50rem] md:w-[60rem] h-[80rem] w-[15rem] bg-orange"></div>
     </div>
   </div>
 );
}
