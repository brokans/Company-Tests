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
import Store from "./pages/global/Store";
import MaintainLocations from "./pages/admin/MaintainLocations.";
import MaintainBlog from "./pages/admin/MaintainBlog";
import MaintainCourses from "./pages/admin/MaintainCourses";
import MaintainProjects from "./pages/admin/MaintainProjects";
import MaintainProducts from "./pages/admin/MaintainProducts";
import EditLocations from "./pages/admin/EditLocation";
import EditProject from "./pages/admin/EditProject";
import CategoryPage from "./pages/global/CategoryPage";
import Cart from "./pages/global/Cart";
import EditProduct from "./pages/admin/EditProduct";
import ProductPage from "./pages/global/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Tabs />

      <Link to="/"></Link>
      <Link to="/contacts"></Link>
      <Link to="/locations"></Link>
      <Link to="/admin"></Link>
      <Link to="/cart"></Link>
      <Link to="/arhitekuur"></Link>
      <Link to="/sisearhitekuur"></Link>
      <Link to="/store"></Link>
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/arhitektuur" element={<Arhitektuur />} />
        <Route path="/sisearhitektuur" element={<Sisearhitektuur />} />
        <Route path="/store/" element={<Store />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product-page/:productId" element={<ProductPage />} />
        <Route path="/admin/maintain-locations" element={<MaintainLocations />} />
        <Route path="/admin/maintain-blog" element={<MaintainBlog />} />
        <Route path="/admin/maintain-courses" element={<MaintainCourses />} />
        <Route path="/admin/maintain-projects" element={<MaintainProjects />} />
        <Route path="/admin/maintain-products" element={<MaintainProducts />} />
        <Route path="/admin/edit-product/:productId" element={ <EditProduct /> } />
        <Route path="/admin/maintain-locations/edit-location/:index" element={<EditLocations />} />
        <Route path="/admin/maintain-projects/edit-project/:index" element={<EditProject />} />

      </Routes>
    </div>
  );
}

export default App;
