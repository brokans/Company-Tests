import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/global/Contact";
import HomePage from "./pages/global/HomePage";
import Navbars from "./components/Navbars.jsx";
import Tabs from "./components/Tabs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Locations from "./pages/global/Locations";
import AdminHome from "./pages/admin/AdminHome";
import Arhitektuur from "./pages/global/Arcitecture";
import Sisearhitektuur from "./pages/global/InteriorArchitecture";
import Eriosad from "./pages/global/Eriosad";
import MaintainLocations from "./pages/admin/MaintainLocations.";
import MaintainBlog from "./pages/admin/MaintainBlog";
import MaintainCourses from "./pages/admin/MaintainCourses";
import MaintainProjects from "./pages/admin/MaintainProjects";
import MaintainProducts from "./pages/admin/MaintainProducts";
import EditLocations from "./pages/admin/EditLocation";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Tabs />

      <Link to="/"></Link>
      <Link to="/contacts"></Link>
      <Link to="/locations"></Link>
      <Link to="/admin"></Link>
      <Link to="/arhitekuur"></Link>
      <Link to="/sisearhitekuur"></Link>
      <Link to="/eriosad"></Link>
      <Link to="/maintain-locations"></Link>
      <Link to="/maintain-blog"></Link>
      <Link to="/maintain-courses"></Link>
      <Link to="/maintain-projekts"></Link>
      <Link to="/maintain-products"></Link>



      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/arhitektuur" element={<Arhitektuur />} />
        <Route path="/sisearhitektuur" element={<Sisearhitektuur />} />
        <Route path="/eriosad" element={<Eriosad />} />
        <Route path="/admin/maintain-locations" element={<MaintainLocations />} />
        <Route path="/admin/maintain-blog" element={<MaintainBlog />} />
        <Route path="/admin/maintain-courses" element={<MaintainCourses />} />
        <Route path="/admin/maintain-projects" element={<MaintainProjects />} />
        <Route path="/admin/maintain-products" element={<MaintainProducts />} />
        <Route path="/admin/maintain-locations/edit-location/:index" element={<EditLocations />} />

      </Routes>
    </div>
  );
}

export default App;
