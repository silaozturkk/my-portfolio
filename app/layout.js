import './globals.css'
import Navbar from '@/components/Navbar.jsx';
import { Karla } from 'next/font/google';

export const metadata = {
  title: "Sıla Öztürk",
  description: "",
};

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700'],  // İstersen diğer ağırlıkları da ekleyebilirsin
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}