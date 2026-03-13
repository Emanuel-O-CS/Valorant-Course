import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

/**
 * Returns the current session user or null.
 * Use in Server Components.
 */
export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/**
 * Redirects to /login if the user is not authenticated.
 * Use at the top of protected Server Components.
 */
export async function requireAuth() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  return user;
}

/**
 * Redirects to /dashboard if the user is already authenticated.
 * Use on login/signup pages.
 */
export async function redirectIfAuthenticated() {
  const user = await getUser();
  if (user) {
    redirect("/dashboard");
  }
}
