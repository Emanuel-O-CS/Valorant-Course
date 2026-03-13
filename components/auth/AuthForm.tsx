"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

type Props = {
  type: "login" | "signup";
  action: (formData: FormData) => Promise<void>;
  error?: string;
  message?: string;
};

// ─── Submit button with pending state ────────────────────────────────────────
// Must live inside <form> for useFormStatus to work.

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 w-full rounded-full bg-[#FF4655] hover:bg-[#cc3544] disabled:opacity-60 disabled:cursor-not-allowed py-2.5 text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2"
    >
      {pending && (
        <svg
          className="animate-spin h-4 w-4 text-white shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {pending
        ? label === "Sign In"
          ? "Signing in…"
          : "Creating account…"
        : label}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AuthForm({ type, action, error, message }: Props) {
  const isLogin = type === "login";

  return (
    <>
      {/* Error banner */}
      {error && (
        <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Success banner (signup confirmation) */}
      {message && (
        <div className="mb-4 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
          {message}
        </div>
      )}

      {/* Hide form once a success message is shown */}
      {!message && (
        <form action={action} className="flex flex-col gap-4">
          {/* Full name — signup only */}
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="full_name"
                autoComplete="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[#FF4655] focus:outline-none transition-colors"
              />
            </div>
          )}

          {/* Email */}
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

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              {/* Forgot password link — login only */}
              {isLogin && (
                <Link
                  href="/forgot-password"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Forgot password?
                </Link>
              )}
            </div>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              required
              placeholder={isLogin ? "••••••••" : "At least 8 characters"}
              minLength={isLogin ? undefined : 8}
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[#FF4655] focus:outline-none transition-colors"
            />
          </div>

          <SubmitButton label={isLogin ? "Sign In" : "Create Account"} />
        </form>
      )}
    </>
  );
}
