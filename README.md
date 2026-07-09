# Retro Gaming Portfolio

A plain React + Vite portfolio site. No component libraries are used
(no antd, no MUI), so the bundle stays small. Everything, including
the image lightbox, is hand built.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To build for production:

```bash
npm run build
```

The output goes to `dist/`.

## Customizing

- **Font**: drop your `RetroGaming.ttf` file into `public/fonts/`,
  see `public/fonts/README.txt`.
- **Name / nav**: edit `src/App.jsx` and `src/components/Header.jsx`.
- **Experience & education**: edit `src/data/timeline.js`.
- **Projects**: edit `src/data/projects.js`. Each project has a
  `media` array, add as many images or gifs as you like, both types
  are handled the same way. Replace the placeholder SVGs in
  `public/assets/projects/` with your own screenshots and gifs.
- **Colors**: all theme colors are CSS variables at the top of
  `src/index.css` under `:root`.
- **Contact form**: `src/components/Contact.jsx` currently only logs
  the submitted values to the console, since no email service is
  connected yet. There is a comment in that file showing where to
  add a real request once you set one up (for example Formspree,
  EmailJS, or your own API route).

## How the gallery zoom works

`src/components/Lightbox.jsx` is a small dependency-free stand-in
for antd's `Image` preview zoom. When a thumbnail is clicked,
`Projects.jsx` passes the thumbnail's `getBoundingClientRect()` in
as `originRect`. The lightbox first renders pinned to that exact
position and size, then on the next frame animates to a centered,
larger size, css handles the transition. Closing reverses the
animation. Arrow keys and on-screen buttons move between images in
the same project.
