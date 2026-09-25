import { education } from '../content'

function DegreeCard({ badge, title, org, description }) {
  return (
    <div className="p-7 rounded-3xl border border-neutral-200 bg-white hover:border-neutral-900 transition-all shadow-2xs">
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-mono font-semibold">{badge}</span>
        <span className="text-xs font-mono text-neutral-500">Graduated</span>
      </div>
      <h3 className="text-xl font-bold text-neutral-950">{title}</h3>
      <p className="text-sm font-semibold text-neutral-800 mt-1">{org}</p>
      <p className="text-sm text-neutral-600 mt-3 leading-relaxed">{description}</p>
    </div>
  )
}

function CertCard({ cert }) {
  return (
    <div className="p-6 rounded-3xl border border-neutral-200 bg-white hover:border-neutral-900 transition-all shadow-2xs">
      <span className="text-xs font-mono text-neutral-400">{cert.badge}</span>
      <h4 className="text-base font-bold text-neutral-950 mt-2">{cert.title}</h4>
      <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{cert.description}</p>
    </div>
  )
}

export default function Education() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-100" id="education">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Credentials</span>
          <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight mt-1">Education & Certifications</h2>
        </div>
        <p className="text-xs font-mono text-neutral-500 mt-2 md:mt-0">Academic rigor & accredited full-stack certifications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <DegreeCard badge="Post Graduate" {...education.postgrad} />
        <DegreeCard badge="Undergraduate" {...education.undergrad} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {education.certifications.map((cert) => (
          <CertCard key={cert.title} cert={cert} />
        ))}
      </div>
    </section>
  )
}
