"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { LuMoon } from "react-icons/lu";
import { GoSun } from "react-icons/go";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkModeOpen ,setIsDarkModeOpen] = useState(false);

    return (
        <div className="shadow-sm sticky top-0 z-50 text-xl flex flex-row justify-between px-20 md:justify-between lg:px-44 py-4 items-center bg-pink-100">
            <div className="0 border-2 border-pink-400 rounded-full p-1 hover:bg-pink-500  transition-colors duration-300">
                <Link href="/" className="text-pink-400 hover:text-pink-100 text-2xl font-bold">So</Link>
            </div>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-3xl text-pink-500 z-20 "
            >
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <div className="hidden md:flex flex-row gap-8">
                <Link
                    className={`hover:text-pink-400 transition-colors duration-300 ${
                        pathname === "/" ? "text-pink-500" : "text-neatural-600"
                    }`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`hover:text-pink-400 transition-colors duration-300 ${
                        pathname === "/about" ? "text-pink-500" : "text-neatural-600"
                    }`}
                    href="/about"
                >
                    About Me
                </Link>
                <Link
                    className={`hover:text-pink-400 transition-colors duration-300 ${
                        pathname === "/contact" ? "text-pink-500" : "text-neatural-600"
                    }`}
                    href="/contact"
                >
                    Contact
                </Link>
                <button onClick={() => setIsDarkModeOpen(!isDarkModeOpen)}
                    className=" text-3xl text-pink-500 z-20 "
                    >
                    {isDarkModeOpen ? <GoSun /> : <LuMoon />}
                </button>
            </div>
            
            <div
                className={`md:hidden fixed top-0 left-0 w-full pb-5 bg-pink-100/90 flex flex-col items-center gap-8 pt-20 text-xl transition-transform duration-500  ${
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}>
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-pink-400 transition-colors duration-300 ${
                        pathname === "/" ? "text-pink-500" : "text-neatural-600"
                    }`}
                    href="/"
                >Home</Link>
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-pink-400 transition-colors duration-300 ${
                        pathname === "/about" ? "text-pink-500" : "text-neatural-600"
                    }`}
                    href="/about"
                >About Me</Link>
                
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-pink-400 transition-colors duration-300 ${
                        pathname === "/contact" ? "text-pink-500" : "text-neatural-600"
                    }`}
                    href="/contact"
                >Contact</Link>
                <button onClick={() => setIsDarkModeOpen(!isDarkModeOpen)}
                    className="md:hidden text-3xl text-pink-500 z-20 "
                    >
                    {isDarkModeOpen ? <GoSun /> : <LuMoon />}
                </button>
            </div>
        </div>
    );
};
export default Navbar;