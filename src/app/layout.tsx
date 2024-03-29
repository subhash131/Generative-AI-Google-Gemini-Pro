import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ContextProvider from "@/context/ContextProvider";

const sans = Poppins({
  subsets: ["latin-ext"],
  weight: ["300", "100", "200", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Google AI",
  description: "Code By Subhash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} bg-black`}>
        <ContextProvider>
          <Toaster containerClassName="text-xs" />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
