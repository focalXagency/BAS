import "bootstrap/dist/css/bootstrap.min.css";

import "./DashboardStyle.css";
// import "./SideNav/SideNav.css"
import SideNav from "../AdminDash/SideNav/SideNav";
import { Outlet } from "react-router";
import { useState } from "react";
function Dashboard() {
  const [show, setShow] = useState(true);

  return (
    <div className="dashboard">
      <SideNav show={show} />
      <div className={show ? "content" : "content-small"}>
        <div
          onClick={() => {
            setShow(!show);
          }}
        >
          <i
            className={
              show
                ? "bars fa-solid fa-bars mx-2 mt-3"
                : "bars-close fa-solid fa-bars mx-2 mt-3 "
            }
            style={{ color: " #000000" }}
          ></i>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
