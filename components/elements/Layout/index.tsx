import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Toaster } from "@/components/ui/toaster";
import { createClient } from "@/utils/supabase/server";
import ToastCallback from "../ToastCallback";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Navbar user={user} />
      <Toaster />
      <ToastCallback key={Date.now()} />
      <main className="w-full max-w-[1440px] mx-auto min-h-screen pt-[80px]">
        {children}
      </main>
      <Footer />
    </>
  );
};
