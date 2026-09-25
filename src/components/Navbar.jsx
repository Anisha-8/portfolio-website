import { profile } from '../content'
import navPhoto from '../assets/nav-photo.jpeg'
export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 w-full transition-all">
      <div className="bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-sm rounded-full px-6 h-16 flex items-center justify-between">
        <a className="flex items-center gap-3 group" href="#home">
          <div className="relative w-9 h-9 rounded-full ring-2 ring-neutral-200/80 overflow-hidden shrink-0">
            <img
              alt={profile.name}
              className="w-full h-full object-cover object-top"
              src={navPhoto}
            />
          </div>
          <span className="text-base font-bold text-neutral-900 tracking-tight">
            {profile.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-neutral-500">
          <a className="hover:text-neutral-950 transition-colors" href="#about">About</a>
          <a className="hover:text-neutral-950 transition-colors" href="#projects">Projects</a>
          <a className="hover:text-neutral-950 transition-colors" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 hover:shadow-sm active:scale-95 transition-all"
            href={profile.resumeUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Resume / CV</span>
            <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
          </a>
        </div>
      </div>
    </header>
  )
}
