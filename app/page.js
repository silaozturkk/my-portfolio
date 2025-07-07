
import { FaJava } from "react-icons/fa";
import Card from '@/components/Card';
export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 pt-5 lg:pt-20 pb-3 px-2 md:px-0 items-center" >
            <div className="flex flex-col gap-4 justify-start">
                <h2 className="text-5xl md:text-7xl text-neutral-700 font-semibold text-center lg:text-start">Hi, I'm <span className=" text-pink-400">Sıla. </span></h2>
                <h2 className="text-3xl md:text-4xl text-center md:text-start"> I'm a <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 bg-clip-text text-transparent">Computer Engineering Student.</span></h2>
                <p className="text-base md:text-xl text-center md:text-start text-neutral-600">
                    I’m a computer engineering student passionate about learning <br></br>new technologies and developing user-friendly web applications.<br></br> I focus on clean, functional designs and enjoy working in teams<br></br> and constantly improving my skills.
                </p>
            </div>
            <div className="order-first lg:order-none">
                <img
                src="/avatar-3.png" 
                alt="Avatar"
                width={450}
                height={300}
                className=""
            />
            </div>
        </div>

    );
  
}
