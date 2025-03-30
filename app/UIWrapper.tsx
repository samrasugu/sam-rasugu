import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import React from "react";

interface UIWrapperProps {
  children: React.ReactNode;
}

export default function UIWrapper({ children }: UIWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex flex-1 justify-center align-middle">{children}</main>
      <Footer />
    </div>
  );
}
