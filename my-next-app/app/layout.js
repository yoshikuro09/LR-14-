import { Josefin_Sans } from 'next/font/google';
import "./_styles/globals.css";
import Header from './_components/Header';


const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "My Wild Oasis App",
  description: "A simple app using Tailwind CSS with custom colors",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-accent-50 min-h-screen flex flex-col`}>

      <Header />
      
        <main className="flex-grow">{children}</main>

        <footer className="bg-primary-900 text-primary-50 p-4 text-center">
          &copy; 2025 Wild Oasis
        </footer>
      </body>
    </html>
  );
}
