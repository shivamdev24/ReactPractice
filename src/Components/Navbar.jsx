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
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [currentSubmenuIndex, setCurrentSubmenuIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isTop = scrollTop < 10;
            setIsTop(isTop);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

    return (
        <div
            className={`fixed w-full top-0 z-50 duration-500 ${
                isTop ? "text-white lg:pt-6 " : "text-black bg-white border "
            }`}
        >
            <div className="flex md:justify-around justify-between px-5 p-6 items-center">
                <div className="font-3xl">
                    <span className="text-3xl font-bold">
                        <span className="text-blue-500">Your</span>Logo.
                    </span>
                </div>
                <div className="lg:hidden block">
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
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
                <div className="hidden md:block">
                    <div className="flex gap-8">
                        {navlink.map((items, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    className="flex gap-1 p-3 font-semibold hover:text-blue-500 duration-300"
                                    to={items.to}
                                >
                                    {items.title} {items.svg}
                                </Link>
                                {showSubmenu &&
                                    currentSubmenuIndex === index &&
                                    items.subItems && (
                                        <div className="absolute bg-blue-500 text-white w-64 rounded-b-lg rounded-l-lg top-19">
                                            <ul className="p-2 flex flex-col gap-2">
                                                {items.subItems.map(
                                                    (subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link
                                                                className="w-full flex rounded hover:bg-white font-semibold hover:text-blue-500 px-2 duration-300 py-1"
                                                                to={subItem.to}
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
