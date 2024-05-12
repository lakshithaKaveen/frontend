import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from "../components/images/logo.png"
import { CgMenu } from 'react-icons/cg';

function HomepageNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    // Dashboard Navigation
    const navigateDashBoard = (e, path) => {
        e.preventDefault();
        navigate(path);
    }

    // Login Navigation
    const loginPath = "/frontend/login"

    const navigateSignup = (path) => {
        navigate(path);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavMenus = [
        { title: "Home", path: "/frontend/" },
        { title: "About", path: "/frontend/about" },
        { title: "Services", path: "/frontend/services" },
        { title: "Contact", path: "/frontend/contact" }
    ];

    return (
        <>
        <div className="bg-yellow-300 text-gray-800 text-center py-1">
            This is a frontend component only. <a href="https://cepdnaclk.github.io/e19-co226-Online-Learning-Platform/"><u>Click Here</u></a> for full documentation
        </div>
        <div className="bg-gray-800 text-white pt-4 pb-2 select-none">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div>
                    <div className="inline-block mr-2">
                        <img src={Logo} width="30" className="inline-block transform -translate-y-2" alt="Logo" />
                    </div>
                    <span
                        className="text-2xl sm:text-4xl font-mono inline-block mb-2">
                        Learn<span className="text-red-600">E</span>dge
                    </span>
                </div>

                <div className={`nav-links bg-gray-800 duration-500 md:static absolute md:min-h-fit min-h-[45vh] left-0 ${isMenuOpen ? 'top-[10%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        {NavMenus.map((Menu, index) => (
                            <li key={index} onClick={(e, path) => navigateDashBoard(e, Menu.path)} className="cursor-pointer hover:text-blue-600 ">
                                <span>{Menu.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="flex items-center gap-6">
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigateSignup(loginPath)}
                    >
                        Log In
                    </button>
                    <span
                        onClick={toggleMenu} name={isMenuOpen ? 'close' : 'menu'} className="text-3xl cursor-pointer md:hidden">
                        <CgMenu />
                    </span>
                </div>
            </nav>
        </div>
        </>
    );
}

export default HomepageNavbar;
