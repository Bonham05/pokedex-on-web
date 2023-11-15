import "./globals.css";
import type { Metadata } from "next";
import { Inter, DotGothic16 } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const dotGothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});

const pokeFont = localFont({
  // src: "./styles/fonts/Arcadepix_Plus.ttf",
  src: "./styles/fonts/Pokemon_Classic.ttf",
  // weight: "800",
  // style: "Regular",
});

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="leading-4 box-border">
      {/* <body className={dotGothic16.className}>{children}</body> */}
      <body className={`${pokeFont.className} bg-black`}>{children}</body>
    </html>
  );
}
