import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./message.css";
function Message() {
  const params = useParams();
  const [message, setMessage] = useState([]);

  useEffect(() => {
    if (!message.length) {
      axios
        .get(`http://localhost:8000/api/admin/messages/${params.id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => setMessage(res.data.data));
    }
  }, []);
  return (
    <div className="message">
      <div className="container main-container mt-5">
        {message.map((item) => {
          return (
            <div className="row">
              <h1>{item.name}</h1>
              <div className="row sub-row">
                <ul>
                  <li>
                    company name : <h5>{item.company_name}</h5>{" "}
                  </li>
                  <li>
                    position:<h5>{item.position}</h5>
                  </li>
                  <li>
                    service: <h5>{item.service}</h5>
                  </li>
                </ul>
              </div>
              <div className="row">
                <h1>Files</h1>
                <div className="row sub-row">
                  <ul>
                    <li>
                      Number:<h5>{item.number}</h5>
                    </li>
                    <li>
                      Email:<h5>{item.email}</h5>
                    </li>
                    <li>
                      Message:<h6>{item.content} </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Message;
