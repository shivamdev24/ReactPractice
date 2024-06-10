// import AboutImg from "../assets/img/AboutUs/AboutUs.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import { Fade } from "react-awesome-reveal";


import { Field, Label } from "@headlessui/react";


import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


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

export default function Contact() {




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const company = formData.get('company');
    const email = formData.get('email');
    const phoneNumber = formData.get('phone_number');
    const message = formData.get('message');

    if (!firstName || !lastName || !company || !email || !phoneNumber || !message) {
      toast.error('Please Filled All Field!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "dRFg3INipQfjEHd-j",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Submit Successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Server Down! Please Contact Us Direct.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
      );
  };





  useEffect(() => {
    console.log("Component re-rendered");
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[60rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <Fade direction="up" triggerOnce="true">
        <div className="mx-auto md:h-[20rem] pt-6 lg:pt-20 max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Contact Us
          </h2>
          <p className="text-4xl lg:text-6xl font-bold mt-10 text-gray-600">
            Let's talk about your requirement.
          </p>
        </div>
      </Fade>
      <div className="flex flex-col md:flex-row gap-10 justify-center mt-16 w-full sm:mt-20">
        <div className="flex flex-col gap-3 w-96">
          <Fade direction="up" triggerOnce="true">
            <span>
              {" "}
              <PhoneIcon className="text-orange" /> +919899730901, +918920474021
            </span>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <a
              href="mailto:mukesh.panchal@shelvestech.com"
              target="_blank"
              className="hover:text-orange duration-500"
            >
              {" "}
              <EmailIcon className="text-orange" />{" "}
              mukesh.panchal@shelvestech.com
            </a>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <span>
              {" "}
              <BusinessIcon className="text-orange" /> Shelves Tech Pvt. Ltd
              Office No -110-111, 1st Floor Gupta Arcade, Plot no-2 Inder
              Enclave, LSC Rohtak Road Paschim
            </span>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <a href="www.shelvestech.com" className="hover:text-orange">
              <LanguageIcon className="text-orange" /> www.shelvestech.com
            </a>
          </Fade>
          <div className="flex gap-2 mt-3">
            <Fade direction="up" triggerOnce="true">
              {socialLink.map((props, index) => (
                <a
                  className=" text-graydark hover:text-orange  flex  rounded-lg duration-500"
                  key={index}
                  href={props.path}
                >
                  {props.icon}
                </a>
              ))}
            </Fade>
          </div>
          <Fade direction="up" triggerOnce="true">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center ">
                <hr className="w-28 h-[1px] bg-black" />
                <span>Contact Us On</span>
                <hr className="w-28 h-[1px] bg-black" />
              </div>
              <div className="w-full flex gap-4 py-5">
                <a
                  href="mailto:mukesh.panchal@shelvestech.com"
                  className="bg-red w-46 text-center text-white py-2.5 px-3.5 rounded hover:bg-hoverRed duration-500"
                >
                  {" "}
                  Connect on Mail.{" "}
                </a>

                <a
                  href="https://wa.me/+919899730901"
                  target="_blank"
                  className="bg-green w-42 text-center text-white py-2.5 px-3.5 rounded hover:bg-hoverGreen duration-500"
                >
                  {" "}
                  Connect on Whatsapp{" "}
                </a>
              </div>
            </div>
          </Fade>
        </div>

        <form ref={form} onSubmit={sendEmail} className="max-w-6xl ">
          <div className="py-4">
            <h1 className="text-3xl font-bold">Get In Touch With Us.</h1>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <Fade direction="up" triggerOnce="true">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first_name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded border border-orange px-3.5 py-2 text-gray-900 shadow-sm   sm:text-sm sm:leading-6"
                    placeholder="First Name"
                  />
                </div>
              </Fade>
            </div>
            <div>
              <Fade direction="up" triggerOnce="true">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last_name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded border border-orange px-3.5 py-2 text-gray-900 shadow-sm   sm:text-sm sm:leading-6"
                    placeholder="Last Name"
                  />
                </div>
              </Fade>
            </div>
            <div className="sm:col-span-2">
              <Fade direction="up" triggerOnce="true">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded border border-orange px-3.5 py-2 text-gray-900 shadow-sm   sm:text-sm sm:leading-6"
                    placeholder="Your Company"
                  />
                </div>
              </Fade>
            </div>
            <div className="sm:col-span-2">
              <Fade direction="up" triggerOnce="true">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded border border-orange px-3.5 py-2 text-gray-900 shadow-sm   sm:text-sm sm:leading-6"
                    placeholder="Email"
                  />
                </div>
              </Fade>
            </div>
            <div className="sm:col-span-2">
              <Fade direction="up" triggerOnce="true">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded border border-orange px-3.5 py-2 text-gray-900 shadow-sm   sm:text-sm sm:leading-6"
                    placeholder="Phone Number"
                  />
                </div>
              </Fade>
            </div>
            <div className="sm:col-span-2">
              <Fade direction="up" triggerOnce="true">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded border border-orange px-3.5 py-2 text-gray-900 shadow-sm   sm:text-sm sm:leading-6"
                    placeholder="Message"
                  />
                </div>
                <Field as="div" className="flex gap-x-4 sm:col-span-2">
                  <Label className="text-sm leading-6 text-gray-600">
                    By Submitting this Form, you agree to our{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      privacy&nbsp;policy
                    </a>
                    .
                  </Label>
                </Field>
              </Fade>
            </div>
          </div>
          <div className="mt-10">
            <Fade direction="up" triggerOnce="true">
              <button
                type="submit"
                className="block w-full bg-orange rounded px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-orangeshade"
              >
                Send
              </button>
            </Fade>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
