import NavBar from "@/components/navbar/NavBar";
import React from "react";

interface UIWrapperProps {
  children: React.ReactNode;
}

export default function UIWrapper({ children }: UIWrapperProps) {
  return <NavBar>{children}</NavBar>;
}
