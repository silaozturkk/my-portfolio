"use client";
import { useState } from "react";
import { LuMoon } from "react-icons/lu";
import { GoSun } from "react-icons/go";

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="text-3xl text-pink-500 z-20 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
            {isDarkMode ? <GoSun /> : <LuMoon />}
        </button>
    );
}
