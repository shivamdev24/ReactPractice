import  { useState } from "react";
import "./style.css";

const CollapseComponent = ({ title, description, subDescription }) => {
 const [isOpen, setIsOpen] = useState(false);

 const handleToggle = () => {
  setIsOpen(!isOpen);
 };

 return (
  <div className="collapse-component">
   <button onClick={handleToggle} aria-expanded={isOpen}>
    {title} {isOpen ? "Hide" : "Show"} Details
   </button>
   {isOpen && (
    <div className="content">
     <p>{description}</p>
     <p>{subDescription}</p>
     {console.log('working')}
    </div>
   )}
  </div>
 );
};

export default CollapseComponent;
