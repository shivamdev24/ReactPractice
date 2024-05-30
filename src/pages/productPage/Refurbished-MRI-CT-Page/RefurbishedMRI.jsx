import {Fade} from "react-awesome-reveal";
import MRIMachine from "../../../assets/Image/MriScanMachine.jpg"
import { Link } from "react-router-dom";
import AboutImg from "../../../assets/Image/MRI.jpg";

function RefurbishedMRI() {
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
      <div className="flex flex-col w-[80%] mx-auto items-center  justify-center min-h-screen ">
        <div className=" lg:mx-auto">
          <Fade triggerOnce direction="up">
            <div className="my-8">
              <h2 className="text-xl lg:text-3xl font-bold text-orange">
                About Refurbished MRI Machines
              </h2>
              <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
                At Shelves Tech, we specialize in providing high-quality
                refurbished MRI machines to medical facilities worldwide. Our
                mission is to offer cutting-edge imaging technology at
                affordable prices, enabling healthcare providers to enhance
                patient care and diagnosis without breaking the bank.
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
          <Fade triggerOnce direction="up">
            <div className="my-8">
              <h2 className="text-xl lg:text-3xl font-bold text-orange">
                Why Choose Refurbished CT Scan Machines
              </h2>
              <div className="mt-2 text-base">
                <h3 className="text-lg lg:text-2xl ml-4 font-bold mt-4">
                  1. Quality Assurance
                </h3>
                <p className="mt-2 text-sm lg:text-base text-graylight ml-10">
                  Each MRI machine in our inventory undergoes a rigorous
                  refurbishment process conducted by our team of expert
                  technicians. We ensure that every component is thoroughly
                  inspected, repaired, or replaced to meet industry standards
                  and deliver optimal performance.
                </p>
                <h3 className="text-lg lg:text-2xl ml-4 font-bold mt-4">
                  2. Cost-Effectiveness
                </h3>
                <p className="mt-2 text-graylight ml-10">
                  Investing in a refurbished MRI machine can significantly
                  reduce your capital expenditure while still providing top-tier
                  imaging capabilities. Our machines offer exceptional value for
                  money without compromising on quality or reliability{" "}
                </p>
                <h3 className="text-lg lg:text-2xl ml-4 font-bold mt-4">
                  3. Extensive Selection
                </h3>
                <p className="mt-2 text-graylight ml-10">
                  Whether you need a high-field, mid-field, or open MRI system,
                  we have a diverse range of refurbished machines to suit your
                  specific requirements. Our inventory includes models from
                  leading manufacturers, ensuring you have access to the latest
                  technological advancements in imaging.
                </p>
                <h3 className="text-lg lg:text-2xl ml-4 font-bold mt-4">
                  4. Customization Options
                </h3>
                <p className="mt-2 text-graylight ml-10">
                  We understand that every healthcare facility has unique needs
                  and preferences. That&apos;s why we offer customization
                  options to tailor the refurbished MRI machine to your specific
                  clinical requirements. From software upgrades to coil
                  configurations, we can accommodate your requests to ensure
                  seamless integration with your existing infrastructure.
                </p>
                <h3 className="text-lg lg:text-2xl ml-4 font-bold mt-4">
                  5. Comprehensive Support
                </h3>
                <p className="mt-2 text-graylight ml-10">
                  Our commitment to customer satisfaction extends beyond the
                  sale. We provide ongoing technical support, maintenance
                  services, and training programs to help you maximize the
                  performance and longevity of your refurbished MRI machine. Our
                  team is always available to address any concerns or queries
                  you may have.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default RefurbishedMRI;
