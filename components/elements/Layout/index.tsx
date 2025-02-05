import React from "react";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="w-full min-h-screen pt-[80px]">{children}</main>
      <Footer />
    </>
  );
};
