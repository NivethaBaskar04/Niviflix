# Niviflix

A Netflix-style streaming UI clone built with **HTML, CSS, JavaScript and React** — no build tools, no `npm install`, no bundler. React and Babel are loaded from a CDN and JSX is compiled right in the browser, so you can open the project and start editing immediately.

> This is a front-end demo only. All movies/shows, cast names and posters are fictional placeholder content (gradient "posters" generated in CSS) — there's no real video, backend, or account system.

## Features

- **Profile picker** ("Who's watching?") screen, just like the real thing
- Sticky **navbar** that goes solid on scroll, with a working search box
- Full-bleed **hero banner** for the featured title
- Horizontally scrolling **rows** ("Trending Now", "Niviflix Originals", genre rows, a "Because you watched…" row, etc.)
- Click any poster to open a **details modal** (synopsis, rating, cast, maturity rating)
- Live **search** across titles and genres
- Fully **responsive** down to mobile
- One clean color/type system defined with CSS custom properties — easy to re-theme

## Project structure

```
niviflix/
├── index.html          # entry point — loads React/Babel from CDN + our files
├── css/
│   └── style.css       # all styling (theme tokens at the top)
├── js/
│   ├── data.js          # mock catalog: movies, genre themes, rows, profiles
│   └── app.js            # all React components (JSX)
└── README.md
```

## Running it

Because the app loads JSX files with Babel's `<script type="text/babel" src="...">`, the browser needs to fetch those files over `http://`, not `file://` (browsers block that fetch for local files for security reasons). So run a tiny local server from inside the `niviflix` folder:

**Option A — Python (built into most systems):**
```bash
cd niviflix
python3 -m http.server 8000
```
Then open **http://localhost:8000**

**Option B — Node:**
```bash
cd niviflix
npx serve .
```

**Option C — VS Code:** install the "Live Server" extension, right-click `index.html` → "Open with Live Server".

## Customizing

- **Change the catalog:** edit `js/data.js`. Each movie needs `id, title, year, rating, duration, maturity, genre, blurb, cast`. `genre` must match a key in `GENRE_THEMES`.
- **Add a genre color theme:** add a new entry to `GENRE_THEMES` in `js/data.js` (`from`/`to` are the poster gradient colors, `tag` is the label shown on the card).
- **Re-theme the whole site:** all colors, fonts and spacing are CSS variables at the top of `css/style.css` under `:root`.
- **Use real posters:** swap the `.poster-card` background gradient (see `posterStyle()` in `js/app.js`) for a `backgroundImage: url(...)` pointing at your own images.
- **Connect a real movie API:** if you want real data, sign up for a free API key at [themoviedb.org](https://www.themoviedb.org/documentation/api) and replace the contents of `data.js` with a `fetch()` call into your components.

## Notes

- This project intentionally avoids using any real movie posters, logos or trademarked titles — everything in the catalog is invented, so it's safe to use as a learning/portfolio project.
- No login/auth or payment flow is included since there's no backend; the "profile" picker is purely local UI state.

Enjoy building on top of it! 🎬
