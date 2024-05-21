import { Link } from "react-router-dom";

import Logo from '../assets/img/logo.png'

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";


const socialLink = [
 {
  path: "/",
  icon: <FacebookIcon/>,
 },
 {
  path: "/",
  icon: <XIcon/>,
 },
 {
  path: "/",
  icon: <InstagramIcon/>,
 },
 {
  path: "/",
  icon: <LinkedInIcon/>,
 },
];


function Footer() {
  return (
   <div className="h-full bg-graylight ">
    <div className="flex  flex-col gap-5 sm:flex-row py-12 px-5 text-white justify-evenly">
     <div className="text-white lg:w-[50%] flex flex-col gap-4">
      <div className="font-3xl">
       <img src={Logo} className="w-56" alt="" />
      </div>
      <div>
       <p className="font-semibold text-sm md:text-lg text-justify text-graypowder">
        Intellio is a healthcare solutions firm focused on providing global
        support that facilitates the governments and organizations in providing
        the best quality health at the most affordable cost. At Intellio, we
        bring together a global team that harbors a passion for health access
        and innovation.Read More..
       </p>
      </div>
      <div>
       <div className="flex gap-2">
        {socialLink.map((props, index) => (
         <Link key={index} to={props.path}>
          {props.icon}
         </Link>
        ))}
       </div>
      </div>
     </div>
     <div className="flex flex-col gap-6">
      <h1 className="md:text-2xl text-lg text-orange font-bold">Quicl Links</h1>
      <div className="flex flex-col text-sm md:text-lg gap-3">
       <Link className=" hover:text-orange duration-300" to="/">
        Home
       </Link>
       <Link className=" hover:text-orange duration-300" to="/">
        About Us
       </Link>
       <Link className=" hover:text-orange duration-300" to="/">
        Service
       </Link>
       <Link className=" hover:text-orange duration-300" to="/">
        Contact US
       </Link>
      </div>
     </div>
     <div className="flex flex-col gap-6">
      <h1 className="md:text-2xl text-lg text-orange font-bold">
       Our Product Portfolio
      </h1>
      <div className="flex text-sm md:text-lg flex-col gap-3">
       <Link className=" hover:text-orange duration-300" to="/">
        Medical & Surgical Equipment
       </Link>
       <Link className=" hover:text-orange duration-300" to="/">
        Medical Consumables
       </Link>
       <Link className=" hover:text-orange duration-300" to="/">
        Laboratory Solutions
       </Link>
      </div>
     </div>
    </div>
    <div className="bg-orange flex flex-col sm:flex-row justify-center text-center py-2 gap-1 text-xs sm:text-sm text-white">
     <span>© 2019 All Right Reserved.</span>
     <span>Created by Intellio healthcare solutions</span>
    </div>
   </div>
  );
}

export default Footer