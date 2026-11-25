import "../css/Favorites.css";
import { useMovieContext } from "../Contexts/movieContext";
import MovieCard from "../CardComponents/MovieCard";

export default function Favorites() {
  const { favorites } = useMovieContext();
  return (
    <section>
      <h1>Your favorites</h1>
      {favorites.length ? (
        <div className="movies-grid">{favorites.map(movie => <MovieCard movie={movie} key={movie.id} />)}</div>
      ) : <p className="favorites-empty">Save a movie using its heart button to see it here.</p>}
    </section>
  );
}
