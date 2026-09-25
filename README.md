# Anisha Sharon — Portfolio

React + Vite + Tailwind CSS portfolio.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Project structure

```
src/
├── components/       # one component per site section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SkillsMarquee.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── AIProjects.jsx
│   ├── Research.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Icons.jsx      # shared LinkedIn/GitHub SVGs
├── content.js         # ALL site text/data lives here — edit this file to update copy
├── App.jsx
├── main.jsx
└── index.css
```

To change any text (a job title, a project description, a link), edit `src/content.js` —
no need to touch the component files.

## ⚠️ Before deploying: replace the placeholder images

The hero and about-section photos currently point to a temporary Google-hosted URL
(`lh3.googleusercontent.com/...`) that Stitch generated — it is **not guaranteed to stay online**.

1. Save your own photo(s) into `src/assets/` (e.g. `src/assets/portrait.jpg`).
2. In `src/content.js`, replace `heroImage` and `aboutImage` with an import:
   ```js
   import portrait from './assets/portrait.jpg'
   // then use `portrait` instead of the googleusercontent URL
   ```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: React portfolio"
git remote add origin https://github.com/Anisha-8/portfolio-website.git
git branch -M main
git push -u origin main
```

## Deploy

Easiest free options, both auto-deploy on every GitHub push:
- **Vercel** — vercel.com, "Import Project" from your GitHub repo (auto-detects Vite).
- **Netlify** — netlify.com, connect the repo, build command `npm run build`, publish directory `dist`.

## Contact form

The form currently just shows a "thanks" message on submit — it doesn't send anywhere yet.
Wire it up to a service like Formspree or EmailJS, or your own backend endpoint, in
`src/components/Contact.jsx`.
