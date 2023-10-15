import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

function AdminHome() {
  return (
    <div>
      {" "}
      <br /> <br />
      <div className="admin-buttons">
        <Button className="admin-button" as={Link} to="/admin/maintain-blog" variant="secondary">
          Halda Blogi
        </Button>{" "}
        <Button className="admin-button" as={Link} to="/admin/maintain-locations" variant="secondary">
          Halda Asukohtasid
        </Button>{" "}
        <Button className="admin-button" as={Link} to="/admin/maintain-courses" variant="secondary">
          Halda Kursuseid
        </Button>{" "}
        <Button className="admin-button" as={Link} to="/admin/maintain-products" variant="secondary">
          Halda Tooteid
        </Button>{" "}
        <Button className="admin-button" as={Link} to="/admin/maintain-projects" variant="secondary">
          Halda Projekte
        </Button>{" "}
      </div>
    </div>
  );
}

export default AdminHome;
