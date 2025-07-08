"use client";
import Card from "@/components/Card";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { act, useState } from "react";


const About = () => {
    const [activeTab, setActiveTab ] = useState("Experience");

    return (
        <div className="flex flex-col gap-20 pt-4 md:pt-10">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around  ">
                <img 
                    src="/avatar-5.png" 
                    alt="Avatar"
                    width={500}
                    height={350}
                    className=""
                >
                </img>
                <div className="lg:px-14 flex flex-col gap-6 md:gap-12 pt-4 lg:pt-14">
                    <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-pink-400 via-pink-600 to-red-600 bg-clip-text text-transparent animate-fade-loop drop-shadow-lg font-semibold md:font-bold text-center lg:text-start">About Me</h1>
                    <div className="flex flex-col gap-4 px-3 md:px-4 lg:px-0 text-neutral-600 text-base md:text-xl text-justify lg:text-start">
                        <p>
                            Hi, I'm Sıla Öztürk, a Computer Engineering student based in Istanbul, Turkey. I'm passionate about creating solutions that make people's lives easier through technology. I enjoy solving problems by writing clean and efficient code, and I continuously work on improving myself by learning new tools and frameworks.
                        </p>
                        <p>
                            Currently, I’m focusing on front-end development using React, building real-world applications through personal projects and internships. I value teamwork and open communication, and I enjoy learning from others as well as sharing my own knowledge.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center pt-10">
                <h1 className="text-6xl bg-gradient-to-r from-pink-400 via-pink-600 to-red-600 bg-clip-text text-transparent animate-fade-loop drop-shadow-lg font-semibold">Skills</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-8 md:py-15">
                    <Card icon={FaJava} /> 
                    <Card icon={IoLogoJavascript} />
                    <Card icon={FaHtml5} />
                    <Card icon={RiTailwindCssFill} />
                    <Card icon={FaCss3Alt} />
                    <Card icon={FaReact} />
                    <Card icon={RiNextjsFill} />
                    <Card icon={FaPython} />
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-pink-300 via-pink-500 to-red-500 bg-clip-text text-transparent animate-fade-loop drop-shadow-lg font-semibold md:font-bold text-center ">{activeTab}</h1>
                <div className="flex justify-center">
                    <div className="flex flex-row items-center gap-2 shadow-3xl bg-white px-3 py-3 rounded-xl">
                        <button type="button" 
                            className={`px-2 py-1.5 rounded-md  
                            ${activeTab==="Experience" ? "bg-pink-300" : "hover:bg-gray-200"} `}
                            onClick={()=> setActiveTab("Experience")}
                        >
                            Experience</button>
                        <button type="button" 
                            className={`px-2 py-1.5 rounded-md 
                            ${activeTab==="Education" ? "bg-pink-300":"hover:bg-gray-200"}`}
                            onClick={() => {setActiveTab("Education");}}
                        >
                            Education</button>
                    </div>
                </div>
                <div>
                    <div className={`${activeTab === "Experience" ? "" : "hidden"}`}>
                        <div className="flex flex-col lg:flex-row justify-center items-center">
                            <img 
                                src="/avatar-7.png" 
                                alt="Avatar"
                                width={450}
                                height={300}
                                className="order-last"
                            />
                          
                            <div className="flex flex-col gap-1 mx-5 lg:mx-32 text-neutral-600">
                                <h1 className="text-xl md:text-2xl bg-gradient-to-r text-pink-500 drop-shadow-lg font-semibold md:font-bold">Software Intern — Beylikdüzü Municipality<span className="hidden md:flex">, Directorate of Information Technologies</span></h1>
                                <p className="text-base text-pink-500">June 2025 – July 2025</p>
                                <p>Learned web development technologies including JavaScript, React, and Next.js during the internship.</p>
                                <p>Developed a personal portfolio website using React, Next.js, and Tailwind CSS to showcase my projects and skills.</p>
                                <p>Built a simple blog application where users can view and add posts, applying component-based architecture and basic state management.</p>
                                <p>Gained hands-on experience in modern web development processes and project implementation.</p>
                            </div>

                        </div>
                    </div>

                    <div className={`${activeTab === "Education" ? "" : "hidden"}`}>
                        <div className="flex flex-col lg:flex-row justify-center items-center">
                            <div className="flex flex-col gap-1 mx-5 lg:mx-32 text-neutral-600">
                                <h1 className="text-2xl bg-gradient-to-r text-pink-500 drop-shadow-lg font-semibold md:font-bold ">Computer Engineering | İstanbul Rumeli University </h1>
                                <p className="text-base text-pink-500">2023-2027</p>
                                <p>I am a 3nd-year Computer Engineering student at İstanbul Rumeli University with a GPA of 3.62/4.00.</p>
                                <p>During my studies, I have completed courses such as Object-Oriented Programming, Data Structures, Computer Architecture, Visual Programming, and Numerical Analysis.</p>
                                <p>I develop personal and academic projects using Java, JavaScript, React and Next.js.</p>
                                <p>I am particularly interested in software development, algorithms, and data analysis, and I am continuously working to improve myself in these areas.</p>
                            </div>
                            <img 
                                src="/avatar-6.png" 
                                alt="Avatar"
                                width={450}
                                height={300}
                                className=""
                            >
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;