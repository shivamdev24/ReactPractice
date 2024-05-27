import {Fade } from "react-awesome-reveal";
import { useEffect } from "react";

function RadiationPlanning() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <div className="w-full max-w-7xl mx-auto">
        <Fade triggerOnce direction="up">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-orange">About Refurbished CT Scan Machines</h2>
            <p className="mt-2 text-base">
              At Shelves Tech we deal in refurbished or pre-owned CT Scan Machines. We specialize in providing high-quality refurbished CT scanner equipment to medical facilities, hospitals, clinics, and imaging centers worldwide. With a commitment to quality, reliability, and affordability, we aim to make advanced medical imaging technology accessible to healthcare providers of all sizes.
            </p>
          </div>
        </Fade>
        <Fade triggerOnce direction="up">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-orange">Why Choose Refurbished CT Scan Machines</h2>
            <div className="mt-2 text-base">
              <h3 className="text-2xl font-bold mt-4">1. Quality Assurance</h3>
              <p className="mt-2">
                Our team of experienced technicians carefully inspects, refurbishes, and tests each CT scanner to ensure that it meets the highest quality standards. We stand behind the quality of our machines and offer warranty and service packages to provide you with peace of mind.
              </p>
              <h3 className="text-2xl font-bold mt-4">2. Cost-Effectiveness</h3>
              <p className="mt-2">
                Purchasing a refurbished CT scanner can offer significant cost savings compared to buying new equipment. Our refurbished machines are priced competitively without compromising on performance or image quality, allowing you to upgrade your imaging capabilities within your budget.
              </p>
              <h3 className="text-2xl font-bold mt-4">3. Wide Selection</h3>
              <p className="mt-2">
                We carry a diverse range of refurbished CT scan machines from leading manufacturers, including GE, Siemens, Philips, Toshiba, and more. Whether you are looking for a 4-slice, 16-slice, 64-slice, or even higher slice count CT scanner, we have options to suit your specific clinical needs.
              </p>
              <h3 className="text-2xl font-bold mt-4">4. Expert Support</h3>
              <p className="mt-2">
                Our knowledgeable team is dedicated to helping you find the right CT scanner for your facility. From initial consultation to installation and ongoing technical support, we are here to assist you every step of the way. We can also provide training for your staff to ensure optimal use of the equipment.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default RadiationPlanning;
