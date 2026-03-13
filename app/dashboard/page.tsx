import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { requireAuth } from "@/lib/auth";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your Radiant Academy learning dashboard.",
};

// Placeholder module data — will be replaced with real DB data
const modules = [
  { number: "01", title: "Foundations", lessons: 4, completed: 4 },
  { number: "02", title: "Mechanical Skills", lessons: 4, completed: 2 },
  { number: "03", title: "Game Sense", lessons: 4, completed: 0 },
  { number: "04", title: "Agent Mastery", lessons: 4, completed: 0 },
  { number: "05", title: "Ranked Strategy", lessons: 4, completed: 0 },
  { number: "06", title: "Advanced Systems", lessons: 4, completed: 0 },
];

export default async function DashboardPage() {
  const user = await requireAuth();

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons, 0);
  const completedLessons = modules.reduce((sum, m) => sum + m.completed, 0);
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Dashboard Navbar */}
      <header className="border-b border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm text-gray-500">
              {user.email}
            </span>
            <form action="/auth/signout" method="post">
              <button
                type="submit"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold mb-1">
            Welcome back
            {user.email ? `, ${user.email.split("@")[0]}` : ""}
          </h1>
          <p className="text-gray-500 text-sm">Pick up where you left off.</p>
        </div>

        {/* Progress overview */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <Card>
            <div className="text-3xl font-bold text-[#FF4655]">{progressPercent}%</div>
            <div className="text-sm text-gray-400 mt-1">Overall Progress</div>
          </Card>
          <Card>
            <div className="text-3xl font-bold">{completedLessons}</div>
            <div className="text-sm text-gray-400 mt-1">
              Lessons Completed
            </div>
          </Card>
          <Card>
            <div className="text-3xl font-bold">{totalLessons - completedLessons}</div>
            <div className="text-sm text-gray-400 mt-1">Lessons Remaining</div>
          </Card>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
            <span>Course Progress</span>
            <span>
              {completedLessons} / {totalLessons} lessons
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#1f1f1f] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#FF4655] transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Module list */}
        <h2 className="text-lg font-semibold mb-4">Course Modules</h2>
        <div className="space-y-3">
          {modules.map((mod) => {
            const modProgress = Math.round((mod.completed / mod.lessons) * 100);
            const isStarted = mod.completed > 0;
            const isComplete = mod.completed === mod.lessons;

            return (
              <Card key={mod.number} hoverable className="cursor-pointer">
                <div className="flex items-center gap-5">
                  {/* Number */}
                  <div className="flex-shrink-0 w-10 text-center text-2xl font-bold text-[#2a2a2a]">
                    {mod.number}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-semibold">{mod.title}</span>
                      {isComplete && (
                        <span className="rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-400">
                          Complete
                        </span>
                      )}
                      {isStarted && !isComplete && (
                        <span className="rounded-full bg-[#FF4655]/10 border border-[#FF4655]/20 px-2 py-0.5 text-xs font-semibold text-[#FF4655]">
                          In Progress
                        </span>
                      )}
                    </div>
                    <div className="h-1.5 w-full max-w-xs rounded-full bg-[#1f1f1f] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#FF4655]"
                        style={{ width: `${modProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Lesson count */}
                  <div className="flex-shrink-0 text-sm text-gray-500">
                    {mod.completed}/{mod.lessons}
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 text-gray-600">→</div>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
