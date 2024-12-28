import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./globals.css";
import "@/src/styles/global.css";
import "@/src/styles/variables.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Travello Tours project in next",
    template: "%s | Travello Tours project",
  },
  description: "Explore our collection of amazing tours and travel packages at Travello.",
  keywords: "tours, travel, adventure, vacation, tours in America, adventure tours, travel packages, sightseeing, guided tours",
  favicon: "../../public/logo.png",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

      </body>
    </html>
  );
}
