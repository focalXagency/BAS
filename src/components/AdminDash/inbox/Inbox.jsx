import { useEffect, useState } from "react";
import "./message.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Inbox() {
  const navigate = useNavigate();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [messageInfo, setMessageInfo] = useState([]);
  const [counter, setCounter] = useState(messageInfo.length);
  const params = useParams();

  useEffect(() => {
    if (!messageInfo.length) {
      axios
        .get("http://127.0.0.1:8000/api/admin/messages", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          setMessageInfo(res.data.data);
          setCounter(res.data.data.length);
        });
    }
  }, []);

  return (
    <div className="inbox">
      <div className="container mt-5">
        <div className="row ">
          <h1 className="col-12">All Mesagess</h1>
          <div className="btn btn-light col-3 ">
            <span className="counter">{counter}</span> &nbsp;{" "}
            <span className="counter-text">
              All
              <br />
              messages
            </span>
          </div>
        </div>
        <div className="row">
          <table id="page-content-wrapper" className="table table-hover">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th className="hide-users" scope=" col">
                  CompanyName
                </th>
                <th className="hide-users" scope="s col">
                  Position
                </th>
                <th className="hide-users" scope=" col">
                  Service
                </th>
                <th scope="col">view</th>
              </tr>
            </thead>
            <tbody>
              {messageInfo.length === 0 ? (
                <center>
                  <h1 className="my-3">No messages to show</h1>
                </center>
              ) : (
                messageInfo.map((item, index) => {
                  return (
                    <tr className={index % 2 !== 0 ? "grey" : ""} key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td className="hide-users">{item.company_name}</td>
                      <td className="hide-users">{item.position}</td>
                      <td className="hide-users">{item.service}</td>
                      <td
                        onClick={() =>
                          navigate(`/BAS/admin/${params.id}/message/${item.id}`)
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
                    if (start >= 10) {
                      setStart(start - 10);
                      setEnd(end - 10);
                    } else {
                      // Reset to the last page
                      const lastPageStart =
                        Math.floor(messageInfo.length / 10) * 10;
                      setStart(lastPageStart);
                      setEnd(messageInfo.length);
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
                  ..
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {Math.ceil(messageInfo.length / 10)}
                </a>
              </li>
              <li className="page-item">
                <a
                  onClick={(event) => {
                    event.preventDefault();

                    if (
                      start < messageInfo.length - 10 &&
                      end < messageInfo.length
                    ) {
                      setStart(start + 10);
                      setEnd(end + 10);
                    } else {
                      setStart(0);
                      setEnd(10);
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

export default Inbox;
