"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.scss";
import { usePathname } from "next/navigation";
import SplashScreen from "@/commonComponents/uikit/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/flights";
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          children
        )}
      </body>
    </html>
  );
}
