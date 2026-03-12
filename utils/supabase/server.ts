import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

export function createClient() {
  const cookieStore = cookies();

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        // Newer Next versions
        if (typeof (cookieStore as any).getAll === "function") {
          return (cookieStore as any).getAll();
        }

        // Older Next versions: no getAll available
        // Supabase can't read cookies properly without getAll.
        // Returning [] prevents crash, but auth/session won't work reliably.
        return [];
      },

      setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            (cookieStore as any).set?.(name, value, options);
          });
        } catch {
          // Server Component: cookies may be readonly; ignore
        }
      },
    },
  });
}
