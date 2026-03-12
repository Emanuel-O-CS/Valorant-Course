import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[#1f1f1f] bg-[#0a0a0a]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
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

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link href="/course" className="hover:text-white transition-colors">
            Course
          </Link>
          <Link href="/#reviews" className="hover:text-white transition-colors">
            Reviews
          </Link>
          <Link href="/#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex text-sm text-gray-400 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF4655] hover:bg-[#cc3544] px-5 py-2 text-sm font-semibold text-white transition-colors"
          >
            Get Access
          </Link>
        </div>
      </nav>
    </header>
  );
}
