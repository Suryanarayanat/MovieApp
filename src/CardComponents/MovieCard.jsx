import { useState } from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../Contexts/movieContext";

export default function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFavorites } = useMovieContext();
  const saved = isFavorite(movie.id);
  const [failedPoster, setFailedPoster] = useState(null);

  return (
    <article className="movie-card">
      <div className="movie-poster">
        {movie.poster_path && failedPoster !== movie.poster_path
          ? <img loading="lazy" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="" onError={() => setFailedPoster(movie.poster_path)} />
          : <span>Poster unavailable</span>}
        <div className="movie-overlay">
          <button type="button" className="favorite-btn" aria-pressed={saved}
            aria-label={`Favorite ${movie.title}`}
            onClick={() => saved ? removeFavorites(movie.id) : addToFavorites(movie)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20 4 12C-2 5 7-1 12 6c5-7 14-1 8 6z" /></svg>
          </button>
        </div>
      </div>
      <div className="movie-info"><h3>{movie.title}</h3><p>{movie.release_date?.slice(0, 4)}</p></div>
    </article>
  );
}
