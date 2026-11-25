import { Link, NavLink } from "react-router-dom";
import "../css/NavBar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link className="brand" to="/" aria-label="Movie App home">movie<span>app</span></Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="7" /><path d="m15 15 6 6" /></svg>
          Explore
        </NavLink>
        <NavLink to="/favorites">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z" /></svg>
          Favorites
        </NavLink>
      </nav>
    </aside>
  );
}
