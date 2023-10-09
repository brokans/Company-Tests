import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Tabel from "./pages/Tabel";
import GameOfLife from "./pages/GameOfLife";
import TableArticle from "./pages/TableArticle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div className="App">
      <div className={`nav-bar ${navOpen ? 'open' : ''}`} expand="md">
        
        {/* <Link to="/">
         
        </Link> */}
        <a href="/"> <img className={`logo ${navOpen ? 'open' : ''}`} src="/logo.svg" alt=""/></a>
        <ul className={`nav-bar-ul ${navOpen ? 'open' : ''}`}>
          <li>
            <a href="/article">ARTIKKEL</a>
            {/* <Link to="article"></Link> */}
          </li>
          <li>
            {/* <Link to="tabel/">TABEL</Link> */}
            <a href="/tabel">TABEL</a>
          </li>
          <li>
            {/* <Link to="gameOfLife/">GAME OF LIFE</Link> */}
            <a href="/gameOfLife">GAME OF LIFE</a>
          </li>
        </ul>
      </div>

      <div className="nav-bar-top" expand="md">
        <button onClick={() => toggleNav()} className="navbar-btn">
          {navOpen ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faBars} /> }
        </button>
        <Link to="/">
          <img className="logo" src="/logo.svg" alt=""/>
        </Link>
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
