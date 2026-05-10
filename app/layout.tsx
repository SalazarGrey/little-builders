import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Builders – Angličtina pro děti prakticky",
  description:
    "Naučíme tvé děti anglicky prostřednictvím praktických dovedností – údržba domácnosti, práce se dřevem, opravy a bezpečná práce s nářadím.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${roboto.variable} ${robotoCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
