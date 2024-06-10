import {Fade} from "react-awesome-reveal";
import OurVisionbg from "../../../assets/Image/ourVisionbg.jpg"
import SSPIMG from "../../../assets/Image/ourVisionbg.jpg";
import { Link } from "react-router-dom";

export default function SSProductPage() {
  return (
    <>
      <div className="relative">
        <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
        <img
          src={SSPIMG}
          className="h-[29rem] object-top w-full object-cover  "
          alt=""
        />
        <div className="absolute top-48 left-[30px] md:left-[11rem]">
          <div className="flex gap-4 items-center font-bold text-white">
            <Link to="/">Home</Link>
            <hr className="h-4 w-[2px] bg-white" />
            <span>Hospital Managment Software Solutions</span>
          </div>
          <div className="mt-4">
            <span className="text-3xl lg:text-6xl uppercase font-bold text-white">
              Hospital Managment Software Solutions
            </span>
          </div>
        </div>
      </div>
      <div className="text-black flex flex-col w-[80%] mx-auto gap-2 py-10">
        <Fade triggerOnce={true} direction="up">
          <h1 className="text-2xl font-bold uppercase text-orange">
            Hospital Managment Software Solutions
          </h1>
        </Fade>
        <Fade triggerOnce={true} direction="up">
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            At Shelves Tech, we specialize in providing innovative and
            comprehensive software solutions designed to streamline operations,
            enhance patient care, and improve efficiency in healthcare
            facilities of all sizes. Our customizable software products are
            tailored to meet the unique needs of hospitals, clinics, medical
            centers, and healthcare organizations, helping them deliver
            high-quality care and optimize their workflows.
          </p>
        </Fade>
        <Fade triggerOnce={true} direction="up">
          <img
            src={OurVisionbg}
            className="w-full rounded-md"
            alt="Software Solutions"
          />
        </Fade>

        <div>
          <Fade triggerOnce={true} direction="up">
            <h1 className="text-xl font-bold text-orange mt-4">
              Our Software Solutions
            </h1>
          </Fade>
          <div>
            <Fade triggerOnce={true} direction="up">
              <h1 className="text-lg ml-4 font-semibold mt-2">
                1. Electronic Health Records (EHR)
              </h1>
              <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
                Our EHR software is designed to digitize and centralize patient
                health records, making it easier for healthcare providers to
                access, update, and share patient information securely. With
                intuitive interfaces and customizable features, our EHR
                solutions help improve clinical workflows, reduce paperwork, and
                enhance patient outcomes.
              </p>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce={true} direction="up">
              <h1 className="text-lg ml-4 font-semibold mt-2">
                2. Hospital Management System
              </h1>
              <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
                Our hospital management system integrates various administrative
                and clinical functions within a healthcare facility, including
                patient registration, appointment scheduling, billing and
                invoicing, inventory management, and more. This comprehensive
                software solution helps hospitals streamline their operations,
                improve communication between departments, and optimize resource
                allocation.
              </p>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce={true} direction="up">
              <h1 className="text-lg ml-4 font-semibold mt-2">
                3. Medical Billing and Revenue Cycle Management
              </h1>
              <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
                Simplify the billing process and maximize revenue with our
                medical billing software. Our solutions automate billing tasks,
                verify insurance eligibility, track claims, and generate reports
                to streamline the revenue cycle management process and ensure
                timely reimbursement for services provided.
              </p>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce={true} direction="up">
              <h1 className="text-lg ml-4 font-semibold mt-2">
                4. Telemedicine Platform
              </h1>
              <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
                Enhance patient access to care with our telemedicine platform,
                which enables remote consultations, virtual visits, and
                telemonitoring services. Our secure and user-friendly
                telemedicine software allows healthcare providers to connect
                with patients in real-time, expanding access to care and
                improving patient satisfaction.
              </p>
            </Fade>
          </div>
        </div>
        <Fade triggerOnce={true} direction="up">
          <h2 className="text-xl font-bold text-orange mt-4">
            Why Choose Our Software Solutions?
          </h2>
        </Fade>
        <Fade triggerOnce={true} direction="up">
          <h3 className="text-lg ml-4 font-semibold mt-2">
            1. Customization and Scalability
          </h3>
        </Fade>
        <Fade triggerOnce={true} direction="up">
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            Our software solutions are highly customizable and scalable to meet
            the specific needs and requirements of your healthcare facility.
            Whether you run a small clinic or a large hospital, our team can
            tailor our software products to fit your workflow and enhance
            operational efficiency.
          </p>
        </Fade>
        <Fade triggerOnce={true} direction="up">
          <h3 className="text-lg ml-4 font-semibold mt-2">
            2. Compliance and Security
          </h3>
        </Fade>
        <Fade triggerOnce={true} direction="up">
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            We prioritize data security and compliance with industry
            regulations, such as HIPAA, to ensure the confidentiality and
            integrity of patient information. Our software solutions are
            designed with robust security features to protect sensitive data and
            maintain compliance with healthcare privacy standards.
          </p>
        </Fade>
        <Fade triggerOnce={true} direction="up">
          <h3 className="text-lg ml-4 font-semibold mt-2">
            3. Expert Support and Training
          </h3>
        </Fade>
        <Fade triggerOnce={true} direction="up">
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            Our dedicated team of support professionals is available to provide
            technical assistance, training, and ongoing support to help you
            maximize the value of our software solutions. We are committed to
            ensuring that you have the resources and knowledge to effectively
            use our products and achieve your operational goals.
          </p>
        </Fade>
      </div>
    </>
  );
}
