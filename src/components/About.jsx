import { profile, about } from '../content'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Portrait */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
          <div className="relative group w-full max-w-sm">
            <div className="absolute -inset-2 bg-gradient-to-b from-indigo-500/10 via-sky-400/10 to-indigo-700/15 cathedral-pill-frame blur-lg opacity-70 -z-10"></div>
            <div className="relative w-full aspect-[9/18.5] cathedral-pill-frame overflow-hidden border border-neutral-200 bg-neutral-50 shadow-lg p-1 bg-gradient-to-b from-white to-neutral-100">
              <div className="w-full h-full cathedral-pill-frame overflow-hidden bg-neutral-100 flex items-center justify-center">
                <img
                  alt={profile.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  src={profile.aboutImage}
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-sm text-xs font-mono text-neutral-700 flex items-center gap-1.5">
              {/*<span className="w-1.5 h-1.5 rounded-full bg-brand"></span>*/}
              <span>Anisha Sharon</span>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">{about.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-snug">
            {about.headingLead}{' '}
            <span className="text-neutral-400 font-normal block sm:inline">{about.headingTail}</span>
          </h2>

          <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-100">
            {about.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-2xl font-bold text-neutral-950 font-mono">{m.value}</div>
                <div className="text-xs text-neutral-500 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
              href={profile.resumeUrl}
              rel="noopener noreferrer"
              target="_blank">
              {/*<span className="material-symbols-outlined text-[18px]">download</span>*/}
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
