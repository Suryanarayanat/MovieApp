import { useLayoutEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("movieApp.theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("movieApp.theme", next);
    } catch {
      // The current session can still switch themes when storage is unavailable.
    }
  }

  function submitSearch(event) {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get("q").trim();
    navigate({ pathname: "/", search: query ? createSearchParams({ q: query }).toString() : "" });
  }

  return (
    <header className="app-header">
      <span className="catalog-label">Movies</span>
      <form key={location.key} role="search" onSubmit={submitSearch} className="search-form">
        <input name="q" type="search" aria-label="Search movies" placeholder="Search for movies"
          defaultValue={params.get("q") || ""} />
        <button type="submit" aria-label="Submit movie search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="7" /><path d="m15 15 6 6" /></svg>
        </button>
      </form>
      <button type="button" className="theme-toggle" onClick={toggleTheme}
        aria-pressed={theme === "dark"}>Dark mode</button>
    </header>
  );
}
