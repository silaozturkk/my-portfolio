const Education = () => {
    return (
        <div>
            <div className="flex items-center justify-center text-5xl pt-10">
                <h1 className="bg-gradient-to-r from-pink-400 via-pink-600 to-red-600 bg-clip-text text-transparent animate-fade-loop drop-shadow-lg font-bold">Contact <span className="text-neutral-600 font-semibold">Me</span><span className="text-pink-300 text-[45px]"> 💓</span></h1>
            </div>
            <div className="flex">
                <form className="flex flex-col gap-4 m-20 text-pink-600 text-xl">
                    <div className="flex flex-col">
                        <label>Name</label>
                        <input className="rounded-md bg-white shadow-xl w-120 h-10 border-neutral-300 border-2 hover:shadow-pink-200 hover:border-pink-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input className="shadow-xl bg-white rounded-md w-120 h-10 border-neutral-300 border-2 hover:shadow-pink-200 hover:border-pink-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Subject</label>
                        <input className="shadow-xl bg-white rounded-md w-120 h-10 border-neutral-300 border-2 hover:shadow-pink-200 hover:border-pink-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Message</label>
                        <textarea rows="5" className="shadow-xl bg-white rounded-md w-120 border-neutral-300 border-2 hover:shadow-pink-200 hover:border-pink-300"></textarea>
                    </div>
                    <div>
                        <button className="h-8 w-120 shadow-xl rounded-md text-white bg-pink-600 hover:bg-pink-500 hover:shadow-pink-200 ">Send Message</button>
                    </div>
                </form>
                <div className="flex flex-col items-center pt-10">
                    <img 
                        src="/avatar-8.png" 
                        alt="Avatar"
                        width={250}
                        
                    />
                    <p className="px-20 text-neutral-600 text-xl">
                        As I continue to grow and learn on my journey as a <span className="text-pink-500">Computer Engineering Student,</span> I invite you to explore my portfolio where I showcase the projects I’ve worked on so far. Let’s connect and share ideas, learn together, and create inspiring solutions through the power of technology.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Education;