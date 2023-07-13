import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import Problembox from "../Problembox/Problembox";
import focal from '../images/focal.svg';
import heroImg from '../images/Vector.svg';
import '../Profile/Profile.css';
import Footer from "../Footer/Footer";

function Profile() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="home">
            <Navbar />

            <div className="container-pro">
                <div className="bg-dotss"></div>
                <h1>Focal X agency Profile</h1>
                <p className="specialized">A specialized business consultancy, committed to supporting businesses of all sizes and industries to achieve their success</p>
                <p className="p-right">Location: UAE </p>
                <p className="p-left">Industry: Fin tech </p>
                <img src={heroImg} alt="hero-img" className="hero-img" />
            </div>

            <section className="text-prof">
                <div className="row">
                    <div className="col-lg-12 case">
                        <h1>Introduction to the case</h1>
                        <span>Since: 2020</span>
                    </div>
                    <div className="col-lg-12"></div>
                    <p className="part-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>


                <div className='row'>
                    <div className='col-lg-7'>
                        <Problembox />
                    </div>
                    <div className='col-lg-3 slider-right'>
                       
                            <div>
                                <img src={focal} alt="right-img" className="right-img" />
                                <p className="Company-X">Company X</p>
                            </div>
                           
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-12 case">
                        <h1>The solution we provided</h1>
                    </div>
                    <div className="col-lg-12"></div>
                    <p className="part-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>


              <Footer/>
            </section>
        </div>
    )
}




export default Profile;