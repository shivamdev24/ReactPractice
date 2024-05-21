import { useState } from "react"; 
import AboutImg from "../assets/img/AboutUs/AboutUs.jpg"



const colapsDetails = [
    {
        title:"",
        description: "",
        subDescription: [
            {
                title:"",
            },
            {
                title:"",
            },
            {
                title:"",
            },
        ]
    },
]


const Service = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
     <div>
      <div className="relative">
       <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
       <img
        src={AboutImg}
        className="h-[29rem] object-top w-full object-cover  "
        alt=""
       />
       <div className="absolute top-48 left-[11rem]">
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
     
      <button
       type="button"
       className={`collapsible ${activeIndex === 0 ? "active" : ""}`}
       onClick={() => handleToggle(0)}
      >
       Open Collapsible sdfsdf
      </button>
      <div
       className="content"
       style={{ display: activeIndex === 0 ? "block" : "none" }}
      >
       <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
       </p>
      </div>

      <p>Collapsible Set:</p>
      <button
       type="button"
       className={`collapsible ${activeIndex === 1 ? "active" : ""}`}
       onClick={() => handleToggle(1)}
      >
       Open Section 1
      </button>
      <div
       className="content"
       style={{ display: activeIndex === 1 ? "block" : "none" }}
      >
       <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
       </p>
      </div>
      <button
       type="button"
       className={`collapsible ${activeIndex === 2 ? "active" : ""}`}
       onClick={() => handleToggle(2)}
      >
       Open Section 2
      </button>
      <div
       className="content"
       style={{ display: activeIndex === 2 ? "block" : "none" }}
      >
       <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
       </p>
      </div>
      <button
       type="button"
       className={`collapsible ${activeIndex === 3 ? "active" : ""}`}
       onClick={() => handleToggle(3)}
      >
       Open Section 3
      </button>
      <div
       className="content"
       style={{ display: activeIndex === 3 ? "block" : "none" }}
      >
       <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
       </p>
      </div>
     </div>
    );
};

export default Service;
