import Card from "@/components/Card";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

const About = () => {
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
        </div>
    );
}
export default About;