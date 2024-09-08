import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import MaintainBlog from "../../pages/admin/MaintainBlog";
import MaintainLocations from "../../pages/admin/MaintainLocations.";
import MaintainCourses from "../../pages/admin/MaintainCourses";
import MaintainProjects from "../../pages/admin/MaintainProjects";

function AdminTabs() {
  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 justify-content-center"
      >
        {/* <Tab eventKey="blog" title="Halda Blogi">
          <MaintainBlog />
        </Tab> */}
        <Tab eventKey="location" title="Halda Asukohtasid">
          <MaintainLocations />
        </Tab>
        <Tab eventKey="courses" title="Halda Kursuseid">
          <MaintainCourses />
        </Tab>
        {/* <Tab eventKey="products" title="Halda Tooteid">
          <MaintainProducts />
        </Tab> */}
        <Tab eventKey="projects" title="Halda Projekte">
          <MaintainProjects />
        </Tab>
      </Tabs>
    </div>
  );
}

export default AdminTabs;
