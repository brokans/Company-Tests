import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/global/Contact";

import HomePage from "./pages/global/HomePage";
import Navbars from "./components/Navbars.jsx";
import AdminHome from "./pages/admin/AdminHome";
import Arhitektuur from "./pages/global/Arcitecture";
import Sisearhitektuur from "./pages/global/InteriorArchitecture";
import MaintainLocations from "./pages/admin/MaintainLocations.";
import MaintainBlog from "./pages/admin/MaintainBlog";
import MaintainCourses from "./pages/admin/MaintainCourses";
import MaintainProjects from "./pages/admin/MaintainProjects";
import MaintainProducts from "./pages/admin/MaintainProducts";
import EditLocations from "./pages/admin/EditLocation";
import EditProject from "./pages/admin/EditProject";
import CategoryPage from "./pages/global/CategoryPage";
import ProductPage from "./pages/global/ProductPage";
import Blog from "./pages/global/Blog";
import ProjectPage from "./pages/global/Projectpage";
import Courses from "./pages/global/Courses";
import Portfolio from "./pages/global/Portfolio.jsx";
import Services from "./pages/global/Services.jsx";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Link to="/"></Link>
      <Link to="/contacts"></Link>
      <Link to="/admin"></Link>
      <Link to="/portfolio"></Link>
      <Link to="/services"></Link>
      <Link to="/arhitektuur"></Link>
      <Link to="/sisearhitektuur"></Link>
      <Link to="/maintain-locations"></Link>
      <Link to="/maintain-blog"></Link>
      <Link to="/maintain-courses"></Link>
      <Link to="/maintain-projekts"></Link>
      <Link to="/maintain-products"></Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/portfolio" element={< Portfolio />} />
        <Route path="/services" element={< Services />} />
        <Route path="/arhitektuur" element={<Arhitektuur />} />
        <Route path="/sisearhitektuur" element={<Sisearhitektuur />} />
        <Route path="/courses" element={< Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product-page/:productId" element={<ProductPage />} />
        <Route path="/project-page/:name" element={<ProjectPage />} />
        <Route
          path="/admin/maintain-locations"
          element={<MaintainLocations />}
        />
        <Route path="/admin/maintain-blog" element={<MaintainBlog />} />
        <Route path="/admin/maintain-courses" element={<MaintainCourses />} />
        <Route path="/admin/maintain-projects" element={<MaintainProjects />} />
        <Route path="/admin/maintain-products" element={<MaintainProducts />} />
        <Route
          path="/admin/maintain-locations/edit-location/:index"
          element={<EditLocations />}
        />
        <Route
          path="/admin/maintain-projects/edit-project/:index"
          element={<EditProject />}
        />
      </Routes>
    </div>
  );
}

export default App;
