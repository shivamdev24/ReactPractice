import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navlink = [
    {
        title: "HOME",
        to: "/",
        svg: "",
    },
    {
        title: "ABOUT US",
        to: "/",
        svg: "",
    },
    {
        title: "SERVICE",
        to: "/",
        svg: "",
    },
    {
        title: "OUR PRODUCT PORTFOLIO",
        to: "/",
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
            // Add submenu items
            {
                title: "Medical & Surgical Equipment",
                to: "/",
            },
            {
                title: "Medical Consumables",
                to: "/",
            },
            {
                title: "Laboratory Solutions",
                to: "/",
            },
        ],
    },
    {
        title: "CONTACT",
        to: "/",
        svg: "",
    },
];

export default function Navbar() {
    const [isTop, setIsTop] = useState(true);
    const [showSubmenu, setShowSubmenu] = useState(false); // State to control submenu visibility

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isTop = scrollTop < 50;

            setIsTop(isTop);
        };

        // Add event listener when component mounts
        window.addEventListener("scroll", handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to toggle submenu visibility
    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    return (
        <div
            className={`sticky z-[100   ] top-0 duration-500 bg-gray-800 ${isTop ? "text-white" : "text-black bg-white border "}`}
        >
            <div className="flex justify-around p-6 items-center">
                <div className="font-3xl">
                    <span className="text-3xl font-bold">
                        <span className="text-blue-500">Your</span>Logo.
                    </span>
                </div>
                <div className="hidden md:block">
                    <div className="flex gap-8  ">
                        {navlink.map((items, index) => (
                            <div
                                key={index}
                                onMouseEnter={toggleSubmenu}
                                onMouseLeave={toggleSubmenu}
                            >
                                <Link className="flex gap-1 p-3 " to={items.to}>
                                    {items.title} {items.svg}
                                </Link>
                                {/* Render submenu items if showSubmenu is true */}
                                <div className="absolute bg-gray-100 w-64 rounded-b-lg  rounded-l-lg top-19">
                                    {showSubmenu &&
                                        items.subItems &&
                                        items.subItems.length > 0 && (
                                            <ul className="p-2 flex flex-col gap-2">
                                                {items.subItems.map(
                                                    (subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link
                                                                className="w-full flex rounded hover:bg-white px-3 py-1"
                                                                to={subItem.to}
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
}
