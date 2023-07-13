import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router";
import pdfImg from "../images/pdf.svg";
import docsImg from "../images/doc.svg";
import xlsImg from "../images/Exel.svg";

function FolderFiles() {
  const params = useParams();

  const [folderFiles, setFolderFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [view, setView] = useState(false);
  const [folderName, SetFolderName] = useState();
  const [folderId, setFolderId] = useState();
  const [fileId, setFileId] = useState();

  function deletefiles(id, index) {
    const filesToDelete = [id];

    axios
      .delete(`http://127.0.0.1:8000/api/folders/${params.id}/files`, {
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
        }
      });
  }
  function upload(file) {
    const formData = new FormData();
    formData.append("files", file);

    axios
      .post(
        `http://127.0.0.1:8000/api/folders/${params.id}`,
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
  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = () => {
    if (!folderFiles.length) {
      axios
        .get(`http://127.0.0.1:8000/api/folders/${params.id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          setFolderFiles(res.data.files);
          SetFolderName(res.data["folder-name"]);
          setFolders(res.data["folders-info"]);
        });
    }
  };

  return (
    <div className="folder-files">
      <div className="container mt-5">
        <div className="row">
          <h1 className="col-lg-9 ">
            My Folders<i className="fa-solid fa-play mx-2"></i> {folderName}
          </h1>
          <label
            htmlFor="file-input"
            className="top-btn my-files-btn btn btn-dark col-lg-3 col-md-6 "
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

          <div className="row all-folder-files bg-light mt-5">
            {folderFiles.length === 0 ? (
              <center>
                <h1>This folder is empty</h1>{" "}
                <p>click add new file to add files</p>
              </center>
            ) : (
              folderFiles.map((item, index) => {
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
                            download
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
                        </div>
                      </div>
                    </div>
                    <img
                      className="card-img-top"
                      src={newUrl}
                      alt="Card  cap"
                    />
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
              className="exit fa-solid fa-plus btn btn-dark"
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
export default FolderFiles;
