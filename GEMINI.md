# Kissakala Wiki - GEMINI Context

## Project Overview
**Kissakala Wiki** is a personal/educational wiki project built with **Astro 5**, **React**, and **Tailwind CSS**. It serves as a central hub for documenting studies, projects, software applications, and student life.

### Key Technologies
- **Astro 5**: The primary web framework used for static site generation.
- **React**: Powering interactive components, specifically the site layout and theme management.
- **Tailwind CSS**: Used for styling with a custom theme system.
- **GitHub Actions**: Automated deployment to GitHub Pages.

### Architecture
- **Pages**: Located in `src/pages/`, written in `.astro` format. They leverage the primary layout component.
- **Layout**: `src/layouts/Layout.jsx` is a React component that provides the sidebar navigation, header, and content wrapper.
- **Themes**: A custom theme system is implemented using CSS variables in `src/styles/global.css`. Themes include:
  - `pink` (Default Kissa)
  - `veto` (Emerald/Green)
  - `tuni` (Purple - Tampere University colors)

---

## Building and Running

### Prerequisites
- **Node.js**: Version 18.14.1 or higher.
- **Package Manager**: `npm` (project uses `package-lock.json`).

### Key Commands
| Command | Action |
| :--- | :--- |
| `npm install` | Install project dependencies. |
| `npm run dev` | Start the local development server (default: `http://localhost:4321`). |
| `npm run build` | Build the static site for production (outputs to `dist/`). |
| `npm run preview` | Preview the production build locally. |
| `npm run astro` | Execute the Astro CLI for various tasks. |

---

## Development Conventions

### Content Management
- **Adding Pages**: Create new `.astro` files in `src/pages/`.
- **Navigation**: Update the `navigation` array in `src/layouts/Layout.jsx` to add new links to the sidebar.

### UI & Styling
- **Layout**: Always wrap page content in the `<Layout title="Page Title">` component.
- **Styling**: Prefer Tailwind utility classes.
- **Theming**: Use the dynamic helper classes from `global.css` to ensure elements respond to theme changes:
  - `.dynamic-sidebar`: For themed backgrounds and borders.
  - `.dynamic-accent`: For themed buttons or highlights.
  - `.dynamic-underline`: For themed headings.
- **Assets**: Place images in `src/images/` for Vite processing or `public/` for raw assets.

### State & Interactivity
- Use **React components** for elements requiring state (like `useState` or `useEffect`).
- Theme persistence is handled via `localStorage` in the `Layout.jsx` component.

---

## Deployment
The project is configured to deploy to **GitHub Pages**. 
- **Site URL**: `https://Reino76.github.io/Kissakala-Wiki/`
- **Config**: `astro.config.mjs` handles the `base` path and `site` URL dynamically for deployment environments.
