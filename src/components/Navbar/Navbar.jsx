import logo from '../images/logo.svg';
import loginicon from '../images/loginicon.png';
import '../Navbar/Navbar.css';
import { Link, useNavigate , NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

function Navbar() {
  const [AboutIsActive, setAboutIsActive] = useState(false)
  const [ServicesIsActive, setServicesIsActive] = useState(false)
  const [ContactIsActive, setContactIsActive] = useState(false)
  const AboutActive = () =>{
    setServicesIsActive(false)
    setContactIsActive(false)
    setAboutIsActive(true)
  }
  const ServicesActive = () =>{
    setAboutIsActive(false)
    setContactIsActive(false)
    setServicesIsActive(true)
  }
  const ContactActive = () =>{
    setAboutIsActive(false)
    setServicesIsActive(false)
    setContactIsActive(true)
  }
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/BAS/login");
  }
  return (
    <>
      <nav class="navbar fixed-top container-nav-sm">
        <div class="container-fluid">
          <img src={logo} alt='logo-img' />
          <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <img src={logo} alt='logo-img' />
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

              <ul class="nav  navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item">
                <Link to="/BAS" class="nav-link" aria-current="page">Home</Link>
                </li>
                <li class="nav-item">
                <HashLink to={"/BAS/#Whoweare"} class="nav-link">About us</HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to={"/BAS/#Whatwedo"} class="nav-link">Services</HashLink>
                </li>
                <li class="nav-item">
                  <Link to="/BAS/case" class="nav-link " aria-current="page" >Case studies</Link>
                </li>
                <li class="nav-item">
                  <HashLink to={"/BAS/#contactUs"} class="nav-link">Contact us</HashLink>
                </li>
              </ul>
              <Link to="/BAS/login"><img class="login-icon " src={loginicon} /></Link>

            </div>
          </div>
        </div>
      </nav>

      {/* larg screen */}
      <nav class="navbar navbar-expand-lg  container-nav">
        <div class="container-fluid">
          <img src={logo} alt='logo-img' />
          <button class="navbar-toggler nav-btnlg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll nav-underline  justify-content-center flex-grow-1 pe-3">
              <li class="nav-item home">
              <NavLink to="/BAS" class="nav-link" aria-current="page">Home</NavLink>
              </li>
              <li class="nav-item">
              <HashLink to={"/BAS/#Whoweare"} class="nav-link" onClick={AboutActive} className={AboutIsActive? "active" : ""}>About us</HashLink>
              </li>
              <li class="nav-item">
              <HashLink to={"/BAS/#Whatwedo"} class="nav-link" onClick={ServicesActive} className={ServicesIsActive? "active" : ""}>Services</HashLink>
              </li>
              <li class="nav-item">
              <NavLink to="/BAS/case" class="nav-link " aria-current="page" >Case studies</NavLink>
              </li>
              <li class="nav-item">
              <HashLink to={"/BAS/#contactUs"} class="nav-link" onClick={ContactActive} className={ContactIsActive? "active" : ""}>Contact us</HashLink>
              </li>
            </ul>

            <form class="d-flex" role="search">
              <button onClick={goToLogin} class="btn nav-btnlg" type="submit">Log in</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}



export default Navbar;