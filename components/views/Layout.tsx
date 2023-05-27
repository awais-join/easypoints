import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <div className={`flex-1 bg-white text-black`}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
