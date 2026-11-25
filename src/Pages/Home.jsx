import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../CardComponents/MovieCard";
import { getPopularMovies, searchMovies } from "../Services/API";
import "../css/Home.css";

function MovieResults({ query }) {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let current = true;
    async function loadMovies() {
      try {
        const results = await (query ? searchMovies(query) : getPopularMovies());
        if (!Array.isArray(results)) throw new Error("Missing movie results");
        if (current) setMovies(results);
      } catch {
        if (current) setError(true);
      }
    }
    loadMovies();
    return () => { current = false; };
  }, [query]);

  const featured = !query && movies?.find(movie => movie.backdrop_path);
  return (
    <section>
      <h1>{query ? `Results for “${query}”` : "Popular movies"}</h1>
      {error ? <p role="alert">Movies could not be loaded. Please try again.</p>
        : !movies ? <p role="status">Loading movies…</p>
        : movies.length === 0 ? <p role="status">No movies found. Try another title.</p>
        : <>
          {featured && <article className="featured">
            <img alt="" src={`https://image.tmdb.org/t/p/w1280${featured.backdrop_path}`} />
            <div className="featured-info">
              <h2>{featured.title}</h2>
              <p>{featured.release_date?.slice(0, 4)}</p>
              <p className="synopsis">{featured.overview}</p>
            </div>
          </article>}
          <div className="movies-grid">{movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}</div>
        </>}
    </section>
  );
}

export default function Home() {
  const [params] = useSearchParams();
  const query = params.get("q")?.trim() || "";
  return <MovieResults key={query} query={query} />;
}
