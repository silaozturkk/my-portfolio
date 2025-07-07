function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-gray-500 py-4 md:py-6 flex justify-around items-center w-full border-t bottom-0 text-[12px] md:text-base ">
            <p className="">
                {currentYear} © All Rights Reserved.
            </p>
            <div className="footer-animation flex items-center">
                <p className="text-fade-loop flex items-center">
                    Build with <span className="px-1 text-2xl text-pink-500">&#9829;</span> by Sıla Öztürk
                </p>
            </div>
        </footer>
    );
}
export default Footer;
