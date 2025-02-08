import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Toaster } from "@/components/ui/toaster";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Toaster />
      <main className="w-full min-h-screen pt-[80px]">{children}</main>
      <Footer />
    </>
  );
};
