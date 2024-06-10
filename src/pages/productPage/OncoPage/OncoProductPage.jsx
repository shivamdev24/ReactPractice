import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import OncoImg from "../../../assets/Image/LinearAccelerator.jpg";

export default function OncoProductPage() {
  return (
    <>
      <div>
        <div className="relative">
          <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
          <img
            src={OncoImg}
            className="h-[29rem] object-center w-full object-cover  "
            alt=""
          />
          <div className="absolute top-48 left-[30px] md:left-[11rem]">
            <div className="flex gap-4 items-center font-bold text-white">
              <Link to="/">Home</Link>
              <hr className="h-4 w-[2px] bg-white" />
              <span>Onco Radiation Products</span>
            </div>
            <div className="mt-4">
              <span className="text-3xl lg:text-6xl font-bold text-white">
                ONCO RADIATIONS PRODUCTS
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-black flex flex-col gap-2 w-[80%] mx-auto pb-10">
        <Fade triggerOnce={true} direction="up">
          <div className="my-5">
            <h1 className="text-2xl lg:text-4xl font-bold uppercase text-orange">
              Onco Radiation Products
            </h1>
            

            <p className="text-graylight mt-2 ml-4 text-justify">
              At Shelves Tecch, we are dedicated to providing cutting-edge
              radiation therapy equipment and solutions to healthcare
              facilities, cancer centers, and oncology practices worldwide. Our
              mission is to support healthcare providers in delivering precise
              and effective radiation treatments to patients with cancer,
              helping to improve outcomes and quality of life.
            </p>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce="ture">
          <img
            src={OncoImg}
            className="w-[100%] mx-auto rounded-md lg:h-[40rem] object-cover"
            alt="OncoImg"
          />
        </Fade>
        <div className="flex flex-col text-justify gap-2 mt-4">
          <Fade triggerOnce={true} direction="up">
            <h1 className="text-xl font-bold text-orange mt-4">
              Our Products and Services
            </h1>
          </Fade>
          <Fade triggerOnce={true} direction="up">
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-lg font-semibold ml-4 mt-2">
                1. Linear Accelerators
              </h3>
              <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
                We offer a range of advanced linear accelerators for external
                beam radiation therapy, including models from an Indian
                manufacturer Panacea Technologies are designed to deliver
                precise radiation doses to target tumors while minimizing
                exposure to surrounding healthy tissues.
              </p>
            </div>
          </Fade>
          <Fade triggerOnce={true} direction="up">
            <div>
              <h3 className="text-lg font-semibold ml-4 mt-2">
                2. Radiation Planning Software
              </h3>
              <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
                Streamline your treatment planning process with our
                state-of-the-art radiation planning software. These innovative
                tools help oncologists and radiation therapists optimize
                treatment delivery, ensure accurate dose calculations, and
                visualize treatment plans for maximum efficacy and safety.
              </p>
            </div>
          </Fade>
          <Fade triggerOnce={true} direction="up">
            <div>
              <h3 className="text-lg font-semibold ml-4 mt-2">
                3. Radiation Safety Accessories
              </h3>
              <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
                Ensure patient and staff safety with our radiation safety
                accessories, including lead aprons, thyroid shields, goggles,
                and radiation monitoring devices. These products are designed to
                minimize radiation exposure and protect healthcare professionals
                during radiation therapy procedures.
              </p>
            </div>
          </Fade>
        </div>
        <Fade triggerOnce={true} direction="up">
          <h2 className="text-xl font-bold text-orange mt-4">
            Why Choose Panacea Onco Radiation Products?
          </h2>

          <h3 className="text-lg font-semibold ml-4 mt-2">
            1. Quality and Reliability
          </h3>
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            We partner with reputable Indian manufacturers to offer high-quality
            radiation therapy equipment that meets industry standards and
            regulations. Our products undergo rigorous testing and quality
            assurance processes to ensure optimal performance and reliability.
          </p>
        </Fade>

        <Fade triggerOnce={true} direction="up">
          <h3 className="text-lg font-semibold ml-4 mt-2">2. Expert Support</h3>
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            Our team of experienced professionals is committed to providing
            personalized support and guidance to help you select the right
            radiation therapy solutions for your facility. From product
            selection to installation, training, and ongoing technical support,
            we are here to assist you every step of the way.
          </p>
        </Fade>

        <Fade triggerOnce={true} direction="up">
          <h3 className="text-lg font-semibold ml-4 mt-2">
            3. Innovation and Advancement
          </h3>
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            We stay at the forefront of technological advancements in radiation
            therapy to bring you the latest products and solutions that can
            enhance the quality of care for your patients. Our commitment to
            innovation drives us to continually expand our product offerings and
            services to meet the evolving needs of the healthcare industry.
          </p>
        </Fade>
      </div>
    </>
  );
}
