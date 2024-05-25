import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import Logodark from "../assets/img/logo-dark.png";

const navlink = [

 {
  title: "HOME",
  to: "/",
 },
 {
  title: "ABOUT US",
  to: "/aboutUs",
 },
 {
  title: "SERVICE",
  to: "/service",
 },
 {
  title: "OUR PRODUCT PORTFOLIO",
  to: "",
  svg: (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
   >
    <path
     strokeLinecap="round"
     strokeLinejoin="round"
     d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
   </svg>
  ),
  subItems: [
   {
    title: "Medical & Surgical Equipment",
    to: "/mse",
   },
   {
    title: "Medical Consumables",
    to: "/medical-consumables",
   },
   {
    title: "Laboratory Solutions",
    to: "/Lab-Solutions",
   },
  ],
 },
 {
  title: "CONTACT",
  to: "/contact",
 },

];

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [currentSubmenuIndex, setCurrentSubmenuIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsTop(scrollTop < 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   // Scroll to the top when the location changes
  //   window.scrollTo(0, 0);
  // }, [location]);

  const handleMouseEnter = (index) => {
    if (navlink[index].subItems) {
      setCurrentSubmenuIndex(index);
      setShowSubmenu(true);
    }
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
    setCurrentSubmenuIndex(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

 return (
   <div className="relative">
     <div
       className={`fixed w-full top-0 z-50 duration-500 ${
         isTop
           ? "bg-white text-graydark sm:mt-8 py-1 sm:pb-3"
           : "text-graydark bg-white py-2 sm:py-5 shadow"
       } ${mobileMenuOpen ? "text-darknavyblue " : ""}`}
     >
       <div className="flex md:justify-around justify-between px-6 py-2 items-center">
         <Link to="/">
           <div className="font-3xl">
             <img
               src={Logodark}
               className="w-32 sm:w-72"
               alt="Logo"
             />
             {/* <img
               src={isTop ? Logo : Logodark}
               className="w-32 sm:w-72"
               alt="Logo"
             /> */}
           </div>
         </Link>
         <div className="lg:hidden block">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={1.5}
             stroke="currentColor"
             className="w-6 h-6 cursor-pointer"
             onClick={toggleMobileMenu}
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
             />
           </svg>
         </div>
         <div className="hidden lg:block">
           <div className="flex gap-2">
             {navlink.map((item, index) => (
               <div
                 key={index}
                 onMouseEnter={() => handleMouseEnter(index)}
                 onMouseLeave={handleMouseLeave}
               >
                 <Link
                   className="flex text-md gap-1 p-3 font-semibold hover:text-orange duration-300"
                   to={item.to}
                 >
                   {item.title} {item.svg}
                 </Link>
                 {showSubmenu &&
                   currentSubmenuIndex === index &&
                   item.subItems && (
                     <div className="absolute bg-orange text-white w-64 rounded-b-lg rounded-l-lg top-19">
                       <ul className="p-2 flex flex-col gap-2">
                         {item.subItems.map((subItem, subIndex) => (
                           <li key={subIndex}>
                             <Link
                               className="w-full flex rounded hover:bg-white font-semibold hover:text-orange px-2 duration-300 py-1"
                               to={subItem.to}
                             >
                               {subItem.title}
                             </Link>
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}
               </div>
             ))}
           </div>
         </div>
       </div>
       {mobileMenuOpen && (
         <div className="lg:hidden absolute top-12 h-screen left-0 w-full bg-orange text-white shadow-md z-40">
           <div className="flex flex-col gap-2 mt-4 p-4">
             {navlink.map((item, index) => (
               <div key={index}>
                 <Link
                   className="flex gap-1 p-3 font-semibold hover:text-orange duration-300"
                   to={item.to}
                   onClick={() => setMobileMenuOpen(false)}
                 >
                   {item.title} {item.svg}
                 </Link>
                 {item.subItems && (
                   <div className="pl-4">
                     {item.subItems.map((subItem, subIndex) => (
                       <Link
                         key={subIndex}
                         className="flex gap-1 p-3 font-semibold hover:text-orange duration-300"
                         to={subItem.to}
                         onClick={() => setMobileMenuOpen(false)}
                       >
                         {subItem.title}
                       </Link>
                     ))}
                   </div>
                 )}
               </div>
             ))}
           </div>
         </div>
       )}
     </div>
   </div>
 );
}
