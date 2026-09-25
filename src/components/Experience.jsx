import { experience } from '../content'

function RoleCard({ role }) {
  return (
    <div className="p-6 sm:p-8 rounded-3xl border border-neutral-200 bg-white hover:border-neutral-900 transition-all shadow-2xs group">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-100">
        <div>
          <h3 className="text-xl font-bold text-neutral-950">{role.role}</h3>
          <p className="text-sm font-medium text-neutral-500 mt-0.5">{role.company}</p>
        </div>
        <span className="inline-flex self-start sm:self-auto px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-mono font-semibold">
          {role.dates}
        </span>
      </div>

      <div className="mt-5 space-y-3 text-sm text-neutral-600 leading-relaxed">
        {role.points.map((point, i) => (
          <p key={i}>
            {point.label && <strong className="text-neutral-900">{point.label} </strong>}
            {point.text}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-neutral-100">
        {role.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-700 text-xs font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-100" id="experience">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Career Timeline</span>
          <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight mt-1">Professional Experience</h2>
        </div>
        <p className="text-xs font-mono text-neutral-500 mt-2 md:mt-0">Enterprise EDI · .NET · Full Stack Python APIs</p>
      </div>

      <div className="space-y-6">
        {experience.map((role) => (
          <RoleCard key={role.role} role={role} />
        ))}
      </div>
    </section>
  )
}
