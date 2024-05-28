// import AboutImg from "../assets/img/AboutUs/AboutUs.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    console.log("Component re-rendered");
    window.scrollTo(0, 0);
  }, []);
  return (
    //  <div>
    //    {/* <div className="relative">
    //      <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
    //      <img
    //        src={AboutImg}
    //        className="h-[29rem] object-top w-full object-cover  "
    //        alt=""
    //      />
    //      <div className="absolute top-48 left-[30px] md:left-[11rem]">
    //        <div className="flex gap-4 items-center font-bold text-white">
    //          <span>Home</span>
    //          <hr className="h-4 w-[2px] bg-white" />
    //          <span to="/medical-consumables">Contact Us</span>
    //        </div>
    //        <div className="mt-4">
    //          <p className="text-6xl font-bold text-white">CONTACT</p>
    //        </div>
    //      </div>
    //    </div> */}

    //    <div className=" h-[80rem] md:h-[50rem] w-full relative">
    //      <div className=" z-30 absolute  top-64 w-full md:left-48 left-1.5 border px-5 border-orange ">
    //        <div className="flex gap-10 flex-col-reverse md:flex-row  justify-between px-10 py-10 bg-white">
    //          <div className="mt-16 flex flex-col text-md">
    //            <div className="flex flex-col gap-3 w-72">
    //              <span>
    //                {" "}
    //                <PhoneIcon className="text-orange" /> +919899730901,
    //                +918920474021
    //              </span>
    //              <span>
    //                {" "}
    //                <EmailIcon className="text-orange" />{" "}
    //                mukesh.panchal@shelvestech.com
    //              </span>

    //              <span>
    //                {" "}
    //                <BusinessIcon className="text-orange" /> Shelves Tech Pvt. Ltd
    //                Office No -110-111, 1st Floor Gupta Arcade, Plot no-2 Inder
    //                Enclave, LSC Rohtak Road Paschim
    //              </span>
    //              <a href="www.shelvestech.com" className="hover:text-orange">
    //                <LanguageIcon className="text-orange" /> www.shelvestech.com
    //              </a>
    //              <div className="flex gap-2 mt-3">
    //                {socialLink.map((props, index) => (
    //                  <Link
    //                    className=" text-graydark hover:text-orange  flex  rounded-lg duration-500"
    //                    key={index}
    //                    to={props.path}
    //                  >
    //                    {props.icon}
    //                  </Link>
    //                ))}
    //              </div>
    //            </div>
    //          </div>

    //          {/* <div>
    //            <div>
    //              <form className="flex flex-col">
    //                <h1 className="text-start font-bold text-daeknavyblue md:text-lg text-sm">
    //                  Get In Touch
    //                </h1>
    //                <h1 className="text-start font-bold text-orange md:text-4xl text-lg">
    //                  Contact With Us
    //                </h1>
    //                <div className="py-6 flex flex-col gap-4">
    //                  <div className="flex flex-col md:flex-row gap-4">
    //                    <input
    //                      type="text"
    //                      className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
    //                      placeholder="Enter Your Name"
    //                    />
    //                    <input
    //                      type="text"
    //                      className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
    //                      placeholder="Your Email"
    //                    />
    //                  </div>
    //                  <div className="flex flex-col md:flex-row gap-4">
    //                    <input
    //                      type="text"
    //                      className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
    //                      placeholder="Subject"
    //                    />
    //                    <input
    //                      type="text"
    //                      className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 w-[300px]"
    //                      placeholder="Phone Number"
    //                    />
    //                  </div>

    //                  <textarea
    //                    name=""
    //                    id=""
    //                    className="border border-white focus:border-orange focus:bg-white bg-[#f4f4f4] rounded outline-none px-6 py-3 h-32 md:w-[617px]"
    //                    placeholder="Enter Your Message"

    //                  ></textarea>
    //                  <div className="flex md:justify-end">
    //                    <button className="border-none font-bold md:w-32 w-full py-3 rounded bg-orange hover:bg-darknavyblue text-white duration-500 ">
    //                      Submit
    //                    </button>
    //                  </div>
    //                </div>
    //              </form>
    //            </div>
    //          </div> */}
    //        </div>
    //      </div>
    //      {/* <div className="absolute top-0 z-[-10] right-0 md:h-[50rem] md:w-[60rem] h-[80rem] w-[15rem] bg-orange"></div> */}

    //      <div className="absolute bg-white p-6 rounded border border-orange font-bold top-32 left-48 text-xl">
    //        <div className="w-[70%] text-center mx-auto ">
    //          <p>
    //            Learn more about how our medical equipment solutions can benefit
    //            your healthcare facility. Contact us today!
    //          </p>
    //        </div>
    //      </div>
    //    </div>
    //  </div>

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
      <div className="mx-auto h-[20rem] pt-20 max-w-xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Contact Us
        </h2>
        <p className=" text-6xl font-bold mt-10 text-gray-600">
          Let's talk about your requirement.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center mt-16 w-full sm:mt-20">
        <div className="flex flex-col gap-3 w-96">
          <span>
            {" "}
            <PhoneIcon className="text-orange" /> +919899730901, +918920474021
          </span>
          <a
            href="mailto:mukesh.panchal@shelvestech.com"
            target="_blank"
            className="hover:text-orange duration-500"
          >
            {" "}
            <EmailIcon className="text-orange" /> mukesh.panchal@shelvestech.com
          </a>

          <span>
            {" "}
            <BusinessIcon className="text-orange" /> Shelves Tech Pvt. Ltd
            Office No -110-111, 1st Floor Gupta Arcade, Plot no-2 Inder Enclave,
            LSC Rohtak Road Paschim
          </span>
          <a href="www.shelvestech.com" className="hover:text-orange">
            <LanguageIcon className="text-orange" /> www.shelvestech.com
          </a>
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
          <div className="w-full py-5">
            <div>
              <a href="mailto:mukesh.panchal@shelvestech.com" className="bg-graydark  text-center text-white py-2.5 px-3.5 rounded hover:bg-orange duration-500"> Send Me Direct Mail Here. </a>
            </div>
          </div>
        </div>

        <form action="#" method="POST" className="max-w-6xl ">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded border border-orange px-3.5 py-2 text-gray-900 shadow-sm   sm:text-sm sm:leading-6"
                  defaultValue={`First Name`}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded border border-orange px-3.5 py-2 text-gray-900 shadow-sm   sm:text-sm sm:leading-6"
                  defaultValue={`Last Name`}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
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
                  defaultValue={`Your Organization`}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
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
                  defaultValue={`your@mail.com`}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded border border-orange px-3.5 py-2 text-gray-900 shadow-sm   sm:text-sm sm:leading-6"
                  defaultValue={`+91 0000000000`}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
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
                  defaultValue={`I hope this message finds you well I am reaching out to inquire about your services and how they might benefit my needs. I would appreciate any information or assistance you can provide.

Thank you for your time and consideration. I look forward to your response.

Best regards,
Your Name`}
                />
              </div>
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
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full bg-orange rounded px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-orangeshade"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
