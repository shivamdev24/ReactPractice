import { Link } from "react-router-dom";

import Logo from "../assets/img/logo-dark.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const socialLink = [
  {
    path: "https://www.facebook.com/profile.php?id=61559498143603&mibextid=rS40aB7S9Ucbxw6v",
    icon: <FacebookIcon />,
  },
  
  {
    path: "https://www.linkedin.com/company/infoshelvestech/",
    icon: <LinkedInIcon />,
  },
  {
    path: "https://wa.me/+919899730901",
    icon: <WhatsAppIcon />,
  },
];

function Footer() {
  return (
    <div className="h-full bg-cream border-graypowder border-t">
      <div className="flex  flex-col gap-5 sm:flex-row py-12 px-5 text-black justify-evenly">
        <div className="text-black lg:w-[50%] flex flex-col gap-4">
          <div className="font-3xl">
            <img src={Logo} className="w-80" alt="" />
          </div>
          <div>
            <p className=" text-sm md:text-md text-justify text-graylight">
              Empowering healthcare providers with the tools they need to
              deliver outstanding patient care.
            </p>
          </div>
          <div>
            <div className="py-1">
              <p>
                {" "}
                <LocalPhoneIcon /> +91 9899730901 | +91 8920474021
              </p>
            </div>
            <div className="py-1">
              <a
                className="hover:text-orange"
                href="mailto:mukesh.panchal@shelvestech.com"
              >
                <EmailIcon /> mukesh.panchal@shelvestech.com
              </a>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              {socialLink.map((props, index) => (
                <a
                  className="hover:text-orange duration-300"
                  key={index}
                  href={props.path}
                >
                  {props.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="md:text-xl text-md text-orange font-bold">
            Quick Links
          </h1>
          <div className="flex flex-col text-sm md:text-md gap-3">
            <Link className=" hover:text-orange duration-300" to="/">
              Home
            </Link>
            <Link className=" hover:text-orange duration-300" to="/AboutUS">
              About Us
            </Link>
            <Link className=" hover:text-orange duration-300" to="/Service">
              Service
            </Link>
            <Link className=" hover:text-orange duration-300" to="/contact">
              Contact US
            </Link>
           
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="md:text-xl text-md text-orange font-bold">
            Our Product Portfolio
          </h1>
          <div className="flex text-sm md:text-md flex-col gap-3">
            <Link
              className=" hover:text-orange duration-300"
              to="/PSA-Oxygen-Plant"
            >
              PSA Oxygen Plant
            </Link>
            <Link
              className=" hover:text-orange duration-300"
              to="/Refurbished-CT-MRI-Machines"
            >
              Refurbished-CT MRI Machines
            </Link>

            <Link
              className=" hover:text-orange duration-300"
              to="/Software-Solutions"
            >
              Software Solutions
            </Link>

            <Link
              className=" hover:text-orange duration-300"
              to="/Onco-Radiations-Products"
            >
              Onco Radiations Products
            </Link>

           
          </div>
        </div>
      </div>
      <div className="bg-orange flex flex-col md:flex-row justify-evenly py-4 font-medium">
        <div className="bg-orange flex flex-col sm:flex-row justify-center text-center py-2 gap-1 text-xs sm:text-sm text-white">
          <span>Copyright © 2024 Shelves Tech All Rights Reserved.</span>
          <span></span>
        </div>
        <div className="bg-orange flex items-center sm:flex-row justify-center text-center py-2 gap-1 text-xs sm:text-sm text-white">
          <Link to="/terms-condition">Terms & Condition</Link>
          <span>|</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
