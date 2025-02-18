"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { profiles } from "@/lib/drizzle/schema";
import { db } from "@/lib/drizzle/db";
import { eq } from "drizzle-orm";
import { adminAuthClient } from "@/utils/supabase/admin";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return encodedRedirect("/auth/register", [
      { key: "error", value: "Email and password are required" },
    ]);
  }

  const { error } = await adminAuthClient.createUser({
    email,
    password,
    user_metadata: {
      username: formData.get("username") as string,
      fullname: formData.get("fullname") as string,
      line_id: formData.get("line_id") as string,
      whatsapp_number: formData.get("whatsapp_number") as string,
      elemen: "mahasiswa",
      angkatan: "2019",
    },
    email_confirm: true,
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("/auth/register", [
      { key: "error", value: error.message },
    ]);
  } else {
    return encodedRedirect("/auth/login", [
      { key: "success", value: "Thanks for signing up!" },
    ]);
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("/auth/login", [
      { key: "toastError", value: error.message },
    ]);
  }

  return encodedRedirect("/", [
    { key: "toastSuccess", value: "Successfully logged in." },
  ]);
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("/forgot-password", [
      { key: "error", value: "Email is required" },
    ]);
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect("/forgot-password", [
      { key: "error", value: "Could not reset password" },
    ]);
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect("/forgot-password", [
    {
      key: "success",
      value: "Check your email for a link to reset your password.",
    },
  ]);
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    return encodedRedirect("/protected/reset-password", [
      { key: "error", value: "Password and confirm password are required" },
    ]);
  }

  if (password !== confirmPassword) {
    return encodedRedirect("/protected/reset-password", [
      { key: "error", value: "Passwords do not match" },
    ]);
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return encodedRedirect("/protected/reset-password", [
      { key: "error", value: "Password update failed" },
    ]);
  }

  return encodedRedirect("/protected/reset-password", [
    { key: "success", value: "Password updated" },
  ]);
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/auth/login");
};

export const currentUserAction = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  if (!user) {
    return null;
  }

  const profile = await db.query.profiles.findFirst({
    where: eq(profiles.user_id, user.id),
  });

  console.log(profile);

  if (!profile) {
    return null;
  }

  return { user, profile };
};
