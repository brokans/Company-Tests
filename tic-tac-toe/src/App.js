import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="game/" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
