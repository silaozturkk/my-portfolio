import './globals.css'
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import SocialLinks from '@/components/SocialLinks';

export const metadata = {
  title: "Sıla Öztürk",
  description: "",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // İstediğin ağırlıklara göre güncelleyebilirsin
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
      className={`${poppins.className} flex flex-col min-h-screen bg-cover bg-center bg-[url('/bg-13.jpg')] dark:bg-[url('/darkmode.jpg')]`}
      >
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script>
        <Navbar />
        <SocialLinks />
        <div className='flex-grow'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}