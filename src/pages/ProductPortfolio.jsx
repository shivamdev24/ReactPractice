
import AboutImg from "../assets/Image/MRI.jpg";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";


function ProductPortfolio() {

useEffect(() => {
  console.log("Component re-rendered");
  window.scrollTo(0, 0);
}, []);




  return (
    <div>
      <div className="relative">
        <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
        <img
          src={AboutImg}
          className="h-[29rem] object-top w-full object-cover  "
          alt="ProductPortfolio"
        />
        <div className="absolute top-48 left-[30px] md:left-[11rem]">
          <div className="flex gap-4 items-center font-bold text-white">
            <span>Home</span>
            <hr className="h-4 w-[2px] bg-white" />
            <span>About Us</span>
          </div>
          <div className="mt-4">
            <span className="text-3xl lg:text-6xl font-bold text-white">
              Product Portfolio
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="my-10 text-justify px-5">
          <div className="w-full max-w-7xl mx-auto">
            <Fade direction="up" triggerOnce="true">
              <h1 className="text-2xl font-medium text-orange">
                PSA Oxygen Plants
              </h1>
            </Fade>
            <Fade triggerOnce direction="up">
              <p className="my-4 ml-4 text-base ">
                Ensure a continuous and reliable oxygen supply for your hospital
                with our cutting-edge PSA oxygen plants. Experience
                cost-effective on-site oxygen production with high-purity output
                to support critical care units, surgical procedures, and patient
                care. To know more link to the brochure. A Case study on the
                pager page for PSA oxygen plant. Case Study: Installation of PSA
                Oxygen Plant in a Hospital
              </p>
            </Fade>
          </div>
          <div className="w-full max-w-7xl mx-auto">
            <Fade direction="up" triggerOnce="true">
              <h1 className="text-2xl font-medium text-orange">
                Refurbished CT and MRI Machines
              </h1>
            </Fade>
            <Fade triggerOnce direction="up">
              <p className="my-4 ml-4 text-base ">
                Upgrade your diagnostic imaging capabilities with our
                refurbished CT and MRI machines. Benefit from advanced imaging
                technology at a fraction of the cost, without compromising on
                quality or performance.
              </p>
            </Fade>
          </div>
          <div className="w-full max-w-7xl mx-auto">
            <Fade direction="up" triggerOnce="true">
              <h1 className="text-2xl font-medium text-orange">
                Hospital Management Software
              </h1>
            </Fade>
            <Fade triggerOnce direction="up">
              <p className="my-4 ml-4 text-base ">
                Streamline your operations and improve patient care with our
                robust hospital management software. Enhance efficiency, reduce
                administrative burdens, and optimize resource allocation for
                better healthcare delivery.
              </p>
            </Fade>
          </div>
          <div className="w-full max-w-7xl mx-auto">
            <Fade direction="up" triggerOnce="true">
              <h1 className="text-2xl font-medium text-orange">
                Onco Radiation Products
              </h1>
            </Fade>
            <Fade triggerOnce direction="up">
              <p className="my-4 ml-4 text-base ">
                Equip your oncology department with state-of-the-art radiation
                therapy products. Enhance treatment precision, accuracy, and
                patient outcomes with our comprehensive range of Onco radiation
                solutions.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPortfolio
