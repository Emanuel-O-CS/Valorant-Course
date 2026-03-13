import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { redirectIfAuthenticated } from "@/lib/auth";
import { signIn } from "@/app/actions/auth";

export const metadata: Metadata = {
  title: "Log In",
  description: "Sign in to your Radiant Academy account.",
};

type Props = {
  searchParams: Promise<{ error?: string }>;
};

export default async function LoginPage({ searchParams }: Props) {
  await redirectIfAuthenticated();
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-16">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-10 group">
        <Image
          src="/radiant-logo.png"
          alt="Radiant Academy"
          width={32}
          height={32}
          className="h-8 w-auto"
        />
        <span className="text-lg font-bold tracking-wide group-hover:text-[#FF4655] transition-colors">
          Radiant Academy
        </span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-sm rounded-2xl border border-[#1f1f1f] bg-[#111111] p-8">
        <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-8">Sign in to access your course</p>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form action={signIn} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[#FF4655] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[#FF4655] focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-[#FF4655] hover:bg-[#cc3544] py-2.5 text-sm font-semibold text-white transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#FF4655] hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      <Link
        href="/"
        className="mt-8 text-xs text-gray-600 hover:text-gray-400 transition-colors"
      >
        ← Back to home
      </Link>
    </div>
  );
}
