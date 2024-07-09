import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/common/Providers";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JdmShop",
  description: "Kupi slivy i sr20det v podarok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  );
}
