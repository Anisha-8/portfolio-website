import { profile, aiProjects } from '../content'

function AIProjectCard({ project }) {
  return (
    <div className="p-7 rounded-3xl border border-neutral-200 bg-white flex flex-col justify-between hover:border-neutral-900 transition-all shadow-2xs group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-mono">{project.tag}</span>
          <span className="material-symbols-outlined text-neutral-400 group-hover:text-neutral-900 transition-colors">
            {project.icon}
          </span>
        </div>
        <h3 className="text-xl font-bold text-neutral-950 group-hover:text-neutral-900 transition-colors">{project.title}</h3>
        <p className="text-sm text-neutral-600 mt-3 leading-relaxed">{project.description}</p>
      </div>
      <div className="pt-6 mt-6 border-t border-neutral-100">
        <div className="flex flex-wrap gap-1.5 mb-4 text-xs font-mono text-neutral-500">
          {project.tech.map((t, i) => (
            <span key={t}>
              {t}
              {i < project.tech.length - 1 && ' · '}
            </span>
          ))}
        </div>
        <a
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-neutral-700 transition-colors"
          href={profile.social.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>{project.linkLabel}</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </a>
      </div>
    </div>
  )
}

export default function AIProjects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-100" id="ai-work">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Deep Tech & Machine Learning</span>
          <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight mt-1">AI & Deep Learning Systems</h2>
        </div>
        <p className="text-xs font-mono text-neutral-500 mt-2 md:mt-0">Generative Audio · Computer Vision · Neural Networks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {aiProjects.map((p) => (
          <AIProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
