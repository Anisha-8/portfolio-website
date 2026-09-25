import { useState } from 'react'
import { profile } from '../content'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xkjgzyzg', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        alert('Something went wrong — please try again or email me directly.')
      }
    } catch (err) {
      alert('Something went wrong — please try again or email me directly.')
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-100" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Let's Connect</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Let's build something sick together.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Got an opportunity, need robust EDI & backend architecture, or want to jam on deep tech? Drop a message or reach out through direct channels:
          </p>

          <div className="space-y-3 pt-2">
            <a
              className="p-4 rounded-2xl border border-neutral-200 hover:border-neutral-900 transition-colors flex items-center gap-3.5 bg-white group"
              href={`mailto:${profile.email}`}
            >
              <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-400">EMAIL</div>
                <div className="text-sm font-semibold text-neutral-900">{profile.email}</div>
              </div>
            </a>

            <div className="p-4 rounded-2xl border border-neutral-200 flex items-center gap-3.5 bg-white">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-400">LOCATION</div>
                <div className="text-sm font-semibold text-neutral-900">{profile.location}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 rounded-3xl border border-neutral-200 bg-white shadow-2xs">
          <h3 className="text-xl font-bold text-neutral-950 mb-2">Send a Message</h3>
          <p className="text-xs text-neutral-500 mb-6 font-mono">Replies within 24 hours · No spam, just real collaboration.</p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-700">
              Thanks for reaching out! Anisha will get back to you shortly.
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-500 mb-1.5" htmlFor="name">YOUR NAME</label>
                  <input
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-0 outline-none transition-colors"
                    id="name"
                    name="name"
                    placeholder="Maya Sharma"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-500 mb-1.5" htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-0 outline-none transition-colors"
                    id="email"
                    name="email"
                    placeholder="maya@company.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-500 mb-1.5" htmlFor="message">MESSAGE</label>
                <textarea
                  className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-0 outline-none transition-colors"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, idea, or role..."
                  required
                  rows={4}
                ></textarea>
              </div>

              <button
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                type="submit"
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[15px]">send</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
