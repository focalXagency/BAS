import { useEffect, useState } from "react";
import "./trash.css";
import axios from "axios";
import pdfImg from "../images/pdf.svg";
import docsImg from "../images/doc.svg";
import xlsImg from "../images/Exel.svg";
import { useParams } from "react-router";

function Trash() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [trash, setTrash] = useState([]);
  const params = useParams();
  function deletefiles(id) {
    const filesToDelete = [id];

    axios
      .delete(
        `http://127.0.0.1:8000/api/delete_files_permanently/${params.id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          data: {
            files: filesToDelete,
          },
        }
      )
      .then((res) => {
        let conf = window.confirm("sure");
        if (conf) {
          if (res.status === 200) {
            alert("File deleted successfully");
            getFiles();
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function restore(id) {
    axios
      .post(
        `http://127.0.0.1:8000/api/files/restore/${params.id}`,
        {
          files: [id],
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        alert("done");
        getFiles();
      });
  }

  useEffect(() => {
    getFiles();
  }, []);
  const getFiles = () => {
    if (!trash.length) {
      axios
        .get(`http://127.0.0.1:8000/api/soft-delete-files/${params.id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          setTrash(res.data.documents);
        });
    }
  };

  return (
    <div className="trash">
      <div className="container mt-5">
        <div className="row">
          <h1 className="col-9">Trash</h1>
          <a
            onClick={() => {
              setTrash([]);
            }}
            href="#"
            className=" col-lg-3 col-md-6 mt-3 link-dark"
          >
            Empty Trash
          </a>
          <div className="row all-trash-files bg-light mt-5">
            {trash.length === 0 ? (
              <h1>Trash is empty</h1>
            ) : (
              trash.map((item) => {
                const url = `${item.url}`;
                let fileName = url.split("/").pop();

                const newUrl = url.includes(".pdf")
                  ? pdfImg
                  : url.includes(".xls")
                  ? xlsImg
                  : docsImg;
                return (
                  <div className="file-card card col-lg-3 col-md-6 ">
                    <div className="three-dots">
                      <div className="dropdown">
                        <h1>
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </h1>
                        <div className="dropdown-content">
                          <a
                            className="dropdown-item"
                            onClick={() => restore(item.id)}
                          >
                            Restore
                          </a>
                          <a
                            onClick={() => {
                              deletefiles(item.id);
                            }}
                            href="#"
                            className="dropdown-item"
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <img
                      className="card-img-top"
                      src={newUrl}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h3>{fileName}</h3>
                      <p className="card-text"></p>
                    </div>
                  </div>
                );
              })
            )}
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
                        const lastPageStart = Math.floor(trash.length / 10) * 10;
                        setStart(lastPageStart);
                        setEnd(trash.length);
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
                    {Math.ceil(trash.length / 10)}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    onClick={(event) => {
                      event.preventDefault();

                      if (start < trash.length - 10 && end < trash.length) {
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
    </div>
  );
}
export default Trash;
