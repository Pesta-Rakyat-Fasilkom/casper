import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Toaster } from "@/components/ui/toaster";
import ToastCallback from "../ToastCallback";
import { getUserWithProfile } from "@/app/actions";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { user, profile } = await getUserWithProfile();
  return (
    <>
      <Navbar user={user} profile={profile} />
      <Toaster />
      <ToastCallback key={Date.now()} />
      <main className="w-full max-w-[1440px] mx-auto min-h-screen pt-[80px]">
        {children}
      </main>
      <Footer />
    </>
  );
};
