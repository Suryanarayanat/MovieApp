import "../css/MovieCard.css"
import { useMovieContext } from "../Contexts/MoveContext";
function MovieCard({movie})
{
    const {isFavorite, addToFavorites, removeFavorites, } = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavouriteClick(e)
    {
        e.preventDefault();
        if (favorite) removeFavorites(movie.id)
        else addToFavorites(movie)
    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overplay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavouriteClick}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );  // ?.split("-")[0] this will display only the year
}

export default MovieCard;