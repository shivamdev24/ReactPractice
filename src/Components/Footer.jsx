import { Link } from "react-router-dom";

import Logo from "../assets/img/logo-dark.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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

function Footer() {
  return (
    <div className="h-full bg-cream border-graypowder border-t">
      <div className="flex  flex-col gap-5 sm:flex-row py-12 px-5 text-black justify-evenly">
        <div className="text-black lg:w-[50%] flex flex-col gap-4">
          <div className="font-3xl">
            <img src={Logo} className="w-80" alt="" />
          </div>
          <div>
            <p className="font-medium text-sm md:text-md text-justify text-graylight">
              At Shelves Tech, we understand that the heart of exceptional
              healthcare lies in the quality and reliability of the equipment
              used. Founded over a decade ago, our company has grown into a
              leading supplier of capital medical equipment, dedicated to
              empowering healthcare providers with the tools they need to
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
              <a className="hover:text-orange" href="mailto:mukesh.panchal@shelvestech.com">
                <EmailIcon /> mukesh.panchal@shelvestech.com
              </a>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              {socialLink.map((props, index) => (
                <Link
                  className="hover:text-orange duration-300"
                  key={index}
                  to={props.path}
                >
                  {props.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="md:text-xl text-md text-orange font-bold">
            Quicl Links
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
            <Link
              className=" hover:text-orange duration-300"
              to="/terms-condition"
            >
              Terms & Conditions
            </Link>
            <Link
              className=" hover:text-orange duration-300"
              to="/privacy-policy"
            >
              Privacy Policy
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

            <Link
              className=" hover:text-orange duration-300"
              to="/medical-consumable"
            >
              Medical Consumables
            </Link>
            <Link
              className=" hover:text-orange duration-300"
              to="/Lab-solutions"
            >
              Laboratory Solutions

            </Link>
          </div>
        </div>
      </div>
      <div className="bg-orange flex flex-col md:flex-row justify-evenly">
        <div className="bg-orange flex flex-col sm:flex-row justify-center text-center py-2 gap-1 text-xs sm:text-sm text-white">
          <span>© 2019 All Right Reserved.</span>
          <span>Created by Intellio healthcare solutions</span>
        </div>
        <div className="bg-orange flex items-center sm:flex-row justify-center text-center py-2 gap-1 text-xs sm:text-sm text-white">
          <Link>Terms & Condition</Link>
          <span>|</span>
          <Link>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
