import { useEffect, useState } from "react";
import "./Users.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Users() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [counter, setCounter] = useState();
  const [current, setCurrent] = useState(1);
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const params = useParams();
  useEffect(() => {
    fetchData();
  }, [current]);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/admin/users?page=${current}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setUserInfo(res.data.users.data);
        setCounter(res.data.users.total);
        setPrev(res.data.users.prev_page_url);
        setNext(res.data.users.next_page_url);
      });
  };

  return (
    <div className="users">
      <div className="container mt-5">
        <div className="row ">
          <h1 className="col-12">All Users</h1>

          <div className="btn btn-light col-3 ">
            <span className="counter">{counter}</span> &nbsp;{" "}
            <span className="counter-text">
              All
              <br />
              files
            </span>{" "}
          </div>
        </div>
        <div className="row">
          <table id="page-content-wrapper" className="table table-hover my-table">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th className="hide-users" scope="col">
                  CompanyName
                </th>
                <th className="hide-users" scope="col">
                  Position
                </th>
                <th className="hide-users" scope="col">
                  Service
                </th>
                <th scope="col">view</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.length === 0 ? (
                <center>
                  <h1 className="my-3">No users to show</h1>
                  <p>click add user to add users</p>
                </center>
              ) : (
                userInfo.map((item, index) => {
                  return (
                    <tr className={index % 2 !== 0 ? "grey" : ""} key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {item.name} {item.id}
                      </td>
                      <td className="hide-users">{item.company_name}</td>
                      <td className="hide-users">{item.position}</td>
                      <td className="hide-users">{item.service}</td>
                      <td
                        onClick={() =>
                          navigate(`/BAS/admin/${params.id}/files/${item.id}`)
                        }
                      >
                        <i className="view-files fa-solid fa-play"></i>{" "}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <nav aria-label="pages Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a
                  onClick={(event) => {
                    event.preventDefault();
                    if (prev != null) {
                      setCurrent(current - 1);
                    }
                  }}
                  className="page-link"
                  href="#"
                >
                  &lt;
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {current}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {Math.ceil(counter / 10)}{" "}
                </a>
              </li>
              <li className="page-item">
                <a
                  onClick={(event) => {
                    event.preventDefault();

                    if (next != null) {
                      setCurrent(current + 1);
                    }
                  }}
                  className="page-link"
                  href="#"
                >
                  &gt;
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Users;
