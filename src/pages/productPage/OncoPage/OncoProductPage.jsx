import { Fade } from "react-awesome-reveal";

export default function OncoProductPage() {
  return (
    <div className="text-black flex flex-col gap-2 pb-10">
      <Fade triggerOnce={true} direction="up">
        <h1 className="text-2xl font-bold uppercase text-orange">
          Onco Radiation Products
        </h1>
        <p className="text-gray-700 text-justify">
          Equip your oncology department with state-of-the-art radiation therapy
          products. Enhance treatment precision, accuracy, and patient outcomes
          with our comprehensive range of Onco radiation solutions.
        </p>
      </Fade>
      <Fade triggerOnce={true} direction="up">
        <h2 className="text-xl font-bold text-orange mt-4">
          Why Choose Panacea Onco Radiation Products?
        </h2>

        <h3 className="text-lg font-semibold mt-2">
          1. Quality and Reliability
        </h3>
        <p className="text-gray-700 text-justify">
          We partner with reputable Indian manufacturers to offer high-quality
          radiation therapy equipment that meets industry standards and
          regulations. Our products undergo rigorous testing and quality
          assurance processes to ensure optimal performance and reliability.
        </p>
      </Fade>

      <Fade triggerOnce={true} direction="up">
      <h3 className="text-lg font-semibold mt-2">2. Expert Support</h3>
      <p className="text-gray-700 text-justify">
        Our team of experienced professionals is committed to providing
        personalized support and guidance to help you select the right radiation
        therapy solutions for your facility. From product selection to
        installation, training, and ongoing technical support, we are here to
        assist you every step of the way.
      </p>
      </Fade>


    <Fade triggerOnce={true} direction="up">
      <h3 className="text-lg font-semibold mt-2">
        3. Innovation and Advancement
      </h3>
      <p className="text-gray-700 text-justify">
        We stay at the forefront of technological advancements in radiation
        therapy to bring you the latest products and solutions that can enhance
        the quality of care for your patients. Our commitment to innovation
        drives us to continually expand our product offerings and services to
        meet the evolving needs of the healthcare industry.
      </p>
    </Fade>
    </div>
  );
}
