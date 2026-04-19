# Handoff: #CrisOnCode Blog Redesign

## Overview
A hacker/terminal aesthetic redesign of the [crisoncode.dev](https://crisoncode.dev) blog. The goal is to transform the current serif/light design into a sharp, monospace-heavy, dark-first technical blog that feels like a developer's personal space.

## About the Design Files
The file `blog-redesign.html` is a **high-fidelity design reference built in HTML/React** — it is a prototype showing the intended look, feel, and interactions. It is **not production code to copy directly**.

Your task is to **recreate this design in the existing Astro codebase** (`crisoncode/`) using Astro components, Tailwind v4, and the existing project structure. Do not change the framework or tooling — just update the visual layer.

## Fidelity
**High-fidelity.** Colors, typography, spacing, animations and interactions in `blog-redesign.html` are final and should be recreated as closely as possible in the Astro components.

---

## Design Tokens

### Colors

#### Dark mode (default)
| Token | Value | Usage |
|---|---|---|
| `--color-fill` | `16, 20, 28` | Page background |
| `--color-text-base` | `200, 212, 232` | Body text |
| `--color-card` | `22, 28, 40` | Card / terminal background |
| `--color-card-muted` | `28, 35, 48` | Secondary surfaces |
| `--color-border` | `42, 52, 68` | All borders |
| `--color-accent` | `55, 195, 220` | Primary accent (teal) |
| `--color-secondary` | `245, 175, 75` | Tags, blockquotes (amber) |

#### Light mode
| Token | Value | Usage |
|---|---|---|
| `--color-fill` | `245, 247, 250` | Page background |
| `--color-text-base` | `58, 74, 92` | Body text |
| `--color-card` | `237, 240, 245` | Card background |
| `--color-card-muted` | `228, 233, 240` | Secondary surfaces |
| `--color-border` | `204, 211, 222` | All borders |
| `--color-accent` | `15, 140, 165` | Primary accent (teal) |
| `--color-secondary` | `200, 125, 42` | Tags, blockquotes (amber) |

### Typography
- **Font family**: `"IBM Plex Mono", monospace` — used for EVERYTHING (headings, body, nav, code)
- **Font weights used**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Google Fonts import**: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap`
- **Remove**: Bookerly font files and `@font-face` declarations

### Spacing & Layout
- Max content width: `860px` (general), `720px` (article body)
- Page padding: `40px 20px`
- Header height: `52px`

### Border radius
- Small elements (tags, buttons): `2–4px` — intentionally tight, not rounded

---

## Screens / Views

### 1. Header (sticky)
- Height: 52px, `position: sticky; top: 0`
- Background: `var(--color-fill)` with `backdrop-filter: blur(10px)`
- Bottom border: `1px solid var(--color-border)`
- **Logo**: `> #CrisOnCode` — the `> ` prefix in `var(--color-text-dim)` (70% opacity text), `#CrisOnCode` in `var(--color-accent)`, font-size 15px, font-weight 600
- **Nav items**: `home`, `posts`, `tags`, `about` — font-size 12px, padding `4px 10px`, border-radius 3px
  - Default: color `var(--color-text-dim)`, border `1px solid transparent`
  - Hover: color `var(--color-text-base)`, border `1px solid var(--color-border)`
  - Active: color `var(--color-accent)`, border `1px solid var(--color-accent)`, background `rgba(accent, 0.15)`
- **Theme toggle**: `◑` / `○` symbol, same style as nav items, margin-left 4px

### 2. Homepage Hero — Terminal Block
This is the most important new component. Replace the current `Hero.astro` photo+bio layout entirely.

**Structure:**
```
┌─ Terminal window ──────────────────────────────────────────┐
│ [●] [●] [●]  crisoncode ~ bash                            │  ← chrome bar
├────────────────────────────────────────────────────────────┤
│ #!/usr/bin/env blog                                        │  ← comment (dim)
│ // Cristian Estarlich — Technical Lead, Barcelona         │  ← comment (dim)
│                                                            │
│ $ whoami                                                   │  ← prompt (accent)
│ crisoncode — building things on the web since age 19.     │  ← output (text)
│ currently: Technical Lead @ TennisPoint                   │
│ stack: TypeScript, NodeJS, Distributed Systems, Arch..    │
│                                                            │
│ $ cat interests.txt                                        │  ← prompt (accent)
│ Software development, Artificial intelligence, ...        │
│ Learning by practice, technical books, barista.           │
│                                                            │
│ $ ./start --blog                                           │  ← prompt (accent)
│ loading posts...▋                                          │  ← blinking cursor
└────────────────────────────────────────────────────────────┘
```

**Styling:**
- Outer container: `background: var(--color-card)`, `border: 1px solid var(--color-border)`, `border-radius: 6px`, `margin-bottom: 48px`
- Chrome bar: `background: var(--color-card-muted)`, `padding: 10px 14px`, `border-bottom: 1px solid var(--color-border)`
  - Traffic lights: 3 circles, 11×11px, colors `#e05c5c`, `#f5af4b`, `#4ec994`, gap 7px
  - Title: font-size 11px, color `var(--color-text-dim)`
- Terminal body: `padding: 20px`
- **Typewriter animation**: each line types character by character. Lines starting with `$` or `//` or `#!` use accent/dim colors. Implement with `setInterval` or `requestAnimationFrame`. Cursor is `▋` blinking at 1s interval.
- Line colors:
  - Lines starting with `//` or `#!`: `var(--color-text-dim)`
  - Lines starting with `$`: `var(--color-accent)`
  - Output lines: `var(--color-text-base)`
  - Blank lines: rendered as spacers

**Astro implementation note**: This needs client-side JS. Use a `<script>` tag in Hero.astro or convert to a `.tsx` component with `client:load`.

### 3. Recent Posts section (homepage)
- Section label: `// recent_posts` — font-size 11px, color `var(--color-text-dim)`, `text-transform: uppercase`, `letter-spacing: 0.08em`
- "all posts →" link: right-aligned, font-size 11px, color `var(--color-accent)`
- Posts rendered as `<PostRow>` components (see Post Listing below)

### 4. Post Listing (posts page)
Each post row:
- `border-top: 1px solid var(--color-border)`, `padding: 20px 0`
- **Meta line**: date (`dd MMM yyyy` format) + read time (`~Nmin`), font-size 11px, color `var(--color-text-dim)`
- **Title**: font-size 16px, font-weight 600, `letter-spacing: -0.02em`, color `var(--color-text-bright)` default → `var(--color-accent)` on hover
- **Description**: font-size 13px, color `var(--color-text-dim)`, line-height 1.6, margin-top 6px
- **Tags**: amber badge row (see Tag component below)
- **Hover**: entire row has `cursor: pointer`, title color transitions to accent over 150ms
- **Entrance animation**: `fadeUp` keyframe (opacity 0→1, translateY 10px→0, duration 0.4s)

**Search bar (posts page only):**
- `background: var(--color-card)`, `border: 1px solid var(--color-border)`, `border-radius: 4px`, `padding: 9px 12px 9px 34px`
- Focus: `border-color: var(--color-accent)`
- Placeholder: `grep -i 'query' posts/`
- Label above: `$ ls posts/` in dim style
- Filters client-side by title + description

### 5. Tag Component
```
#tag-name
```
- `border: 1px solid var(--color-border)`, `border-radius: 2px`, `padding: 2px 7px`
- Font-size 11px, font-weight 500
- Default: color `var(--color-text-dim)`, background transparent
- Hover/active: color `var(--color-secondary)` (amber), border `var(--color-secondary)`, background `rgba(secondary, 0.12)`
- Text: `#` prefix + tag name lowercased + hyphens

### 6. Post Detail Page
- Max-width: 720px
- **Reading progress bar**: `position: fixed; top: 52px; left: 0; height: 2px; background: var(--color-accent)` — width is `scrollProgress%`, transitions with `width 0.1s linear`
- **Breadcrumb**: `posts/ › slug` — font-size 11px, `posts/` is a link in accent color
- **Title**: font-size 26px, font-weight 700, `letter-spacing: -0.03em`, line-height 1.3
- **Meta**: date + read time + tags, separated, font-size 11px
- **Divider**: `border-bottom: 1px solid var(--color-border)`, margin-bottom 32px

**Article body typography:**
- `<p>`: font-size 14px, line-height 1.8, color `var(--color-text-base)`, margin-bottom 14px
- `<h2>`: font-size 18px, font-weight 600, `letter-spacing: -0.02em`, `border-bottom: 1px solid var(--color-border)`, margin-top 40px
- `<h3>`: font-size 15px, font-weight 600, color `var(--color-accent)`, margin-top 28px
- `<blockquote>`: `border-left: 3px solid var(--color-secondary)`, background `rgba(secondary, 0.05)`, `border-radius: 0 4px 4px 0`, padding `12px 16px`, font-style italic
- `<ul> li`: list-style none, `›` marker in accent color, padding-left 18px
- `<pre>/<code>`: background `#0d1117`, `border: 1px solid var(--color-border)`, border-radius 5px, padding `16px 18px`, font-size 12px
- Inline `<code>`: background `rgba(accent, 0.1)`, `border: 1px solid rgba(accent, 0.2)`, border-radius 3px, padding `1px 5px`, color `var(--color-accent)`

**Post footer:**
- `← all posts` button (left) + `next →` post button (right)
- Both: `border: 1px solid var(--color-border)`, border-radius 3px, padding `6px 12px`, font-size 12px, color `var(--color-text-dim)`
- Hover: border + color → `var(--color-accent)`

### 7. Tags Page
- All tags displayed as Tag badges in a wrapping flex row
- Clicking a tag filters posts below it (client-side, no page reload)
- Count label: `// N posts tagged #tag-name`

### 8. About Page
- Two-column layout: avatar placeholder (140×140px) + bio text
- Avatar: `border: 2px solid var(--color-accent)`, `border-radius: 6px`, initials "CE" inside
- Name: font-size 22px, font-weight 700, `letter-spacing: -0.03em`
- Role line: font-size 12px, color `var(--color-accent)`
- Contact links: label (60px wide, dim) + link (accent color) in a vertical list

### 9. Footer
- `border-top: 1px solid var(--color-border)`, padding 20px, centered
- `// © 2026 Cristian Estarlich · #CrisOnCode`
- Font-size 11px, color `var(--color-text-dim)`, `#CrisOnCode` in accent

---

## Background Texture
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: radial-gradient(circle, rgb(var(--color-border)) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}
```
All page content needs `position: relative; z-index: 1` to sit above the grid.

---

## Animations & Micro-interactions

### Page entrance
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
main { animation: fadeUp 0.4s cubic-bezier(0.25, 1, 0.5, 1) both; }
```

### Cursor blink
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

### Theme toggle
- Button uses `◑` for dark mode, `○` for light mode
- On hover: border-color and color → accent, transition 150ms

### Post row hover
- Title color: text-bright → accent, `transition: color 0.15s`
- Row: `cursor: pointer`

### Reading progress bar
- Calculated from scroll position relative to article height
- `transition: width 0.1s linear`

### Scrollbar
```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: rgb(var(--color-fill)); }
::-webkit-scrollbar-thumb { background: rgb(var(--color-border)); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgb(var(--color-text-dim)); }
```

---

## Files to Modify in the Astro Repo

| File | Change |
|---|---|
| `src/styles/base.css` | Update color tokens, swap font to IBM Plex Mono, add dot-grid, add animations |
| `src/layouts/Layout.astro` (or base layout) | Add Google Fonts `<link>` for IBM Plex Mono |
| `src/components/Hero.astro` | Full rewrite → terminal typewriter component |
| `src/components/Header.astro` | Update nav styles to monospace/minimal |
| `src/components/Card.tsx` | Update to new PostRow style |
| `src/components/Tag.astro` | Update to amber badge style |

---

## Design Reference File
`blog-redesign.html` — open in any browser to see the full interactive prototype. Navigate between Home, Posts, Tags, About, and individual post views. Toggle dark/light mode with the `◑` button.

---

## Notes for Claude Code
- The Astro project is at `crisoncode/` in this workspace
- The blog uses Tailwind v4 with custom `@utility` classes in `base.css` — continue using this pattern
- The terminal typewriter in Hero.astro needs `client:load` since it requires JS
- IBM Plex Mono should replace Bookerly entirely — remove the `@font-face` declarations and the local font files from `public/fonts/` are no longer needed
- Dark mode is toggled via `data-theme` attribute on `<html>` — this is already wired up in `public/toggle-theme.js`, keep that logic intact
