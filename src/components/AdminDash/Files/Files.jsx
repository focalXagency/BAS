import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import pdfImg from "../../images/pdf.svg";
import docsImg from "../../images/doc.svg";
import "./Files.css";
import xlsImg from "../../images/Exel.svg";

function Files() {
  const params = useParams();
  const [files, setFiles] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [current, setCurrent] = useState(1);
  const [inforamtion, setInformation] = useState([]);
  function upload(file) {
    axios
      .post(
        `http://127.0.0.1:8000/api/admin/user/${params.id}/upload`,
        { files: [file] },
        {
          headers: {
            "content-type": "multipart/form-data",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
          alert("File added successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (!files.length) {
      axios
        .get(`http://127.0.0.1:8000/api/admin/user/${params.id}/files`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          setFiles(res.data.files);
          setInformation(res.data.user);
        });
    }
  }, []);

  return (
    <div className="files">
      <div className="container mt-5">
        <div className="row">
          <h1>{inforamtion.name}</h1>
          <div className="row sub-row">
            <ul>
              <li>
                Company's Name:<h5>{inforamtion.company_name}</h5>
              </li>
              <li>
                Position:<h5>{inforamtion.position}</h5>
              </li>
              <li>
                Service:<h5>{inforamtion.service} </h5>
              </li>
            </ul>
          </div>
        </div>
        <h1>Files</h1>
        <div className="row cards-container">
          {files.length === 0 ? (
            <center>
              <h1 className="my-3">No files to show</h1>
              <p>click the upload icon to add files</p>
            </center>
          ) : (
            files.slice(start, end).map((item) => {
              const url = `${item.url}`;

              let fileName = url.split("/").pop();
              const newUrl = url.includes(".pdf")
                ? pdfImg
                : url.includes(".xls")
                ? xlsImg
                : docsImg;
              return (
                <div className="file-card card col-lg-4 col-md-6 my-2">
                  <div className="three-dots">
                    <div className="dropdown">
                      <h1>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </h1>
                      <div className="dropdown-content">
                        <a href="#" className="dropdown-item">
                          Open
                        </a>
                        <a
                          // onClick={deletefiles(item.id)}
                          href="#"
                          className="dropdown-item"
                        >
                          Delete
                        </a>
                        <a href="#" className="dropdown-item">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <img className="card-img-top" src={newUrl} alt="Card cap" />
                  <div className="card-body">
                    <p>
                      {fileName}
                      <br />
                      {item.created_at} &nbsp; {item.size_in_megabits}
                    </p>
                  </div>
                </div>
              );
            })
          )}
          <nav
            className="pagination-nav col-11"
            aria-label="pages Page navigation example col-1"
          >
            <ul className="pagination">
              <li className="page-item">
                <a
                  onClick={(event) => {
                    event.preventDefault();
                    if (start >= 5) {
                      setStart(start - 5);
                      setEnd(end - 5);
                      setCurrent(current - 1);
                    } else {
                      // Reset to the last page

                      setStart(files.length - 5);
                      setEnd(files.length);
                      setCurrent(Math.ceil(files.length / 5));
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
                  {Math.ceil(files.length / 5)}
                </a>
              </li>
              <li className="page-item">
                <a
                  onClick={(event) => {
                    event.preventDefault();

                    if (start < files.length - 5 && end < files.length) {
                      setStart(start + 5);
                      setEnd(end + 5);
                      setCurrent(current + 1);
                    } else {
                      setStart(0);
                      setEnd(5);
                      setCurrent(1);
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
          {/* <input onChange={(e) => upload(e.target.value)} type="file" /> */}

          <label htmlFor="file-input" className="col-1">
            <i className=" files-icon fa-solid fa-download col-1"></i>{" "}
          </label>
          <input
            type="file"
            id="file-input"
            className="file-input"
            onChange={(e) => {
              upload(e.target.files[0]);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Files;
