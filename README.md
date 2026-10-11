# vrandeshbandikatti.com

Personal site and work portfolio for Vrandesh Bandikatti. Next.js (App Router) and TypeScript, exported as a static site.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
npm run preview  # serve ./out locally
```

Needs Node 20.9 or later.

## Change the content

Every word on the site is in [src/content/site.ts](src/content/site.ts): profile, case studies, the brief project lists, repositories, experience, skills and documents. Edit, rebuild, done.

- **A case study** is an entry in `caseStudies`. Its `path` is the row of stages drawn under the title; each stage says who makes the call there (`data`, `code`, `model` or `person`).
- **A GitHub link** is a `links` entry with `kind: 'github'`, on a case study or a brief item. Repositories listed under "Code on GitHub" are in `repos`.
- **Availability** in the hero is `profile.availability`. Set it to `''` to hide the line.
- **The tools grid** under Skills is the `tools` list. Each tile shows the projects that used the tool, worked out from the `stack` of every case study and brief item: a project counts when one of its stack entries contains one of the tool's `match` strings. Add a tool to a project's `stack` and it appears on the tile. The marks themselves are in [src/content/logos.ts](src/content/logos.ts).

## Documents

Downloadable PDFs live in `public/documents` and are listed in `documents` in the content file. File sizes are read at build time.

The work portfolio PDF is deliberately **not** published. It sits in `private/` (git-ignored) because several of its screenshots show named staff, their incentive amounts and email addresses. The site offers it "on request" instead. To publish a cleared or redacted copy:

1. Copy it to `public/documents/Vrandesh-Bandikatti-Work-Portfolio-2009-2026.pdf`.
2. Set `published: true` on the `portfolio` entry in `src/content/site.ts`.

That also switches on the hero download button and the "In the portfolio, page N" links on each case study.

## The moving parts

- [src/components/DotField.tsx](src/components/DotField.tsx) draws the dot grid behind the hero and the footer. It pauses off screen and draws a still grid when the visitor prefers reduced motion.
- The slow colour behind it (`.mesh`) and the pulse along each case study path are CSS only, in [src/app/globals.css](src/app/globals.css).

## Deploy

`npm run build` writes plain HTML, CSS and assets to `out/`. Any static host will serve it. On Cloudflare Pages or Vercel, set the build command to `npm run build` and the output directory to `out`.

`profile.siteUrl` is used for canonical and social-preview URLs. Update it if the domain changes.
