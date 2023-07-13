import logo from "./../images/basFooter.svg";
import "./../LogIn/LoginStyle.css";
import logImg from "./../images/curnerleft.png";
import logImgMob from "./../images/Vector1.svg";

import backIcon from "./../images/Layer 2.svg";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

/* import axios from 'axios' */

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setCheck] = useState();
  const [isAdmin, setAdmin] = useState();
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //     let isChecked = e.target.checked;
  //     console.log(isChecked);
  // }
  const userlogIn = (event) => {
    event.preventDefault();
    const dData = { email, password, isChecked };
    console.log(dData);

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dData),
    })
      .then((res) => res.json())
      .then((res) => {
        setAdmin(res.user.is_admin);
        console.log(res.access_token);
        localStorage.setItem("accessToken", res.access_token);
        if (res.user.is_admin == 1) {
          navigate(`/BAS/admin/${res.user.id}`);
        } else {
          navigate(`/BAS/user/${res.user.id}`);
          console.log(isAdmin);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleClick = (event) => {
    navigate("/BAS/");
  };

  const kk = () => {
    console.log("ee");
  };

  return (
    <>
      <div className="loginContainer ">
        <img src={backIcon} className="backIcon" onClick={handleClick} />

        <div className="logCard">
          <img src={logo} />
          <h5>LOGIN</h5>
          <span>Welcome back.</span>

          <form onSubmit={userlogIn}>
            <div className="loginTop">
              <input
                type="email"
                placeholder="Username"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="loginBottom">
              <label class="containerr">
                <p>Remember me</p>
                <input
                  type="checkbox"
                  onChange={(event) => setCheck(event.target.checked)}
                />
                <span class="checkmark"></span>
              </label>

              <div className="loginBtn">
                <button type="submit">Log in</button>
                <a onClick={kk} className="text-white">
                  Forget Password ?
                </a>
              </div>
            </div>
          </form>

          <span>
            Don’t have an account ?
            <HashLink to={"/#contactUs"}>Contact us</HashLink>
          </span>
        </div>
        <img src={logImg} className="imgDown d-flex " />
        <img src={logImgMob} className="d-none imgDownMob" />
      </div>
    </>
  );
};

export default LogIn;
