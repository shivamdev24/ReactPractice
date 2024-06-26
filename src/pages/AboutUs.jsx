import { Link } from "react-router-dom";
import AboutImg from "../assets/Image/ourVisionbg.jpg";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    console.log("Component re-rendered");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <div className="relative">
          <div className="overlay h-[35rem] opacity-[.6] bg-graydark absolute w-full "></div>
          <img
            src={AboutImg}
            className="h-[35rem] object-top w-full object-cover  "
            alt=""
          />
          <div className="absolute top-48 left-[30px] md:left-[11rem]">
            <div className="flex gap-4 items-center font-bold text-white">
              <span>Home</span>
              <hr className="h-4 w-[2px] bg-white" />
              <span>About Us</span>
            </div>
            <div className="mt-4">
              <span className="text-6xl font-bold text-white">ABOUT US</span>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col gap-8 w-full  px-5 justify-around">
          <div className="md:w-[80%] mx-auto w-full flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-1">
              <Fade direction="up" triggerOnce="true">
                <h2 className="md:text-2xl text-lg font-bold text-orange">
                  Your Trusted Partner in Medical Innovation
                </h2>
              </Fade>
              <Fade direction="up" triggerOnce="true">
                <p className="text-base ml-4 text-graylight  text-justify">
                  We understand that the heart of exceptional healthcare lies in
                  the quality and reliability of the equipment used. Founded
                  over a decade ago, our company has grown into a leading
                  supplier of capital medical equipment, dedicated to empowering
                  healthcare providers with the tools they need to deliver
                  outstanding patient care.
                </p>
              </Fade>
            </div>
          </div>

          <div className="md:w-[80%] mx-auto w-full flex flex-col gap-4">
            <Fade direction="up" triggerOnce="true">
              <h1 className="text-orange md:text-2xl text-lg  font-bold">
                Our Mission
              </h1>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <p className="text-base ml-4 mt-1 text-justify">
                To support healthcare professionals and healthcare units by
                providing high-quality, reliable medical equipment that meets
                the evolving needs of modern medicine. We are committed to :
              </p>
            </Fade>
            <div className="flex ml-4 flex-col gap-1">
              <div>
                <div className="mt-2 flex gap-2 items-center">
                  <Fade direction="up" triggerOnce="true">
                    <h1 className="text-md text-orange font-semibold">
                      Quality :
                    </h1>
                  </Fade>
                  <Fade direction="up" triggerOnce="true">
                    <p className=" text-base  text-graylight">
                      Ensuring that every product we offer meets the highest
                      standards of performance and safety.
                    </p>
                  </Fade>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  <Fade direction="up" triggerOnce="true">
                    <h1 className="text-md text-orange font-semibold">
                      Innovation :
                    </h1>
                  </Fade>
                  <Fade direction="up" triggerOnce="true">
                    <p className="text-base  text-grayligh">
                      Continually updating our inventory with the latest
                      advancements in medical technology.
                    </p>
                  </Fade>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  <Fade direction="up" triggerOnce="true">
                    <h1 className="text-md text-orange font-semibold">
                      Service :
                    </h1>
                  </Fade>
                  <Fade direction="up" triggerOnce="true">
                    <p className="text-base  text-grayligh">
                      Providing exceptional customer support and technical
                      assistance to maximize the value of your investment.
                    </p>
                  </Fade>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  <Fade direction="up" triggerOnce="true">
                    <h1 className="text-md text-orange font-semibold">
                      Affordability :
                    </h1>
                  </Fade>
                  <Fade direction="up" triggerOnce="true">
                    <p className="text-base  text-grayligh">
                      Offering competitive pricing and flexible financing
                      options to make top-tier equipment accessible to all.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[80%] mx-auto  w-full flex flex-col gap-4 md:gap-8">
            <Fade direction="up" triggerOnce="true">
              <h1 className="md:text-2xl text-lg font-bold text-orange">
                Our Core Values
              </h1>
            </Fade>
            <div className="flex ml-4 flex-col gap-1">
              <Fade direction="up" triggerOnce="true">
                <p className="text-sm md:text-lg  text-justify">
                  Our core values guide every aspect of our business:
                </p>
              </Fade>
              <div>
                <div className="mt-2 flex gap-2 items-center">
                  <Fade direction="up" triggerOnce="true">
                    <h1 className="text-md text-orange font-semibold">
                      Integrity :
                    </h1>
                  </Fade>
                  <Fade direction="up" triggerOnce="true">
                    <p className="text-base  text-grayligh">
                      We conduct our business with honesty, transparency, and
                      respect for our clients and partners.
                    </p>
                  </Fade>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  <Fade direction="up" triggerOnce="true">
                    <h1 className="text-md text-orange font-semibold">
                      Excellence :
                    </h1>
                  </Fade>
                  <Fade direction="up" triggerOnce="true">
                    <p className="text-base  text-grayligh">
                      We strive for excellence in everything we do, from product
                      selection to customer service.
                    </p>
                  </Fade>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  <Fade direction="up" triggerOnce="true">
                    <h1 className="text-md text-orange font-semibold">
                      Collaboration :
                    </h1>
                  </Fade>
                  <Fade direction="up" triggerOnce="true">
                    <p className="text-base  text-grayligh">
                      We believe in building strong, long-lasting relationships
                      with our clients, partners, and the medical community.
                    </p>
                  </Fade>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                  <Fade direction="up" triggerOnce="true">
                    <h1 className="text-md text-orange font-semibold">
                      Innovation :
                    </h1>
                  </Fade>
                  <Fade direction="up" triggerOnce="true">
                    <p className="text-base  text-grayligh">
                      We are committed to staying at the forefront of medical
                      technology to provide the best solutions for our clients.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[80%] mx-auto  w-full flex flex-col gap-4 ">
            <Fade direction="up" triggerOnce="true">
              <h1 className="md:text-2xl text-lg font-bold text-orange">
                Our Team
              </h1>
            </Fade>
            <div className="flex ml-4 flex-col gap-1">
              <Fade direction="up" triggerOnce="true">
                <p className="text-sm md:text-lg  text-justify">
                  Our team comprises seasoned professionals with extensive
                  experience in the medical equipment industry. From engineers
                  and technicians to customer service specialists, each member
                  of our team is dedicated to ensuring you receive the best
                  products and support. We work closely with leading
                  manufacturers and industry experts to stay ahead of the curve
                  and bring you the latest innovations.
                </p>
              </Fade>
            </div>
          </div>

          <div className="md:w-[80%] mx-auto  w-full flex flex-col gap-4 ">
            <Fade direction="up" triggerOnce="true">
              <h1 className="md:text-2xl text-lg font-bold text-orange">
                Global Reach, Local Touch
              </h1>
            </Fade>
            <div className="flex ml-4 flex-col gap-1">
              <Fade direction="up" triggerOnce="true">
                <p className="text-sm md:text-lg  text-justify">
                  While we serve clients around the globe, we understand the
                  importance of a personalized approach. We take the time to
                  understand your specific needs and provide tailored solutions
                  that fit your unique requirements. Our global network of
                  partners and distributors ensures that we can deliver our
                  products and services efficiently and effectively, no matter
                  where you are.
                </p>
              </Fade>
            </div>
          </div>

          <div className="md:w-[80%] mx-auto  w-full flex flex-col gap-4 ">
            <Fade direction="up" triggerOnce="true">
              <h1 className="md:text-2xl text-lg font-bold text-orange">
                Join Us on Our Journey
              </h1>
            </Fade>
            <div className="flex ml-4 flex-col gap-1">
              <Fade direction="up" triggerOnce="true">
                <p className="text-sm md:text-lg  text-justify">
                  At ShelvesTech, we are more than just a supplier; we are your
                  partner in healthcare innovation. We invite you to join us on
                  our journey to enhance healthcare and improve patient
                  outcomes. Together, we can make a significant impact on the
                  health and well-being of communities worldwide.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
