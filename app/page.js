
export default function Home() {
    return (
        <div className=" dark:text-white flex flex-col lg:flex-row justify-center lg:justify-between pt-5 lg:pt-12 pb-3 px-2 lg:px-20 md:px-0 lg:items-center w-full border-none " >
            <div className="border-none flex flex-col gap-4  lg:w-1/2 items-center justify-center lg:items-start">
                <h2 className="text-5xl md:text-7xl text-neutral-700 dark:text-white font-semibold text-start">Hi, I'm <span className=" text-pink-400">Sıla. </span></h2>
                <h2 className="font-semibold md:text-4xl lg:text-3xl text-center lg:text-start"> I'm a <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 bg-clip-text text-transparent">Computer Engineering Student.</span></h2>
                <p className="text-base md:text-xl  text-justify px-2 md:px-12 lg:px-0 lg:text-start text-neutral-600 dark:text-white">
                    I’m passionate about learning new technologies and developing user-friendly web applications. I focus on clean, functional designs and enjoy working in teams and constantly improving my skills.
                </p> 
            </div>
            <div className="border-none order-first items-center justify-between lg:order-none lg:w-1/2">
                <img
                src="/avatar-9.png" 
                alt="Avatar"
                width={400}
                className="w-full h-auto"
            />
            </div>
            
        </div>

    );
  
}
