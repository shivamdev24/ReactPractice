import AboutImg from "../../../assets/Image/ourVisionbg.jpg";
import PsaOxygen from "../../../assets/Image/PsaOxygen.jpeg";
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function PSA() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-full">
        <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full"></div>
        <img
          src={AboutImg}
          className="h-[29rem] object-top w-full object-cover"
          alt="About Us"
        />
        <div className="absolute top-48 left-[30px] md:left-[11rem]">
          <div className="flex gap-4 items-center font-bold text-white">
            <Link to="/">Home</Link>
            <hr className="h-4 w-[2px] bg-white" />
            <span>PSA Oxygen Plant</span>
          </div>
        </div>
      </div>
      <div className="p-5 w-full">
        <img
          src={PsaOxygen}
          className="w-[82%] mx-auto h-[40rem] object-cover"
          alt=""
        />
        <div className="w-full max-w-7xl mx-auto">
          <Fade direction="up" triggerOnce="true">
            <h1 className="text-5xl my-8 font-bold text-orange">
              PSA Oxygen Plant
            </h1>
            <Fade triggerOnce direction="up"></Fade>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-orange">Background</h2>
              <p className="mt-2 text-base">
                A reputable hospital in a bustling city faces challenges in
                managing and refilling a significant number of oxygen cylinders
                to meet the demands of their patients. The monthly expenditure
                for the consumption of 15 cylinders amounts to a staggering 1
                lakh rupees. The hospital administration is also concerned about
                the hassle of managing and refilling cylinders, the cost of
                manpower involved in using the cylinders, and the dependence on
                a third-party refilling agency for their oxygen supply.
                Moreover, in light of recent events such as the COVID-19
                pandemic, ensuring the purity and availability of medical-grade
                oxygen is of utmost importance to prevent any critical
                situations.
              </p>
            </div>
          </Fade>
          <Fade triggerOnce direction="up">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-orange">Solution</h2>
              <p className="mt-2 text-base">
                To address these challenges and streamline their operations, the
                hospital decides to invest in a PSA (Pressure Swing Adsorption)
                oxygen plant. The installation of a PSA oxygen plant is
                estimated to save the hospital a monthly expenditure of 1 lakh
                rupees for the consumption of 15 cylinders. The calculation is
                straightforward: with the plant requiring a 7.5 kW compressor
                for a 92 liters per minute (LPM) capacity, the daily energy
                consumption is 180 units for 20 cylinders. If the cost of a unit
                is 10 rupees, the cost to produce oxygen for 20 cylinders is
                calculated at 1800 rupees per day. Considering the average cost
                of a cylinder is 500 rupees, the savings per cylinder by
                producing oxygen in-house amounts to 410 rupees. This results in
                a substantial cost reduction of 246,000 rupees per month for the
                hospital.
              </p>
            </div>
          </Fade>
          <Fade triggerOnce direction="up">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-orange">Impact</h2>
              <p className="mt-2 text-base">
                The installation of the PSA oxygen plant has brought about
                significant benefits to the hospital. Not only has it eliminated
                the hassle of managing and refilling oxygen cylinders, but it
                has also reduced the cost of manpower previously involved in
                handling the cylinders. The hospital no longer has to depend on
                external refilling agencies for their oxygen supply, ensuring a
                seamless and reliable source of medical-grade oxygen. With the
                PSA oxygen plant in place, the hospital can guarantee the purity
                and availability of oxygen at all times, safeguarding against
                any critical situations, such as the need for oxygen during a
                health crisis like the COVID-19 pandemic.
              </p>
            </div>
          </Fade>
          <Fade triggerOnce direction="up">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-orange">Conclusion</h2>
              <p className="mt-2 text-base">
                The successful implementation of the PSA oxygen plant has not
                only saved the hospital substantial costs but has also enhanced
                operational efficiency and patient care. By investing in this
                innovative technology, the hospital has secured a sustainable
                and reliable source of oxygen, eliminated various logistical
                challenges, and improved the overall quality of healthcare
                services provided to their patients. The decision to install a
                PSA oxygen plant has proven to be a wise investment, ensuring
                the hospital&apos;s readiness to face any future challenges and
                emergencies related to oxygen supply.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="h-50"></div>{" "}
      {/* This div adds space between the content and the footer */}
    </div>
  );
}
