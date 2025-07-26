"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { LuMoon } from "react-icons/lu";
import { GoSun } from "react-icons/go";

import useThemeSwitcher from "./hooks/useTeamsSwitcher";


const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {mode, setMode} = useThemeSwitcher();

    const handleSwitchMode = () => {
        setMode(mode==="light" ? "dark":"light")
    }

    return (
        <div className="shadow-sm sticky top-0 z-50 text-xl flex justify-between items-center px-4 md:px-8 lg:px-20 xl:px-32 py-4 bg-pink-50/90 dark:bg-[#2c1c1e]/85 w-full">
            <div className="border-2 border-pink-400 rounded-full p-1 hover:bg-pink-500  transition-colors duration-300">
                <Link href="/" className="text-pink-400 hover:text-pink-100 text-2xl font-bold">So</Link>
            </div>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-3xl text-pink-500 z-20 ml-auto"
            >
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <div className="pt-1 flex flex-row gap-4" >
                <div className="hidden md:flex flex-row gap-8 items-center justify-center">
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={`relative group overflow-hidden transition-colors duration-300 ${
                        pathname === "/" ? "text-pink-500" : "text-neutral-600 dark:text-pink-100"
                        } hover:text-pink-400`}
                    >
                        Home
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className={`relative group overflow-hidden transition-colors duration-300 ${
                        pathname === "/about" ? "text-pink-500" : "text-neutral-600 dark:text-pink-100"
                        } hover:text-pink-400`}
                    >
                        About
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className={`relative group overflow-hidden transition-colors duration-300 ${
                        pathname === "/contact" ? "text-pink-500" : "text-neutral-600 dark:text-pink-100"
                        } hover:text-pink-400`}
                    >
                        Contact
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                    </Link>
                    <button
                        onClick={handleSwitchMode}
                        className="text-3xl text-neutral-600 z-20 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition dark:text-pink-100"
                    >
                    {mode === "dark" ? <GoSun /> : <LuMoon />}
                    </button>
                    
                </div> 
            </div>
            <div
                className={`md:hidden fixed top-0 left-0 w-full pb-5 bg-pink-100/90 dark:bg-[#2c1c1e]/95 flex flex-col items-center gap-8 pt-20 text-xl transition-transform duration-500  ${
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}>
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-pink-400 transition-colors duration-300 ${
                        pathname === "/" ? "text-pink-500" : "text-neutral-600 dark:text-pink-100"
                    }`}
                    href="/"
                >Home</Link>
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-pink-400 transition-colors duration-300 ${
                        pathname === "/about" ? "text-pink-500" : "text-neutral-600 dark:text-pink-100"
                    }`}
                    href="/about"
                >About Me</Link>
                
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-pink-400 transition-colors duration-300 ${
                        pathname === "/contact" ? "text-pink-500" : "text-neutral-600 dark:text-pink-100"
                    }`}
                    href="/contact"
                >Contact</Link>
                <button
                    onClick={handleSwitchMode}
                            className="text-3xl text-neutral-500 z-20 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition dark:text-pink-100"
                    >
                    {mode === "dark" ? <GoSun /> : <LuMoon />}
                </button>

            </div>
        </div>
    );
};
export default Navbar;