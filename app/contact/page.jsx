import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Education = () => {
    return (
        <div className="flex flex-col w-full min-h-screen items-center">
            <div className="flex items-center justify-center text-4xl md:text-5xl pt-4 md:pt-10 animate-text-fade-in-up">
                <h1 className="bg-gradient-to-r from-pink-400 via-pink-600 to-red-600 bg-clip-text text-transparent animate-fade-loop drop-shadow-lg font-bold">Contact <span className="text-neutral-600  dark:text-white font-semibold">Me</span><span className="text-pink-300 text-[45px]"> 💓</span></h1>
            </div>
            <div className="flex items-center justify-center flex-col lg:flex-row w-full px-4 md:px-8 lg:px-20 dark:text-white pt-8">
                <form action="https://formsubmit.co/ozturksila100@gmail.com" method="POST" className="flex flex-col gap-4 w-full lg:w-3/5 order-last lg:order-first animate-text-fade-in-left">
                    <div className="flex flex-col">
                        <label>Name</label>
                        <input type="text" name="name" required className="px-2 text-neutral-700 rounded-md bg-white shadow-xl w-full lg:max-w-lg h-10 border-neutral-300 border-2 hover:shadow-pink-100 dark:hover:shadow-none hover:border-pink-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input type="email" name="email" required className="px-2 text-neutral-700 shadow-xl bg-white rounded-md w-full lg:max-w-lg h-10 border-neutral-300 border-2 hover:shadow-pink-100 dark:hover:shadow-none hover:border-pink-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Subject</label>
                        <input type="subject" name="subject" required className="px-2 text-neutral-700 shadow-xl bg-white rounded-md w-full lg:max-w-lg h-10 border-neutral-300 border-2 hover:shadow-pink-100 dark:hover:shadow-none hover:border-pink-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Message</label>
                        <textarea name="message" required rows="5" className="px-2 text-neutral-700 text-xl shadow-xl bg-white rounded-md w-full lg:max-w-lg border-neutral-300 border-2 hover:shadow-pink-100 dark:hover:shadow-none hover:border-pink-300"></textarea>
                    </div>
                    <div>
                        <button className="h-8 w-full lg:max-w-lg shadow-xl rounded-md text-white bg-pink-600 hover:bg-pink-500 hover:shadow-pink-100 dark:hover:shadow-none transition-colors duration-300 mb-5">Send Message</button>
                    </div>
                </form>
                <div className="flex flex-col items-center pt-8 lg:pt-0 lg:w-2/5 animate-text-fade-in-right">
                    <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4">
                        <p className="text-3xl font-semibold text-pink-600 order-last lg:order-first animate-text-delay-1">Connect With Me</p>
                        <img 
                            src="/avatar-8.png" 
                            alt="Avatar"
                            width={250}
                            className="w-48 h-auto animate-text-delay-2" 
                        />
                    </div>
                    <p className="px-4 lg:px-0 text-neutral-600 dark:text-white md:text-xl text-justify mt-6 max-w-lg animate-text-delay-3">
                        As I continue to grow and learn on my journey as a <span className="text-pink-500">Computer Engineering Student,</span> I invite you to explore my portfolio where I showcase the projects I've worked on so far. Let's connect and share ideas, learn together, and create inspiring solutions through the power of technology.
                    </p>
                    <div className="flex flex-row gap-5 p-5 mt-6 animate-text-delay-4">
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