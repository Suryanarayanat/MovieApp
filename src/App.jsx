import MoviCard from "./CardComponents/MovieCard.jsx";
import Home from "./Pages/Home.jsx";
import "./css/App.css"
import {Routes, Route} from "react-router-dom"
import Favorites from "./Pages/Favorites.jsx";
import NavBar from "./CardComponents/NavBar.jsx";
import { MovieProvider } from "./Contexts/MoveContext.jsx";

function App() 
{
  return( 
    <MovieProvider>
    <NavBar />
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/favorites" element={<Favorites />}/>
     </Routes>
  </main>  
  </MovieProvider> 
  );
}
 

export default App;