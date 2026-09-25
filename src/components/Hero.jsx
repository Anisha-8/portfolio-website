import { profile, heroCopy } from '../content'
import { LinkedInIcon, GitHubIcon, InstagramIcon, ThreadsIcon } from './Icons'
export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column: intro */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 text-xs font-medium text-neutral-600 bg-neutral-50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{heroCopy.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.12]">
            {heroCopy.headline}
            <span className="block text-neutral-400 font-semibold mt-1">{heroCopy.subheadline}</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">{heroCopy.body}</p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-neutral-800 text-xs font-semibold hover:border-neutral-900 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs flex items-center gap-2 active:scale-95"
              href={profile.social.linkedin}
              rel="noopener noreferrer"
              target="_blank">
              <LinkedInIcon />
            </a>
            <a
              className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-neutral-800 text-xs font-semibold hover:border-neutral-900 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs flex items-center gap-2 active:scale-95"
              href={profile.social.github}
              rel="noopener noreferrer"
              target="_blank">
              <GitHubIcon />
            </a>
            <a
              className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-neutral-800 text-xs font-semibold hover:border-neutral-900 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs flex items-center gap-2 active:scale-95"
              href={profile.social.instagram}
              rel="noopener noreferrer"
              target="_blank">
              <InstagramIcon />
            </a>
            <a
              className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-neutral-800 text-xs font-semibold hover:border-neutral-900 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs flex items-center gap-2 active:scale-95"
              href={profile.social.threads}
              rel="noopener noreferrer"
              target="_blank">
              <ThreadsIcon />              
            </a>        
            
          </div>
        </div>

        {/* Right column: portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 sm:w-72 md:w-80 max-w-full animate-sway-pulse">
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/15 via-sky-400/10 to-indigo-600/20 rounded-[124px_40px_88px_48px] blur-xl opacity-75 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-indigo-100/70 -z-10 blur-2xl"></div>
            <div className="relative w-full aspect-[9/19] hero-arch-silhouette overflow-hidden shadow-2xl ring-1 ring-neutral-200/80 bg-neutral-100 p-1 bg-gradient-to-b from-neutral-100 to-neutral-200/60">
              <div className="w-full h-full hero-arch-silhouette overflow-hidden bg-neutral-50 flex items-center justify-center">
                <img
                  alt={profile.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 select-none"
                  src={profile.heroImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
