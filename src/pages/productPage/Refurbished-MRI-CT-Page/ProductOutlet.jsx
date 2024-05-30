import { Link, Outlet } from "react-router-dom";
import AboutImg from "../../../assets/Image/MRI.jpg";
import RefurbishedSidebar from "./RefurbishedSidebar";


export default function ProductOutlet() {


  return (
    <div className="">
      <div className="relative">
        <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
        <img
          src={AboutImg}
          className="h-[29rem] object-top w-full object-cover  "
          alt="Product"
        />
        <div className="absolute top-48 left-[30px] md:left-[11rem]">
          <div className="flex gap-4 items-center font-bold text-white">
            <Link to="/">Home</Link>
            <hr className="h-4 w-[2px] bg-white" />
            <span className="text-sm lg:text-base font-bold text-white">
              Refurbished CT and MRI Machines
            </span>
          </div>
          <div className="mt-4">
            <span className="text-3xl lg:text-6xl font-bold text-white">
              REFURBISHED CT AND MRI MACHINES
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-around my-5">
        <div className="w-[80%] flex flex-col lg:flex-row justify-around">
          <div className="">
            <RefurbishedSidebar />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
