import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "@/componets/theme-wrapper";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Saral todo app",
  description: "A Saral (aka simple) todo app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <ThemeWrapper defaultTheme="rose">{children}</ThemeWrapper>
      </body>
    </html>
  );
}
