import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Toaster } from "@/components/ui/toaster";
import { createClient } from "@/utils/supabase/server";
import ToastCallback from "../ToastCallback";
import { db } from "@/lib/drizzle/db";
import { profiles } from "@/lib/drizzle/schema";
import { eq } from "drizzle-orm";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profile = user
    ? ((
        await db
          .select()
          .from(profiles)
          .where(eq(profiles.user_id, user.id))
          .limit(1)
      )[0] ?? null)
    : null;

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
