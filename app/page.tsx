import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = createClient()

  const { data: todos } = await supabase.from('todos').select()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3">
          <img
            src="/radiant-logo.png"
            alt="Radiant logo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold tracking-wide">
            Radiant Academy
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-200">
          <a className="hover:text-white" href="#features">Sections</a>
          <a className="hover:text-white" href="#reviews">Reviews</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#faqs">FAQs</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>

        <button className="bg-cyan-500 hover:bg-orange-400 px-6 py-2 rounded-full font-semibold">
          Get Full Access
        </button>
      </nav>

      {/* TODOS */}
      <ul>
        {todos?.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      {/* HERO */}
      <section className="text-center mt-24 px-4">
        <h1 className="text-5xl font-bold max-w-4xl mx-auto">
          Get Better at Valorant Without Guessing What You’re Doing Wrong
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Structured lessons, drills, and decision-making systems —
          tailored for every rank.
        </p>
      </section>

      {/* VIDEO */}
      <section className="flex justify-center mt-20 px-4">
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/SvT0Efw_p1A?si=6YxOvoRouNrDrKim"
            title="Course Overview"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  )
}
