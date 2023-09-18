import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Edit from "./pages/Edit";
import "react-bootstrap/dist/react-bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Link to=""></Link>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/edit/:shipmentOrderNo" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
