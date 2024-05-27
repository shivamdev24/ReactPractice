import { Link, Outlet } from "react-router-dom"
import SSSidebar from "./SSSidebar";
import { useEffect } from "react";

import AboutImg from "../../../assets/img/AboutUs/AboutUs.jpg";


export default function SSOutlet() {
  return (
    <div className="">
      <div className="relative">
        <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
        <img
          src={AboutImg}
          className="h-[29rem] object-top w-full object-cover  "
          alt=""
        />
        <div className="absolute top-48 left-[30px] md:left-[11rem]">
          <div className="flex gap-4 items-center font-bold text-white">
            <Link to="/">Home</Link>
            <hr className="h-4 w-[2px] bg-white" />
            <span>Software Solutions</span>
          </div>
          <div className="mt-4">
            <span className="text-6xl font-bold text-white">
              SOFTWARE SOLUTIONS
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-around my-5">
        <div className="w-[80%] flex flex-col lg:flex-row justify-around">
          <div className="">
            <SSSidebar />
          </div>
          <div className=" px-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}