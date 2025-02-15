import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Toaster } from "@/components/ui/toaster";
import { createClient } from "@/utils/supabase/server";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Navbar user={user} />
      <Toaster />
      <main className="max-w-[1440px] w-full mx-auto min-h-screen pt-[80px]">
        {children}
      </main>
      <Footer />
    </>
  );
};
