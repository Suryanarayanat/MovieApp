import { Route, Routes } from "react-router-dom";
import Sidebar from "./CardComponents/NavBar";
import Header from "./CardComponents/Header";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import { MovieProvider } from "./Contexts/MoveContext";
import "./css/App.css";

function MainContent({ children }) {
  return <main className="main-content" id="main-content" tabIndex={-1}>{children}</main>;
}

function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Sidebar />
      <div className="workspace">
        <Header />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <MovieProvider>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </AppLayout>
    </MovieProvider>
  );
}
