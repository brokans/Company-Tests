import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Artikkel from "./pages/Artikkel";
import Tabel from "./pages/Tabel";
import GameOfLife from "./pages/GameOfLife";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <img className="logo" src="/logo.svg" alt="" />
        <ul className="nav-bar-ul">
          <li>
            <Link to="artikkel/">ARTIKKEL</Link>
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
        <Route path="/artikkel" element={<Artikkel />} />
        <Route path="/tabel" element={<Tabel />} />
        <Route path="/gameOfLife" element={<GameOfLife />} />
      </Routes>
    </div>
  );
}

export default App;
