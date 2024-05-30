import {Fade} from "react-awesome-reveal";
import { Link } from "react-router-dom";
import AboutImg from "../../../assets/Image/MRI.jpg";
import CTScanMachine from "../../../assets/Image/CTScanMachine.jpg";
import MRIMachine from "../../../assets/Image/MriScanMachine.jpg";





export default function MRI_CTProductPage() {
  return (
    <>
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
      <div className="text-black flex w-[80%] mx-auto flex-col gap-2 py-10">
        <Fade triggerOnce={true} direction="up">
          <h1 className="text-xl lg:text-3xl font-bold text-orange">
            Refurbished CT and MRI machines
          </h1>
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            Upgrade your diagnostic imaging capabilities with our refurbished CT
            and MRI machines. Benefit from advanced imaging technology at a
            fraction of the cost, without compromising on quality or
            performance.
          </p>
        </Fade>

        <Fade triggerOnce direction="up">
          <div className="my-8">
            <h2 className="text-xl lg:text-3xl font-bold text-orange">
              About Refurbished CT Scan Machines
            </h2>
            <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
              At Shelves Tech we deal in refurbished or pre-owned CT Scan
              Machines. We specialize in providing high-quality refurbished CT
              scanner equipment to medical facilities, hospitals, clinics, and
              imaging centers worldwide. With a commitment to quality,
              reliability, and affordability, we aim to make advanced medical
              imaging technology accessible to healthcare providers of all
              sizes.
            </p>
          </div>
        </Fade>

        <Fade triggerOnce direction="up">
          <img
            src={CTScanMachine}
            className="w-full lg:h-[30rem] rounded-md object-cover"
            alt="CT Scan Machine"
          />
        </Fade>
        <Fade triggerOnce direction="up">
          <div className="my-8">
            <h2 className="text-xl lg:text-3xl font-bold text-orange">
              About Refurbished MRI Machines
            </h2>
            <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
              At Shelves Tech, we specialize in providing high-quality
              refurbished MRI machines to medical facilities worldwide. Our
              mission is to offer cutting-edge imaging technology at affordable
              prices, enabling healthcare providers to enhance patient care and
              diagnosis without breaking the bank.
            </p>
          </div>
        </Fade>
        <Fade triggerOnce direction="up">
          <img
            src={MRIMachine}
            className="w-full lg:h-[30rem] rounded-md object-cover"
            alt="MRI Machine"
          />
        </Fade>
      </div>
    </>
  );
}
