import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Course",
  description: "Browse the full Radiant Academy Valorant course curriculum.",
};

const modules = [
  {
    number: "01",
    title: "Foundations",
    description: "The non-negotiable baseline. Crosshair placement, movement, and mental framework.",
    lessons: [
      "Why 90% of players plateau (and how to break it)",
      "Crosshair placement: the single biggest factor in your aim",
      "Movement fundamentals — counter-strafing, peeks, and positioning",
      "The pre-round checklist every player should run",
    ],
    preview: true,
  },
  {
    number: "02",
    title: "Mechanical Skills",
    description: "Build repeatable aim. From spray control to flick shots — with actual drills.",
    lessons: [
      "Aim training routine: what to practice and why",
      "Spray control patterns for every rifle",
      "Pistol round mechanics",
      "Micro-adjustments and tracking",
    ],
    preview: false,
  },
  {
    number: "03",
    title: "Game Sense",
    description: "Stop reacting. Start reading the game before it happens.",
    lessons: [
      "Map awareness and information processing",
      "Reading utility and predicting rotations",
      "When to trade, when to fall back",
      "Minimap discipline",
    ],
    preview: false,
  },
  {
    number: "04",
    title: "Agent Mastery",
    description: "Your role, mastered. Full breakdowns for every archetype.",
    lessons: [
      "Duelist: entry fragging and space creation",
      "Sentinel: anchoring, watching flanks, and locking sites",
      "Initiator: gather intel, enable teammates",
      "Controller: smoke discipline and default setups",
    ],
    preview: false,
  },
  {
    number: "05",
    title: "Ranked Strategy",
    description: "The meta-game of climbing. How to maximize RR and avoid tilting.",
    lessons: [
      "How ranked really works (and why you're being held back)",
      "Optimal agent pool for climbing",
      "Anti-tilt protocols and session management",
      "Reviewing your own VODs",
    ],
    preview: false,
  },
  {
    number: "06",
    title: "Advanced Systems",
    description: "For Diamond+ players ready to refine every edge.",
    lessons: [
      "Economy management at a high level",
      "Advanced utility lineups",
      "Team coordination and shotcalling",
      "High-level positioning theory",
    ],
    preview: false,
  },
];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 px-6 border-b border-[#1f1f1f]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-sm text-[#FF4655] font-semibold uppercase tracking-wider">
            Full Curriculum
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Radiant Academy Course
          </h1>
          <p className="text-gray-400 max-w-xl text-lg">
            6 modules. 40+ lessons. Everything you need to understand why you&apos;re
            stuck — and exactly how to fix it.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#FF4655]">✓</span>
              40+ video lessons
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FF4655]">✓</span>
              Lifetime access
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FF4655]">✓</span>
              All ranks
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-4">
          {modules.map((mod) => (
            <Card key={mod.number} hoverable>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 text-3xl font-bold text-[#1f1f1f] tabular-nums">
                  {mod.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-lg font-bold">{mod.title}</h2>
                    {mod.preview && (
                      <span className="rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 px-2.5 py-0.5 text-xs font-semibold text-[#00d4ff]">
                        Free Preview
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{mod.description}</p>

                  <ul className="space-y-2">
                    {mod.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#FF4655]" />
                        {lesson}
                        {!mod.preview && (
                          <span className="ml-auto flex-shrink-0 text-gray-600">
                            🔒
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 border-t border-[#1f1f1f]">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Unlock the Full Course</h2>
          <p className="text-gray-400 mb-8">
            One-time payment. Lifetime access. No subscriptions.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF4655] hover:bg-[#cc3544] px-10 py-3 font-semibold text-white transition-colors"
          >
            Get Full Access — $97
          </Link>
          <p className="mt-4 text-xs text-gray-600">
            30-day satisfaction guarantee
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
