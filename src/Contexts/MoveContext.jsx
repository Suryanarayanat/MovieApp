import { useState, useEffect } from "react";
import { MovieContext } from "./movieContext";

function readFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("favorites"));
    return Array.isArray(saved) ? saved.filter(movie => movie?.id != null) : [];
  } catch {
    return [];
  }
}

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState(readFavorites);

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {
      // Keep session favorites usable when browser storage is unavailable.
    }
  }, [favorites]);

  const addToFavorites = movie => setFavorites(items =>
    items.some(item => item.id === movie.id) ? items : [...items, movie]);
  const removeFavorites = id => setFavorites(items => items.filter(item => item.id !== id));
  const isFavorite = id => favorites.some(item => item.id === id);

  return <MovieContext.Provider value={{ favorites, addToFavorites, removeFavorites, isFavorite }}>
    {children}
  </MovieContext.Provider>;
}
