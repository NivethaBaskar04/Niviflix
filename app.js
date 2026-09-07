/* ============================================================
   NIVIFLIX — App
   Plain-browser React (UMD) + Babel standalone, no build step.
   All content is fictional demo data from data.js.
   ============================================================ */

const { useState, useEffect, useRef, useMemo } = React;

function posterStyle(genreKey) {
  const t = GENRE_THEMES[genreKey] || GENRE_THEMES.drama;
  return { backgroundImage: `linear-gradient(155deg, ${t.from} 0%, ${t.to} 100%)` };
}

/* ---------------- Poster Card ---------------- */
function PosterCard({ movie, onOpen }) {
  const theme = GENRE_THEMES[movie.genre];
  return (
    <button
      className="poster-card"
      style={posterStyle(movie.genre)}
      onClick={() => onOpen(movie)}
      aria-label={`View details for ${movie.title}`}
    >
      <span className="poster-genre-mark">{theme.tag}</span>
      <span className="poster-watermark">{movie.title}</span>
      <span className="poster-overlay">
        <span className="poster-title">{movie.title}</span>
        <span className="poster-sub">
          <span style={{ color: "var(--gold)" }}>★ {movie.rating}</span>
          <span>· {movie.year}</span>
        </span>
      </span>
    </button>
  );
}

/* ---------------- Row ---------------- */
function Row({ title, ids, onOpen }) {
  const trackRef = useRef(null);
  const movies = ids.map(getById).filter(Boolean);

  const scrollBy = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 600, behavior: "smooth" });
    }
  };

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-track" ref={trackRef}>
        {movies.map((m) => (
          <PosterCard key={m.id} movie={m} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ movie, onOpen }) {
  if (!movie) return null;
  const theme = GENRE_THEMES[movie.genre];
  return (
    <header className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `linear-gradient(155deg, ${theme.from} 0%, ${theme.to} 60%, #14100F 100%)`,
        }}
      />
      <div className="hero-content">
        <div className="hero-badge">🎬 Niviflix Original</div>
        <h1 className="hero-title">{movie.title}</h1>
        <div className="hero-meta">
          <span className="rating">★ {movie.rating}</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span>{movie.maturity}</span>
        </div>
        <p className="hero-blurb">{movie.blurb}</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onOpen(movie)}>
            ▶ Play
          </button>
          <button className="btn btn-secondary" onClick={() => onOpen(movie)}>
            ⓘ More Info
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Modal ---------------- */
function Modal({ movie, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!movie) return null;
  const theme = GENRE_THEMES[movie.genre];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal-hero"
          style={{ backgroundImage: `linear-gradient(155deg, ${theme.from}, ${theme.to})` }}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
          <h2 className="modal-hero-title">{movie.title}</h2>
        </div>
        <div className="modal-body">
          <div className="modal-meta">
            <span className="rating">★ {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span className="maturity">{movie.maturity}</span>
            <span>{theme.tag}</span>
          </div>
          <p className="modal-blurb">{movie.blurb}</p>
          <p className="modal-cast">Cast: <span>{movie.cast}</span></p>
          <div className="modal-actions">
            <button className="btn btn-primary">▶ Play</button>
            <button className="btn btn-secondary">+ My List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar({ profile, onHome, onSwitchProfile, onSearch, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const submit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <button className="brand" onClick={onHome}>NIVIFLIX</button>
        <ul className="nav-links">
          <li className={active === "home" ? "active" : ""} onClick={onHome}>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="nav-right">
        <form className={`search-form ${searchOpen ? "open" : ""}`} onSubmit={submit}>
          <button
            type="button"
            className="search-toggle"
            aria-label="Toggle search"
            onClick={() => setSearchOpen((s) => !s)}
          >
            🔍
          </button>
          {searchOpen && (
            <input
              ref={inputRef}
              className="search-input"
              placeholder="Titles, genres..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                onSearch(e.target.value);
              }}
            />
          )}
        </form>
        <button
          className="nav-avatar"
          style={{ background: profile.color }}
          onClick={onSwitchProfile}
          title="Switch profile"
        >
          {profile.name[0]}
        </button>
      </div>
    </nav>
  );
}

/* ---------------- Search Results ---------------- */
function SearchResults({ query, onOpen }) {
  const q = query.trim().toLowerCase();
  const results = CATALOG.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      GENRE_THEMES[m.genre].tag.toLowerCase().includes(q)
  );

  return (
    <div className="search-results">
      <h2>Results for “{query}”</h2>
      {results.length === 0 ? (
        <p className="empty-state">Nothing matched that search. Try a genre like “sci-fi” or “comedy”.</p>
      ) : (
        <div className="results-grid">
          {results.map((m) => (
            <PosterCard key={m.id} movie={m} onOpen={onOpen} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const links = [
    "FAQ", "Help Center", "Account", "Media Center",
    "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use",
    "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us",
  ];
  return (
    <footer className="site-footer">
      <p>Questions? This is a demo project, not a real streaming service.</p>
      <ul className="footer-links">
        {links.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <p>Niviflix — a fictional clone project built for learning purposes.</p>
    </footer>
  );
}

/* ---------------- Profile Picker ---------------- */
function ProfilePicker({ onSelect }) {
  return (
    <div className="splash">
      <div className="splash-logo">NIVIFLIX</div>
      <h1 className="splash-heading">Who's watching?</h1>
      <div className="profile-grid">
        {PROFILES.map((p) => (
          <button className="profile-card" key={p.name} onClick={() => onSelect(p)}>
            <span className="profile-avatar" style={{ background: p.color }}>
              {p.name[0]}
            </span>
            <span className="profile-name">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- App Root ---------------- */
function App() {
  const [profile, setProfile] = useState(null);
  const [activeMovie, setActiveMovie] = useState(null);
  const [query, setQuery] = useState("");

  const featured = useMemo(() => getById(8), []); // Ashfall Kingdoms as hero

  if (!profile) {
    return <ProfilePicker onSelect={setProfile} />;
  }

  const goHome = () => setQuery("");

  return (
    <React.Fragment>
      <Navbar
        profile={profile}
        onHome={goHome}
        onSwitchProfile={() => setProfile(null)}
        onSearch={setQuery}
        active={query ? "" : "home"}
      />

      {query ? (
        <SearchResults query={query} onOpen={setActiveMovie} />
      ) : (
        <React.Fragment>
          <Hero movie={featured} onOpen={setActiveMovie} />
          <main className="rows">
            {ROWS.map((row) => (
              <Row key={row.title} title={row.title} ids={row.ids} onOpen={setActiveMovie} />
            ))}
          </main>
        </React.Fragment>
      )}

      <Footer />
      <Modal movie={activeMovie} onClose={() => setActiveMovie(null)} />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
