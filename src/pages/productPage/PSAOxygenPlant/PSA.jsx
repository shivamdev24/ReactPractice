import { useState } from "react";
import AboutImg from "../../../assets/Image/PSA.jpeg";
import PsaOxygen from "../../../assets/Image/PsaOxygen.jpeg";
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function PSA() {



  const [readMore, setReadMore] = useState(false);


  const toogleRead = () => {
    setReadMore(!readMore);
  }




  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-full">
        <div className="overlay h-[35rem] opacity-[.8] bg-graydark absolute w-full"></div>
        <img
          src={AboutImg}
          className="h-[35rem] object-center w-full object-cover"
          alt="About Us"
        />
        <div className="absolute top-48 left-[30px] md:left-[11rem]">
          <div className="flex gap-4 items-center font-bold text-white">
            <Link to="/">Home</Link>
            <hr className="h-4 w-[2px] bg-white" />
            <span>PSA Oxygen Generation Plant</span>
          </div>
          <div className="mt-4">
            <span className="text-3xl lg:text-6xl font-bold text-white">
              PSA Oxygen Generation Plant
            </span>
          </div>
        </div>
      </div>
      <div className="p-5 w-full">
        <div className="w-full max-w-7xl mx-auto ">
          <Fade direction="up" triggerOnce="true">
            <h1 className="text-4xl lg:text-5xl my-4 font-bold text-orange">
              PSA Oxygen Generation Plant
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <h1 className="text-base font-medium text-orange">
              Welcome to Shelvestech: Your Source for PSA Oxygen Generation
              Plants
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <p className="my-2 text-graylight text-justify ml-4 text-base md:text-base">
              At Shelvestech, we specialize in providing top-quality medical
              equipment to meet the evolving needs of healthcare facilities. Our
              focus on innovation and reliability has made us a trusted partner
              in the industry. Today, we are proud to introduce our range of PSA
              Oxygen Generation Plants, designed to deliver a consistent and
              reliable oxygen supply for medical applications.
            </p>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <img
              src={PsaOxygen}
              className="w-[100%] mx-auto rounded-md h-[40rem] object-cover"
              alt="PsaOxygen"
            />
          </Fade>
          <div className="my-4 ">
            <Fade direction="up" triggerOnce="true">
              <h2 className="text-2xl font-bold text-orange">
                Why Choose Shelvestech&apos;s PSA Oxygen Generation Plants :-
              </h2>
            </Fade>
            <div className="mt-4 ml-4  gap-2 items-center">
              <Fade direction="up" triggerOnce="true">
                <h1 className="text-md text-orange font-bold">
                  * High Efficiency :
                </h1>
              </Fade>
              <Fade direction="up" triggerOnce="true">
                <p className="text-base ml-8 text-justify  text-grayligh">
                  Our PSA Oxygen Generation Plants are designed for maximum
                  efficiency, ensuring a continuous supply of high-purity oxygen
                  to meet the demands of healthcare facilities.
                </p>
              </Fade>
            </div>
            <div className="mt-2 ml-4  gap-2 items-center">
              <Fade direction="up" triggerOnce="true">
                <h1 className="text-md text-orange font-bold">
                  * Reliability :
                </h1>
              </Fade>
              <Fade direction="up" triggerOnce="true">
                <p className="text-base ml-8 text-justify  text-grayligh">
                  We understand the critical nature of oxygen supply in medical
                  settings. That&apos;s why our plants are built to deliver
                  consistent performance and reliability, giving you peace of
                  mind when it matters most.
                </p>
              </Fade>
            </div>
            <div className="mt-2 ml-4  gap-2 items-center">
              <Fade direction="up" triggerOnce="true">
                <h1 className="text-md text-orange font-bold">
                  * Custom Solutions :
                </h1>
              </Fade>
              <Fade direction="up" triggerOnce="true">
                <p className="text-base ml-8 text-justify text-grayligh">
                  We recognize that each healthcare facility has unique
                  requirements. Our team works closely with you to tailor a PSA
                  Oxygen Generation Plant that fits your specific needs and
                  space constraints.
                </p>
              </Fade>
            </div>
            <div className="mt-2 ml-4  gap-2 items-center">
              <Fade direction="up" triggerOnce="true">
                <h1 className="text-md text-orange font-bold">
                  * Quality Assurance :
                </h1>
              </Fade>
              <Fade direction="up" triggerOnce="true">
                <p className="text-base ml-8 text-justify  text-grayligh">
                  All our products undergo rigorous testing and quality
                  assurance measures to ensure they meet the highest industry
                  standards. You can trust Shelvestech for superior quality and
                  performance.
                </p>
              </Fade>
            </div>
          </div>
          <div className="my-4 ">
            <Fade direction="up" triggerOnce="true">
              <h2 className="text-2xl font-bold text-orange">
                Key Features of Shelvestech&apos;s PSA Oxygen Generation Plants
                :-
              </h2>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <div className="ml-8 my-4 flex text-justify flex-col gap-3 text-base font-medium">
                <p>- Advanced PSA technology for on-site oxygen generation.</p>
                <p>
                  {" "}
                  - High purity oxygen output suitable for medical applications.
                </p>
                <p> - Energy-efficient design for cost-effective operation.</p>
                <p>
                  {" "}
                  - User-friendly interface for easy monitoring and control.
                </p>
                <p>
                  - Compact footprint for easy installation and integration.
                </p>
              </div>
            </Fade>
          </div>
          <div className="my-4 ">
            <Fade direction="up" triggerOnce="true">
              <h2 className="text-2xl font-bold text-orange">Conclusion :-</h2>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <div className="ml-8 my-4 flex flex-col gap-3 text-base">
                <p className="mb-4  text-graylight ml-2 text-justify text-base md:text-base">
                  Experience the difference with Shelvestech&apos;s PSA Oxygen
                  Generation Plants. Improve the efficiency and reliability of
                  your medical oxygen supply with our cutting-edge solutions.
                  Contact us today to learn more about our products and how we
                  can support your healthcare facility&apos;s needs. Trust
                  Shelvestech for quality, innovation, and excellence in medical
                  equipment solutions.
                </p>
              </div>
            </Fade>
          </div>

          <div className="my-4 pt-4  ">
            <Fade triggerOnce direction="up">
              <h1 className="text-2xl font-bold text-orange">
                Case Study: Installation of PSA Oxygen Plant in a Hospital
              </h1>
              <p className="mb-4  text-graylight ml-4 text-justify text-base md:text-base ">
                Ensure a continuous and reliable oxygen supply for your hospital
                with our cutting-edge PSA oxygen plants. Experience
                cost-effective on-site oxygen production with high-purity output
                to support critical care units, surgical procedures, and patient
                care. To know more link to the brochure. A Case study on the
                pager page for PSA oxygen plant. Case Study: Installation of PSA
                Oxygen Plant in a Hospital. {"   "}
                <button
                  className="font-bold text-lg text-orange"
                  onClick={toogleRead}
                >
                  {readMore ? <>Read Less..</> : <>Read More..</>}
                </button>
              </p>
            </Fade>

            {readMore && (
              <div>
                <Fade triggerOnce direction="up">
                  <div className="my-8">
                    <Fade triggerOnce direction="up">
                      <h2 className="text-2xl font-bold text-orange">
                        Background :
                      </h2>
                    </Fade>
                    <p className="mt-2 text-graylight ml-4 text-justify text-base md:text-base">
                      A reputable hospital in a bustling city faces challenges
                      in managing and refilling a significant number of oxygen
                      cylinders to meet the demands of their patients. The
                      monthly expenditure for the consumption of 15 cylinders
                      amounts to a staggering 1 lakh rupees. The hospital
                      administration is also concerned about the hassle of
                      managing and refilling cylinders, the cost of manpower
                      involved in using the cylinders, and the dependence on a
                      third-party refilling agency for their oxygen supply.
                      Moreover, in light of recent events such as the COVID-19
                      pandemic, ensuring the purity and availability of
                      medical-grade oxygen is of utmost importance to prevent
                      any critical situations.
                    </p>
                  </div>
                </Fade>
                <Fade triggerOnce direction="up">
                  <div className="mb-8">
                    <Fade triggerOnce direction="up">
                      <h2 className="text-2xl font-bold text-orange">
                        Solution :
                      </h2>
                    </Fade>
                    <p className="mt-2 text-graylight ml-4 text-justify text-base md:text-base">
                      To address these challenges and streamline their
                      operations, the hospital decides to invest in a PSA
                      (Pressure Swing Adsorption) oxygen plant. The installation
                      of a PSA oxygen plant is estimated to save the hospital a
                      monthly expenditure of 1 lakh rupees for the consumption
                      of 15 cylinders. The calculation is straightforward: with
                      the plant requiring a 7.5 kW compressor for a 92 liters
                      per minute (LPM) capacity, the daily energy consumption is
                      180 units for 20 cylinders. If the cost of a unit is 10
                      rupees, the cost to produce oxygen for 20 cylinders is
                      calculated at 1800 rupees per day. Considering the average
                      cost of a cylinder is 500 rupees, the savings per cylinder
                      by producing oxygen in-house amounts to 410 rupees. This
                      results in a substantial cost reduction of 246,000 rupees
                      per month for the hospital.
                    </p>
                  </div>
                </Fade>
                <Fade triggerOnce direction="up">
                  <div className="mb-8">
                    <Fade triggerOnce direction="up">
                      <h2 className="text-2xl font-bold text-orange">
                        Impact :
                      </h2>
                    </Fade>
                    <p className="mt-2 text-graylight ml-4 text-justify text-base md:text-base">
                      The installation of the PSA oxygen plant has brought about
                      significant benefits to the hospital. Not only has it
                      eliminated the hassle of managing and refilling oxygen
                      cylinders, but it has also reduced the cost of manpower
                      previously involved in handling the cylinders. The
                      hospital no longer has to depend on external refilling
                      agencies for their oxygen supply, ensuring a seamless and
                      reliable source of medical-grade oxygen. With the PSA
                      oxygen plant in place, the hospital can guarantee the
                      purity and availability of oxygen at all times,
                      safeguarding against any critical situations, such as the
                      need for oxygen during a health crisis like the COVID-19
                      pandemic.
                    </p>
                  </div>
                </Fade>
                <Fade triggerOnce direction="up">
                  <div className="mb-8">
                    <Fade triggerOnce direction="up">
                      <h2 className="text-2xl font-bold text-orange">
                        Conclusion :
                      </h2>
                    </Fade>
                    <p className="mt-2 text-graylight ml-4 text-justify text-base md:text-base">
                      The successful implementation of the PSA oxygen plant has
                      not only saved the hospital substantial costs but has also
                      enhanced operational efficiency and patient care. By
                      investing in this innovative technology, the hospital has
                      secured a sustainable and reliable source of oxygen,
                      eliminated various logistical challenges, and improved the
                      overall quality of healthcare services provided to their
                      patients. The decision to install a PSA oxygen plant has
                      proven to be a wise investment, ensuring the
                      hospital&apos;s readiness to face any future challenges
                      and emergencies related to oxygen supply.
                    </p>
                  </div>
                </Fade>
                <Fade triggerOnce direction="up">
                  <div className="mb-8">
                    <p className="mt-2 text-graylight ml-4 text-justify text-base md:text-base">
                      At Shelves Tech, we understand the challenges and
                      opportunities that healthcare facilities face in their
                      quest for excellence. That&apos;s why we offer a
                      comprehensive range of cutting-edge capital medical
                      equipment solutions designed to meet the unique needs of
                      our clients. Our PSA oxygen plants provide a reliable and
                      cost-effective source of oxygen for hospitals, clinics,
                      and medical centers, ensuring uninterrupted supply for
                      critical care situations. Additionally, our refurbished CT
                      and MRI machines offer high-quality imaging capabilities
                      at a fraction of the cost, enabling facilities to upgrade
                      their diagnostic capabilities without breaking the bank.
                      <br />
                      <br />
                      In the realm of hospital management, our software
                      solutions streamline administrative processes, optimize
                      resource allocation, and improve overall efficiency. From
                      patient scheduling and billing to inventory management and
                      EMR integration, our software suite is tailored to meet
                      the specific needs of healthcare facilities of all sizes.
                      Furthermore, our Onco radiation products deliver advanced
                      treatment options for cancer patients, offering
                      state-of-the-art technology to support oncology
                      departments in their mission to provide the best possible
                      care.
                      <br />
                      <br />
                      As we navigate the complexities of healthcare delivery in
                      today&apos;s world, the importance of leveraging advanced
                      medical equipment solutions cannot be understated. By
                      partnering with Shelvestech, healthcare facilities can
                      unlock growth opportunities, enhance patient outcomes, and
                      elevate the quality of care they provide. Together,
                      let&apos;s embrace innovation, foster collaboration, and
                      drive positive change in the healthcare industry.
                    </p>
                  </div>
                </Fade>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
