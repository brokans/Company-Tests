import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Tabel from "./pages/Tabel";
import GameOfLife from "./pages/GameOfLife";
import TableArticle from "./pages/TableArticle"

function App() {
  return (
    <div className="App">
      <div className="nav-bar" expand="md">
        <Link to="/">
          <img className="logo" src="/logo.svg" alt=""/>
        </Link>
        <ul className="nav-bar-ul">
          <li>
            <Link to="article">ARTIKKEL</Link>
          </li>
          <li>
            <Link to="tabel/">TABEL</Link>
          </li>
          <li>
            <Link to="gameOfLife/">GAME OF LIFE</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/article/:id" element={<TableArticle />} />
        <Route path="/article" element={<Article />} />
        <Route path="/tabel" element={<Tabel />} />
        <Route path="/gameOfLife" element={<GameOfLife />} />
      </Routes>
    </div>
  );
}

export default App;
