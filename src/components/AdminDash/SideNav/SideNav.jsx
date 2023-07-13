import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { Navigate, useNavigate } from "react-router-dom";

import "./New.css";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../images/logo4.svg";
function SideNav(props) {
  const navigate = useNavigate();
  const [progres, setProgress] = useState();
  const param = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/total-file-size/${param.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setProgress(res.data.total_file_size);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  function adminLogOut() {
    axios
      .post(`http://127.0.0.1:8000/api/admin/logout/${param.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate(`/BAS/`);
        }
      });
  }

  function userLogOut() {
    axios
      .post(`http://127.0.0.1:8000/api/logout/${param.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate(`/BAS/`);
        }
      });
  }
  const text = `${progres}`;
  var numbers = parseInt(text.substring(0, 4) * 100);

  const location = useLocation();
  const path = location.pathname;
  return path.includes("admin") ? (
    <div className="sideNave">
      <div className={props.show ? "nav-container-show" : "nav-container-hide"}>
        <nav className="side-nav-open">
          <img className="nav-title my-5" src={logo} alt="" />
          <ul className="nav-ul">
            <Link className="nav-links" to="all-users">
              <i className="fa-solid fa-user-group mx-1"></i>All users
            </Link>
            <Link className="nav-links" to="add-user">
              <i className="fa-solid fa-user-plus mx-1"></i>Add user
            </Link>

            <Link className="nav-links" to="inbox">
              <i className="fa-solid fa-envelope mx-1"></i> Inbox
            </Link>
            <Link onClick={adminLogOut} className="nav-links log-out">
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </Link>
          </ul>
          <div></div>
        </nav>
      </div>
    </div>
  ) : (
    <div className="sideNave">
      <div className={props.show ? "nav-container-show" : "nav-container-hide"}>
        <nav className="side-nav-open">
          <img className="nav-title my-5" src={logo} alt="" />
          <ul className="nav-ul">
            <Link className="nav-links" to="folders">
              <i className="fa-solid fa-folder-open mx-1"></i>My Folders
            </Link>
            <Link className="nav-links" to="myfiles">
              <i className="fa-solid fa-folder-open mx-1"></i>My Files
            </Link>

            <Link className="nav-links" to="trash">
              <i className="fa-solid fa-trash-can mx-1"></i>Trash
            </Link>
          </ul>
          <div className="progres-margin">
            your space
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuemin="0"
                aria-valuenow={`${numbers}`}
                aria-valuemax="100"
                style={{ width: `${numbers}%` }}
              ></div>
            </div>
            <p className="used">{numbers * 10}MB of 1GB used</p>
          </div>
          <Link onClick={userLogOut} className="nav-links log-out">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default SideNav;
