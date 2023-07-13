import { useEffect, useState } from "react";
import "./Folders.css";
import axios, { AxiosHeaders } from "axios";
import Folder from "../images/folder1.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

function Folders() {
  const [folders, setFolders] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [create, setCreate] = useState(false);
  const craeteClose = () => setCreate(false);
  const createOpen = () => setCreate(true);
  const [rename, setrename] = useState(false);
  const renameClose = () => setrename(false);
  const renameOpen = () => setrename(true);
  const [createName, SetCreateName] = useState();
  const [newName, setNewName] = useState();
  const [folderId, setFolderId] = useState();
  const params = useParams();
  function creteFolder() {
    axios
      .post(
        "http://127.0.0.1:8000/api/folders",
        { name: createName },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Folder Created");
          getdata();
        }
      });
  }
  function renameFolder() {
    renameClose();
    axios
      .put(
        `http://127.0.0.1:8000/api/folder/${folderId}/edit`,
        { name: newName },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Folder Renamed");
          getdata();
        }
      });
  }
  function deleteFolder(id) {
    const folderToDelete = [id];

    axios
      .delete(`http://127.0.0.1:8000/api/folders/delete`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        data: {
          folders: folderToDelete,
        },
      })
      .then((res) => {
        let conf = window.confirm("sure");
        if (conf) {
          if (res.status === 200) {
            alert("Folder deleted successfully");
            getdata();
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    if (!folders.length) {
      axios
        .get("http://127.0.0.1:8000/api/folders", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          setFolders(res.data.folders);
        });
    }
  };

  return (
    <div className="folders">
      <div className="container mt-5">
        <div className="row">
          <h1 className="col-lg-9 ">My Folders</h1>
          <Button
            className="top-btn col-lg-3 col-md-6"
            variant="dark"
            onClick={createOpen}
          >
            <i className="fa-solid fa-plus"></i> Create Folder{" "}
          </Button>

          <div className="create">
            <Modal show={create} onHide={craeteClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create Folder</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      className="modal-select"
                      onChange={(e) => {
                        SetCreateName(e.target.value);
                      }}
                      type="text"
                      placeholder="Entre The Folder Name"
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="modal-footer">
                <Button
                  className="button-close"
                  variant="outline-dark"
                  onClick={craeteClose}
                >
                  Close
                </Button>
                <Button
                  className="button-ok"
                  variant="dark"
                  onClick={() => {
                    creteFolder();
                  }}
                >
                  Create
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="rename">
            <Modal show={rename} onHide={renameClose}>
              <Modal.Header closeButton>
                <Modal.Title>Rename Folder</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      className="modal-select"
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                      type="text"
                      placeholder="Entre The Folder Name"
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="modal-footer">
                <Button
                  className="button-close"
                  variant="outline-dark"
                  onClick={renameClose}
                >
                  Close
                </Button>
                <Button
                  className="button-ok"
                  variant="dark"
                  onClick={() => {
                    //   craeteClose,
                    renameFolder();
                  }}
                >
                  Rename
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="row all-folders bg-light mt-5">
          {folders.length === 0 ? (
            <center>
              <h1 className="my-3">No folders to show</h1>
              <p>click create new folder to create folders</p>
            </center>
          ) : (
            folders.map((item, index) => {
              return (
                <div
                  className="file-card card  col-lg-4 col-md-6 col-sm-12  "
                  // style={{ width: "20%" }}
                >
                  <div className="three-dots">
                    <div className="dropdown">
                      <h1>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </h1>
                      <div className="dropdown-content">
                        <a
                          onClick={() => {
                            deleteFolder(item.id);
                          }}
                          href="#"
                          className="dropdown-item"
                        >
                          Delete
                        </a>

                        <a
                          onClick={() => {
                            renameOpen();
                            setFolderId(item.id);
                          }}
                          className="dropdown-item"
                        >
                          rename
                        </a>
                      </div>
                    </div>
                  </div>
                  <img
                    onClick={() => {
                      navigate(`folderfiles/${item.id}`);
                    }}
                    className="card-img-top"
                    style={{ cursor: "pointer" }}
                    src={Folder}
                    alt="Card  cap"
                  />
                  <div className="card-body">
                    <h3>{item.name}</h3>
                    <p className="card-text">
                      {item.created_at} &nbsp; {item.size_in_megabits}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="group btn btn-dark"
        >
          {" "}
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className={show ? "btn-group-vertical" : "hide"}>
          <div className="bg-dark text-light" style={{ width: "100%" }}>
            <div onClick={() => {setShow(!show);}} style={{width: "max-content"}}>
              <i
                className="exit fa-solid fa-plus"
              ></i>
            </div>
          </div>
          <button
            onClick={createOpen}
            type="button"
            className="btn bottom-btn btn-dark"
          >
            Crete Folder
          </button>
        </div>
      </div>
    </div>
  );
}
export default Folders;
