import { techTicker } from '../content'

function Chip({ label }) {
  return (
    <span className="px-4 py-2 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-800 bg-white shadow-2xs hover:border-neutral-900 transition-colors">
      {label}
    </span>
  )
}

export default function SkillsMarquee() {
  return (
    <section className="py-10 border-y border-neutral-100 bg-white overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto px-6 mb-4 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Toolkit & Ecosystem</span>
        <span className="text-xs font-mono text-neutral-400">Continuous Integration · Modern Stack</span>
      </div>
      <div className="marquee-container relative w-full overflow-hidden flex flex-col gap-3">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-3 pr-3 shrink-0">
            {techTicker.map((label) => (
              <Chip key={`a-${label}`} label={label} />
            ))}
          </div>
          {/* Duplicated set for seamless infinite loop */}
          <div className="flex items-center gap-3 pr-3 shrink-0">
            {techTicker.map((label) => (
              <Chip key={`b-${label}`} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
