import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";

const features = [
  {
    title: "Mechanical Mastery",
    description:
      "Aim training systems, crosshair placement drills, and spray control broken down into repeatable exercises.",
    icon: "🎯",
  },
  {
    title: "Game Sense & Decision Making",
    description:
      "Learn when to trade, when to rotate, and how to read the map. The mental side most players ignore.",
    icon: "🧠",
  },
  {
    title: "Agent Mastery",
    description:
      "Deep dives into every role — Duelist, Sentinel, Initiator, Controller. Know exactly what your job is.",
    icon: "⚡",
  },
  {
    title: "Ranked System",
    description:
      "Understand how RR works, how to climb consistently, and what separates your rank from the next.",
    icon: "🏆",
  },
];

const reviews = [
  {
    name: "Caleb M.",
    rank: "Immortal 2",
    content:
      "Went from Plat 3 to Immortal in 2 months. The decision-making module completely changed how I think mid-round.",
  },
  {
    name: "Sarah K.",
    rank: "Diamond 1",
    content:
      "Finally understand why I was hardstuck. The aim training section alone was worth the price.",
  },
  {
    name: "Jordan T.",
    rank: "Platinum 3",
    content:
      "Best structured Valorant content I've found. Everything else on YouTube is scattered. This is a real course.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-24 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF4655]/30 bg-[#FF4655]/10 px-4 py-1.5 text-sm text-[#FF4655]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF4655]" />
            The complete Valorant coaching system
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
            Get Better at Valorant{" "}
            <span className="text-[#FF4655]">Without Guessing</span>{" "}
            What You&apos;re Doing Wrong
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Structured lessons, drills, and decision-making frameworks —
            built for every rank. Stop watching random clips and start
            actually improving.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF4655] hover:bg-[#cc3544] px-8 py-3 text-base font-semibold text-white transition-colors"
            >
              Get Full Access
            </Link>
            <Link
              href="/course"
              className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-white/5 px-8 py-3 text-base font-semibold text-white transition-colors"
            >
              View Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[#1f1f1f] shadow-2xl shadow-black/50">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/SvT0Efw_p1A?si=6YxOvoRouNrDrKim"
              title="Course Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-24 border-t border-[#1f1f1f]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything You Need to Climb
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              A complete system — not another YouTube highlight reel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <Card key={f.title} hoverable>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {f.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="px-6 py-24 border-t border-[#1f1f1f]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Real Results from Real Players
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <Card key={r.name}>
                <p className="text-gray-300 leading-relaxed mb-6">
                  &ldquo;{r.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#FF4655]/20 flex items-center justify-center text-sm font-bold text-[#FF4655]">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-[#FF4655]">{r.rank}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 border-t border-[#1f1f1f]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            One Price. Lifetime Access.
          </h2>
          <p className="text-gray-400 mb-12">
            No subscriptions. No drip content. Get everything now.
          </p>

          <Card className="text-left">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-sm text-[#FF4655] font-semibold uppercase tracking-wider mb-1">
                  Full Course
                </div>
                <div className="text-4xl font-bold">
                  $97
                  <span className="text-lg text-gray-500 font-normal ml-2">
                    one-time
                  </span>
                </div>
              </div>
              <div className="rounded-full bg-[#FF4655]/10 border border-[#FF4655]/20 px-3 py-1 text-xs text-[#FF4655] font-semibold">
                Best Value
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-sm text-gray-300">
              {[
                "40+ structured video lessons",
                "Mechanical drills & aim training guides",
                "Agent mastery modules for every role",
                "Ranked climbing strategy system",
                "Lifetime access & future updates",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#FF4655]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className="flex w-full items-center justify-center rounded-full bg-[#FF4655] hover:bg-[#cc3544] py-3 font-semibold text-white transition-colors"
            >
              Get Full Access
            </Link>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 border-t border-[#1f1f1f]">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What rank is this course for?",
                a: "Iron through Diamond. The course is structured so every rank will find applicable content — beginners get fundamentals, higher ranks get advanced decision-making.",
              },
              {
                q: "How is this different from YouTube guides?",
                a: "It's structured like a real course. No random videos — each module builds on the last, with drills and clear takeaways.",
              },
              {
                q: "Do I get lifetime access?",
                a: "Yes. Pay once, keep it forever. All future updates are included at no extra cost.",
              },
              {
                q: "What if I don't improve?",
                a: "The course comes with a 30-day satisfaction guarantee. If you put in the work and don't see results, reach out.",
              },
            ].map((faq) => (
              <Card key={faq.q}>
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 border-t border-[#1f1f1f]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Actually Improve?
          </h2>
          <p className="text-gray-400 mb-8">
            Join hundreds of players who stopped guessing and started climbing.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF4655] hover:bg-[#cc3544] px-10 py-4 text-base font-semibold text-white transition-colors"
          >
            Get Full Access — $97
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
