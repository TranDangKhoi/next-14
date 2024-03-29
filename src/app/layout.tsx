import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFonts from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "500", "700"],
});

const myFont = localFonts({
  src: [
    {
      path: "./fonts/Lemonada-Light.ttf",
      weight: "100",
    },
    {
      path: "./fonts/Lemonada-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Lemonada-Medium.ttf",
      weight: "500",
    },
  ],
  display: "swap",
  variable: "--font-lemonada",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.variable}`}>{children}</body>
    </html>
  );
}
