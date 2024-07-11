import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "@/components/common/Providers";
import "../styles/globals.css";

const montserrat = Montserrat({ 
  weight: ["400", "700"], 
  style: ['normal', 'italic'],
  subsets: ["latin"],
  display: "swap"});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  );
}
