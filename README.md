# Gabriel Amaro Lopes — Portfolio (redesign)

> "Sic Parvis Magna" — Greatness from small beginnings.

Personal portfolio, rebuilt from scratch with **React 18 + TypeScript + Vite + Chakra UI v2 + Framer Motion**.

## Brand

Colors and typography follow the project's brand guide (`Guia_Cores_e_Fontes.pdf`):

| Token      | Hex       | Use                                  |
| ---------- | --------- | ------------------------------------- |
| `navy`     | `#0F172A` | Backgrounds, headers, high contrast   |
| `royal`    | `#2563EB` | CTAs, links, interactive accents      |
| `graphite` | `#334155` | Borders, secondary text, dividers     |
| `mist`     | `#F8FAFC` | Text on dark surfaces                 |

Typography: **Plus Jakarta Sans** (UI/body) + **JetBrains Mono** (code, metrics, small labels).

## Stack

```
framework:  React 18 + TypeScript
bundler:    Vite
ui:         Chakra UI v2
motion:     Framer Motion
fonts:      Plus Jakarta Sans, JetBrains Mono
```

## Project structure

```
src/
├── components/       # Nav, ProjectCard, StackBadge
├── sections/         # Hero, Projects, Stack, About, Contact, Footer
├── data/             # projects.ts, stack.ts — content lives here, not in JSX
├── theme/            # Chakra theme: brand colors, fonts, global styles
├── App.tsx
└── main.tsx
```

## Content notes

- Tech stack icons are pulled live from [skillicons.dev](https://skillicons.dev). Protocols and
  specs without an official logo (SQL, JWT, OAuth 2.0, Framer Motion) are shown as text-only
  badges rather than risk a broken or unofficial icon.
