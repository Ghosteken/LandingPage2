import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ABeeZee } from "next/font/google";
import Navbar from "./components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });
const aBeeZee = ABeeZee({ weight: "400", subsets: ["latin"], style: "italic" });

export const metadata: Metadata = {
  title: "zwilt - aigberuanicholas",
  description: "Punch assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aBeeZee.className} bg-[#808080] w-full flex justify-center relative `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
