import './globals.css'
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';


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
    <html lang="en">
      <body
      className={`${poppins.className} flex flex-col min-h-screen bg-cover bg-center`}
      style={{
          backgroundImage: "url('/bg-13.jpg')",
        }}>
        <Navbar />
        <div className='flex-grow'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}