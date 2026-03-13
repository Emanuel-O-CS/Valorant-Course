import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { redirectIfAuthenticated } from "@/lib/auth";
import { signUp } from "@/app/actions/auth";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Radiant Academy account and start your Valorant coaching journey.",
};

type Props = {
  searchParams: Promise<{ error?: string; message?: string }>;
};

export default async function SignupPage({ searchParams }: Props) {
  await redirectIfAuthenticated();
  const { error, message } = await searchParams;

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
        <h1 className="text-2xl font-bold mb-1">Create your account</h1>
        <p className="text-sm text-gray-500 mb-8">Start your journey to Radiant</p>

        <AuthForm type="signup" action={signUp} error={error} message={message} />

        <p className="mt-4 text-center text-xs text-gray-600">
          By signing up you agree to our{" "}
          <Link href="/terms" className="hover:text-gray-400 underline">
            Terms of Service
          </Link>
        </p>

        <p className="mt-5 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-[#FF4655] hover:underline">
            Log in
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
