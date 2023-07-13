import { useEffect, useState } from "react";
import "./myfiles.css";
import axios from "axios";
import pdfImg from "../images/pdf.svg";
import docsImg from "../images/doc.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import xlsImg from "../images/Exel.svg";
import { useParams } from "react-router";

function MyFiles() {
  const [show, setShow] = useState(false);
  const [folderId, setFolderId] = useState();
  const [fileId, setFileId] = useState();
  const [view, setView] = useState(false);
  const params = useParams();
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setFileId(id);
  };

  function upload(file) {
    const formData = new FormData();
    formData.append("files", file);

    axios
      .post(
        `http://127.0.0.1:8000/api/upload/${params.id}`,
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
          alert("File added successfully");
          getFiles();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deletefiles(id, index) {
    const filesToDelete = [id];

    axios
      .delete(`http://127.0.0.1:8000/api/files/${params.id}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        data: {
          files: filesToDelete,
        },
      })
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
  function moveTo() {
    axios
      .post(
        `http://127.0.0.1:8000/api/move-files-to-folder/${params.id}`,
        {
          folder_id: folderId,
          file_ids: [fileId],
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("file moved");
          handleClose();
          getFiles();
        }
      });
  }

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [current, setCurrent] = useState(1);
  const [userFiles, setUserFiles] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = () => {
    if (!userFiles.length) {
      axios
        .get(`http://127.0.0.1:8000/api/files/${params.id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          setUserFiles(res.data.files);

          setFolders(res.data.folders_info);
        });
    }
  };

  return (
    <div className="my-files">
      <div className="container mt-5">
        <div className="row">
          <h1 className="col-lg-9">My Files</h1>
          <label
            htmlFor="file-input"
            className="top-btn my-files-btn btn btn-dark col-lg-3 col-md-6"
          >
            <i className="fa-solid fa-plus"></i> Add new file
          </label>
          <input
            type="file"
            id="file-input"
            className="file-input"
            onChange={(e) => {
              upload(e.target.files[0]);
            }}
          />
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>Choose folder to move</Modal.Header>
              <Modal.Body>
                {" "}
                <Form.Select
                  className="modal-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setFolderId(e.target.value);
                  }}
                >
                  <option style={{ display: "none" }} value="" selected>
                    Select Folder
                  </option>
                  {folders.map((item) => {
                    return (
                      <option
                        className="custom-option option-btn btn btn-dark text-light"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Modal.Body>
              <Modal.Footer className="modal-footer">
                <Button
                  className="button-close"
                  variant="outline-dark"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  className="button-ok"
                  variant="dark"
                  onClick={() => {
                    moveTo();
                  }}
                >
                  Move
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="row all-files bg-light mt-5">
            {userFiles.length === 0 ? (
              <h1>
                {" "}
                <center>
                  <h1 className="my-3">No files to show</h1>
                  <p>click add new file to add files</p>
                </center>
              </h1>
            ) : (
              userFiles.slice(start, end).map((item, index) => {
                const url = `${item.url}`;

                let fileName = url.split("/").pop();

                const newUrl = url.includes(".pdf")
                  ? pdfImg
                  : url.includes(".xls")
                  ? xlsImg
                  : docsImg;
                return (
                  <div className="file-card card col-lg-4 col-md-6 col-sm-12  ">
                    <div className="three-dots">
                      <div className="dropdown">
                        <h1>
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </h1>
                        <div className="dropdown-content">
                          <a
                            href={item.url}
                            className="dropdown-item"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Open
                          </a>
                          <a
                            onClick={() => {
                              deletefiles(item.id, index);
                            }}
                            href="#"
                            className="dropdown-item"
                          >
                            Delete
                          </a>
                          <a
                            href={item.url}
                            className="dropdown-item"
                            download={item.url}
                          >
                            Download
                          </a>
                          <a
                            className="dropdown-item"
                            onClick={() => handleShow(item.id)}
                          >
                            move
                          </a>
                        </div>
                      </div>
                    </div>
                    <img className="card-img-top" src={newUrl} alt="Card  cap" />
                    <div className="card-body">
                      <h3>{fileName}</h3>
                      <p className="card-text">
                        {item.created_at} &nbsp; {item.size_in_megabits}
                      </p>
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
                        setCurrent(current - 1);
                      } else {
                        // Reset to the last page
                        const lastPageStart =
                          Math.floor(userFiles.length / 10) * 10;
                        setStart(userFiles.length - 10);
                        setEnd(userFiles.length);
                        setCurrent(Math.ceil(userFiles.length / 10));
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
                    {Math.ceil(userFiles.length / 10)}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    onClick={(event) => {
                      event.preventDefault();

                      if (
                        start < userFiles.length - 10 &&
                        end < userFiles.length
                      ) {
                        setStart(start + 10);
                        setEnd(end + 10);
                        setCurrent(current + 1);
                      } else {
                        setStart(0);
                        setEnd(10);
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
          </div>
        </div>
        <button
          onClick={() => {
            setView(!view);
          }}
          className="group btn btn-dark"
        >
          {" "}
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className={view ? "btn-group-vertical" : "hide"}>
          <div className="bg-dark text-light" style={{ width: "100%" }}>
            <div onClick={() => {setView(!view);}} style={{width: "max-content"}}>
              <i
                className="exit fa-solid fa-plus"
              ></i>
            </div>
          </div>

          <label
            htmlFor="file-input"
            className=" bottom-btn btn btn-dark col-lg-3 col-md-3 col-sm-5"
          >
            <i className="fa-solid fa-plus"></i> Add new file
          </label>
        </div>
      </div>
    </div>
  );
}
export default MyFiles;
