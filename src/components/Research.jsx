import { profile, research } from '../content'

export default function Research() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-100" id="research">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Peer-Reviewed Publication</span>
          <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight mt-1">Featured Research Paper</h2>
        </div>
        <p className="text-xs font-mono text-neutral-500 mt-2 md:mt-0">Human-Computer Interaction · Generative Audio</p>
      </div>

      <div className="relative p-8 sm:p-10 rounded-3xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white shadow-sm hover:border-neutral-900 transition-all group overflow-hidden">
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-950 text-white text-xs font-mono font-medium">
            <span className="material-symbols-outlined text-[14px]">menu_book</span>
            <span>Published Research</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono">{research.date}</span>
          <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono">Peer-Reviewed Study</span>
          <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono">Author: {profile.name}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight leading-snug max-w-4xl">
          {research.title}
        </h3>

        <div className="mt-4 max-w-3xl space-y-3">
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{research.description}</p>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500">
            {research.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200">{tag}</span>
            ))}
          </div>
          <a
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all active:scale-95 shadow-2xs"
            href={research.paperUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Read Publication</span>
            <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
