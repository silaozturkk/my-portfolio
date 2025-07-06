"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="shadow-md sticky top-0 z-50 karla.className text-xl flex flex-row justify-between px-25 py-4 items-center">
            <div className="0">
                <Link href="/" className="text-purple-600 hover:text-purple-400 transition-colors duration-300 text-2xl font-bold">Sıla</Link>
            </div>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-3xl text-purple-500 z-20 "
            >
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <div className="hidden lg:flex flex-row gap-8">
                <Link
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/about" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/about"
                >
                    About Me
                </Link>
                <Link
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/education" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/education"
                >
                    Education
                </Link>
                <Link
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/experience" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/experience"
                >
                    Experience
                </Link>
                <Link
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/contact" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/contact"
                >
                    Contact
                </Link>
            </div>
            
            <div
                className={`lg:hidden fixed top-0 left-0 w-full bg-white flex flex-col items-center gap-8 pt-20 text-xl transition-transform duration-500  ${
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/"
                >Home</Link>
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/about" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/about"
                >About Me</Link>
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/education" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/education"
                >Education</Link>
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/experience" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/experience"
                >Experience</Link>
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-purple-400 transition-colors duration-300 ${
                        pathname === "/contact" ? "text-purple-500" : "text-neatural-600"
                    }`}
                    href="/contact"
                >Contact</Link>
            </div>
        </div>
    );
};
export default Navbar;