# Mariam Saralidze — portfolio

A small React website built with Vite and plain CSS. No backend, UI framework, or complicated configuration is needed.

## Run locally

Install Node.js, then run these commands in this folder:

```sh
npm install
npm run dev
```

Open the local address printed in the terminal. For a production build, run `npm run build`. The ready-to-host website appears in `dist/`. `npm run preview` previews that build.

## What to edit

| Change                            | File                                             |
| --------------------------------- | ------------------------------------------------ |
| Name, bio, email, social links    | `src/content.js` → `profile`                     |
| Education or employment           | `src/content.js` → `education` / `experience`    |
| Certificates and PDF links        | `src/content.js` → `certificates`                |
| Technologies                      | `src/content.js` → `skillGroups`                 |
| Project cards                     | `src/content.js` → `projects` (example included) |
| Colors and page width             | Variables at the top of `src/styles.css`         |
| Section order or layout           | `src/App.jsx`                                    |
| Hero illustration                 | `src/components/DataArtwork.jsx`                 |
| Page title and search description | `index.html`                                     |

`App.jsx` only assembles the page. Each section has its own clearly named file in `src/components/`: `Hero.jsx`, `About.jsx`, `Journey.jsx`, `Projects.jsx`, `Skills.jsx`, and `Contact.jsx`. Header and footer also have their own files. `Timeline.jsx`, `Logo.jsx`, `Arrow.jsx`, `TechIcon.jsx`, and `DataArtwork.jsx` are shared or supporting components. Styles have tablet and mobile overrides at the bottom. Tech icons are SVG: brand paths from Simple Icons plus small scientific illustrations.

## Personalize before sharing

Only the supplied certificate is treated as verified history. Bracketed placeholders are included for education, experience, projects, and contact details. Replace them with your information or remove entries you do not need. No statistics, testimonials, services, or design blog are included.

Set `profile.email` to show a contact form. It opens the visitor’s email app with a draft; it does not send or store messages. Add actual social URLs to `profile.links` to display them. Add a portrait in `public/` and set `profile.portrait` to its path if desired; the Figma template portrait is intentionally not presented as Mariam.

Certificate files are in `public/certificates/`: the original PDF and a generated preview image. The course completion date is November 10, 2026. The toolkit is based on the linked course curriculum and makes no proficiency-percentage claims.

## Design reference

Adapted from the supplied Figma community portfolio template: coral `#fc3314`, blush `#ffd4d0`, charcoal `#1f1f1f`, broad sections, bold type, and square buttons. The placeholder portrait and design projects are replaced with a neural-network illustration and an honest projects state. Fonts fall back to Arial locally; no third-party font requests are required.

## Fill-in checklist

In `src/content.js`, fill in: degree and institution with dates; job title, employer, dates and description; project title, description, technologies, repository/demo URL and optional image; email; GitHub and LinkedIn URLs; optional portrait path. Review the introduction, about text, and role. Remove any unused timeline or project entries. Your Udemy certificate is already included.
