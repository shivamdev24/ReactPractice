import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import AboutImg from "../assets/img/AboutUs/AboutUs.jpg"


import { Collapse } from "antd";

const collapseList = [
 {
  items: [
   {
    key: "1",
    label: "This is panel header 1",
    children: (
     <p>
      {" "}
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
     </p>
    ),
   },
  ],
 },
 {
  items: [
   {
    key: "1",
    label: "This is panel header 1",
    children: (
     <p>
      {" "}
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
     </p>
    ),
   },
  ],
 },
 {
  items: [
   {
    key: "1",
    label: "This is panel header 1",
    children: (
     <p>
      {" "}
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
     </p>
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
       <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
       <img
        src={AboutImg}
        className="h-[29rem] object-top w-full object-cover  "
        alt=""
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

          MANAGEMENT CONSULTING
         </h1>
         </Fade>
         {collapseList.map((props, index) => (
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

          MANAGEMENT CONSULTING
         </h1>
         </Fade>
         {collapseList.map((props, index) => (
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

          MANAGEMENT CONSULTING
         </h1>
         </Fade>
         {collapseList.map((props, index) => (
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

        <Fade triggerOnce={true} direction="up">
         
         <h1 className="mb-4 font-bold text-orange md:text-4xl">

          MANAGEMENT CONSULTING
         </h1>
         </Fade>
         {collapseList.map((props, index) => (
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
      </div>
     </div>
    );
};

export default Service;





 


