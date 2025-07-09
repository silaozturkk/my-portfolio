import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Education = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center text-4xl md:text-5xl pt-4 md:pt-10">
                <h1 className="bg-gradient-to-r from-pink-400 via-pink-600 to-red-600 bg-clip-text text-transparent animate-fade-loop drop-shadow-lg font-bold">Contact <span className="text-neutral-600  dark:text-white font-semibold">Me</span><span className="text-pink-300 text-[45px]"> 💓</span></h1>
            </div>
            <div className="flex items-start flex-col lg:flex-row">
                <form action="https://formsubmit.co/ozturksila100@gmail.com" method="POST" className="flex flex-col gap-4 px-5 md:px-0 md:mt-8 md:mx-35 lg:mt-0 lg:m-20 text-pink-600 dark:text-pink-200 md:text-xl order-last md:order-first">
                    <div className="flex flex-col">
                        <label>Name</label>
                        <input type="text" name="name" required className="px-2 text-neutral-700 rounded-md bg-white shadow-xl w-80 md:w-120 h-10 border-neutral-300 border-2 hover:shadow-pink-100 dark:hover:shadow-none hover:border-pink-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input type="email" name="email" required className="px-2 text-neutral-700 shadow-xl bg-white rounded-md w-80 md:w-120 h-10 border-neutral-300 border-2 hover:shadow-pink-100 dark:hover:shadow-none hover:border-pink-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Subject</label>
                        <input type="subject" name="subject" required className="px-2 text-neutral-700 shadow-xl bg-white rounded-md w-80 md:w-120 h-10 border-neutral-300 border-2 hover:shadow-pink-100 dark:hover:shadow-none hover:border-pink-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Message</label>
                        <textarea name="message" required rows="5" className="px-2 text-neutral-700 text-xl shadow-xl bg-white rounded-md w-80 md:w-120 border-neutral-300 border-2 hover:shadow-pink-100 dark:hover:shadow-none hover:border-pink-300"></textarea>
                    </div>
                    <div>
                        <button className="h-8 w-80 md:w-120 shadow-xl rounded-md text-white bg-pink-600 hover:bg-pink-500 hover:shadow-pink-100 dark:hover:shadow-none transition-colors duration-300 mb-5">Send Message</button>
                    </div>
                </form>
                <div className="flex flex-col items-center pt-4 md:pt-10">
                    <div className="flex flex-col lg:flex-row  md:items-end lg:pr-36 order-last md:order-first">
                        <p className="lg:py-6 pb-4 text-3xl font-semibold text-pink-600 order-last lg:order-first">Connect With Me</p>
                        <img 
                            src="/avatar-8.png" 
                            alt="Avatar"
                            width={250}
                            className="" 
                        />
                    </div>
                    <p className="lg:px-20  px-4 text-neutral-600 dark:text-white md:text-xl text-justify">
                        As I continue to grow and learn on my journey as a <span className="text-pink-500">Computer Engineering Student,</span> I invite you to explore my portfolio where I showcase the projects I’ve worked on so far. Let’s connect and share ideas, learn together, and create inspiring solutions through the power of technology.
                    </p>
                    <div className="flex flex-row gap-5 p-5 lg:pr-135 md:pr-160">
                        <a 
                            href="https://github.com/silaozturkk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 dark:hover:text-purple-300 text-pink-600 dark:text-pink-200 transition-colors duration-300 text-5xl"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/sıla-öztürk1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 text-pink-600 dark:text-pink-200 transition-colors duration-300 text-5xl"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Education;