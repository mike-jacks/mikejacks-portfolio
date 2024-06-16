import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "./components/MenuBar/MenuBar";
import { ThemeProvider } from "./components/context/ThemeContext";
import styles from "./root.module.css";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Jacks Resume Portfolio Site",
  description: "Portfolio website for Mike Jacks projects",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-dvh`}>
        <MenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <RootLayout>{children}</RootLayout>
    </ThemeProvider>
  );
}
