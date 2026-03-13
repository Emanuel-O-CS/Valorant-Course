import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/radiant-logo.png"
                alt="Radiant Academy"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
              <span className="font-bold tracking-wide">Radiant Academy</span>
            </Link>
            <p className="text-sm text-gray-500">
              Professional Valorant coaching for every rank. Stop guessing. Start climbing.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-gray-300 uppercase tracking-wider text-xs">
                Product
              </span>
              <Link href="/course" className="text-gray-500 hover:text-white transition-colors">
                Course
              </Link>
              <Link href="/#pricing" className="text-gray-500 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/#reviews" className="text-gray-500 hover:text-white transition-colors">
                Reviews
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-gray-300 uppercase tracking-wider text-xs">
                Account
              </span>
              <Link href="/login" className="text-gray-500 hover:text-white transition-colors">
                Log in
              </Link>
              <Link href="/signup" className="text-gray-500 hover:text-white transition-colors">
                Sign up
              </Link>
              <Link href="/dashboard" className="text-gray-500 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1f1f1f] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Radiant Academy. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Not affiliated with Riot Games.
          </p>
        </div>
      </div>
    </footer>
  );
}
