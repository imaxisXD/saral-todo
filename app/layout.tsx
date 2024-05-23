import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "@/components/theme-wrapper";
import Sidebar from "@/components/sidebar";
import { Provider } from "jotai/react";

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
        <Provider>
          <ThemeWrapper defaultTheme="default">
            <div className="flex w-full">
              <Sidebar />
              {children}
            </div>
          </ThemeWrapper>
        </Provider>
      </body>
    </html>
  );
}
