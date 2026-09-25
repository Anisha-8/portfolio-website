import { profile } from '../content'
import { LinkedInIcon, GitHubIcon, InstagramIcon, ThreadsIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-10 border-b border-neutral-100">
          <div>
            <h4 className="text-2xl font-extrabold text-neutral-950 tracking-tight">Thanks for stopping by!</h4>
            <p className="text-sm text-neutral-500 mt-1">I appreciate your time and interest.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="w-9 h-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 hover:border-neutral-900 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs"
              href={profile.social.linkedin}
              rel="noopener noreferrer"
              target="_blank"
              title="LinkedIn">
              <LinkedInIcon />
            </a>
            <a
              className="w-9 h-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 hover:border-neutral-900 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs"
              href={profile.social.github}
              rel="noopener noreferrer"
              target="_blank"
              title="GitHub">
              <GitHubIcon />
            </a>
            <a
              className="w-9 h-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 hover:border-neutral-900 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs"
              href={profile.social.instagram}
              rel="noopener noreferrer"
              target="_blank"
              title="Instagram">
              <InstagramIcon />
            </a>
            <a
              className="w-9 h-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 hover:border-neutral-900 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs"
              href={profile.social.threads}
              rel="noopener noreferrer"
              target="_blank"
              title="Threads">
              <ThreadsIcon />
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-100 flex flex-col items-center justify-center gap-4 text-xs font-mono text-neutral-500">
          <div className="text-center text-neutral-400">© 2026 {profile.name}. Crafted with code & intent.</div>
        </div>
      </div>
    </footer>
  )
}
