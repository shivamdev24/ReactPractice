import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import AboutImg from "../assets/Image/MRI.jpg"


import { Collapse } from "antd";

const psaList = [
 {
  items: [
   {
    key: "1",
    label: "Expert Technicians for PSA Oxygen Plant Servicing",
    children: (
     <p>
      {" "}
      Our team of skilled technicians specializes in servicing PSA oxygen plants to ensure uninterrupted and efficient oxygen production
     </p>
    ),
   },
  ],
 },
 {
  items: [
   {
    key: "1",
    label: "Comprehensive Maintenance Services",
    children: (
     <p>
      {" "}
      We offer regular maintenance checks, calibration, and repair services to keep your oxygen plant operating at peak performance.

     </p>
    ),
   },
  ],
 },
 {
  items: [
   {
    key: "1",
    label: "Reliable AMC and CMC Packages",
    children: (
     <p>
      {" "}
      With our AMC and CMC packages, you can rest assured that your PSA oxygen plant is in safe hands
     </p>
    ),
   },
  ],
 },
];

const ctList = [
  {
   items: [
    {
     key: "1",
     label: "Ensuring Accurate Diagnostic Imaging",
     children: (
      <p>
       {" "}
       Our team of skilled technicians specializes in servicing PSA oxygen plants to ensure uninterrupted and efficient oxygen production
      </p>
     ),
    },
   ],
  },
  {
   items: [
    {
     key: "1",
     label: "Comprehensive CT Scan Maintenance",
     children: (
      <p>
       {" "}
       We offer regular maintenance checks, calibration, and repair services to keep your oxygen plant operating at peak performance.
 
      </p>
     ),
    },
   ],
  },
  {
   items: [
    {
     key: "1",
     label: "Reliable Maintenance Contracts",
     children: (
      <p>
       {" "}
       With our AMC and CMC packages, you can rest assured that your PSA oxygen plant is in safe hands
      </p>
     ),
    },
   ],
  },
 ];

 const mriList = [
  {
   items: [
    {
     key: "1",
     label: "Specialized MRI Care",
     children: (
      <p>
       {" "}
       Our team of skilled technicians specializes in servicing PSA oxygen plants to ensure uninterrupted and efficient oxygen production
      </p>
     ),
    },
   ],
  },
  {
   items: [
    {
     key: "1",
     label: "Comprehensive MRI Maintenance",
     children: (
      <p>
       {" "}
       We offer comprehensive maintenance services for MRI scan machines, including coil testing, magnet cooling system checks, and RF shield inspections. 
      </p>
     ),
    },
   ],
  },
  {
   items: [
    {
     key: "1",
     label: "Extend MRI Lifespan with AMC/CMC",
     children: (
      <p>
       {" "}
       Opt for our AMC or CMC services to prolong the lifespan of your MRI machine and avoid costly repairs.      </p>
     ),
    },
   ],
  },
 ];



const Service = () => {
  useEffect(() => {
    // Debugging: Log a message to check if the effect runs
    console.log("Effect running...");
    
    // Scroll to the top when component re-renders
    window.scrollTo(0, 0);
  }, []); 

    return (
     <div>
      <div className="relative mb-8">
       <div className="overlay h-[35rem] opacity-[.6] bg-graydark absolute w-full "></div>
       <img
        src={AboutImg}
        className="h-[35rem] object-top w-full object-cover  "
        alt="MRI"
       />
       <div className="absolute top-48 left-[30px] md:left-[11rem]">
        <div className="flex gap-4 items-center font-bold text-white">
         <span>Home</span>
         <hr className="h-4 w-[2px] bg-white" />
         <span>Services</span>
        </div>
        <div className="mt-4">
         <span className="text-6xl font-bold text-white">SERVICES</span>
        </div>
       </div>
      </div>

      <div className="">
       <div className="flex  py-10  justify-around">
        <div className=" w-[80%]  flex flex-col gap-4">
       <Fade triggerOnce={true} direction="up">
         <h1 className="mb-4 font-bold text-orange md:text-4xl">

         PSA Oxygen Plant Maintenance
         </h1>
         </Fade>
         {psaList.map((props, index) => (
            <Fade triggerOnce={true} direction="up">
          <div key={index}>
           <div>
            <Collapse
             items={props.items}
             className="text-red-500 text-md w-full border-none "
            />
           </div>
          </div>
          </Fade>
         ))}
        </div>
       </div>
      </div>
      <div className="">
       <div className="flex  py-10  justify-around">
        <div className=" w-[80%]  flex flex-col gap-4">

        <Fade triggerOnce={true} direction="up">
       
         <h1 className="mb-4 font-bold text-orange md:text-4xl">

         CT Scan Machine Maintenance
         </h1>
         </Fade>
         {ctList.map((props, index) => (
            <Fade triggerOnce={true} direction="up">
          <div key={index}>
           <div>
            <Collapse
             items={props.items}
             className="text-red-500 w-full border-none "
            />
           </div>
          </div>
          </Fade>
         ))}
        </div>
       </div>
      </div>
      <div className="">
       <div className="flex  py-10  justify-around">
        <div className=" w-[80%]  flex flex-col gap-4">

        <Fade triggerOnce={true} direction="up">

         <h1 className="mb-4 font-bold text-orange md:text-4xl">

         MRI Scan Machine Maintenance
         </h1>
         </Fade>
         {mriList.map((props, index) => (
            <Fade triggerOnce={true} direction="up">
          <div key={index}>
           <div>
            <Collapse
             items={props.items}
             className="text-red-500 w-full border-none "
            />
           </div>
          </div>
          </Fade>
         ))}
        </div>
       </div>
       <div className="">
       <div className="flex  py-10  justify-around">
        <div className=" w-[80%]  flex flex-col gap-4">
        </div>
       </div>
      </div>
      </div>
     </div>
    );
};

export default Service;





 


