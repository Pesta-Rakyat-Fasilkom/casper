import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const supabase = await createClient();
  await supabase.auth.signOut();

  return redirect("/");
}
