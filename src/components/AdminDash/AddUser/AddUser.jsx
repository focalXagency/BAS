import { useState } from "react";
import "./AddUser.css";
import axios from "axios";

function AddUser() {
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [userName, setUserName] = useState("");
  const [service, setService] = useState("");
  function addusers(event) {
    event.preventDefault();
    axios
      .post(
        "http://127.0.0.1:8000/api/admin/register",
        {
          name: FullName,
          email: email,
          fullname: FullName,
          password: password,
          phone_number: phoneNum,
          company_name: companyName,
          service: service,
          position: position,
        },
        {
          headers: {
            // "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("User added");
        }
      });
  }
  return (
    <div className="add-user">
      <div className="container mt-5">
        <div className="row">
          <div className="row ">
            <h1 className="col-12 title">Add User</h1>
          </div>
          <form onSubmit={addusers} method="POST">
            <div className="container">
              <div className="row">
                <input
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
                  className="my-2 user-in"
                  type="text"
                  placeholder="Full Name:"
                  required
                />
                <input
                  onChange={(event) => {
                    setCompanyName(event.target.value);
                  }}
                  className="my-2 grey user-in"
                  type="text"
                  placeholder="company’s name:"
                  required
                />
                <input
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className="my-2 user-in"
                  type="email"
                  placeholder="Email:"
                  required
                />
                <input
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                  className="my-2 grey user-in"
                  type="text"
                  placeholder="User Name:"
                  required
                />
                <input
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className="my-2 user-in"
                  type="Password"
                  placeholder="Password:"
                  minLength={6}
                  required
                />
                <input
                  onChange={(event) => {
                    setPosition(event.target.value);
                  }}
                  className="my-2 grey user-in"
                  type="text"
                  placeholder="position:"
                  required
                />
                <input
                  onChange={(event) => {
                    setPhoneNum(event.target.value);
                  }}
                  className="my-2 user-in"
                  type="tel"
                  placeholder="Phone Number:"
                  pattern="[0-9\s\-\+\(\)]*"
                  minLength={9}
                  required
                />
                <input
                  onChange={(event) => {
                    setService(event.target.value);
                  }}
                  className="my-2 grey user-in"
                  type="text"
                  placeholder="Service:"
                  required
                />
                <button type="submit" className="user-btn btn btn-dark">
                  Add User
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddUser;
