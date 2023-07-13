import './../Footer/FooterStyle.css'
import logo from './../images/basFooter.svg'
import facebookIcon from './../images/facebook.svg'
import instagramIcon from './../images/insta.svg'
import linkedInIcon from './../images/linkedin.svg'
import mail from './../images/mail.svg'
import footerImg from './../images/footer-deg.png'
import footerImgMob from './../images/footerImgMob.svg'

const Footer = () => {

    return (

        <footer>

            {/* <div className="row m-0 p-5 footerTop ">

                <div className='d-flex flex-wrap gap-5 justify-content-center align-items-center p-4'>
                    <div className="col-lg-3 col-md-3 col-12 ">
                        <h6>Send Your Email</h6>
                        <span>BAS@Gmail.Com</span>
                    </div>
                    <div className="vr d-none d-lg-flex d-md-flex"></div>
                    <div className="col-lg-3 col-md-2 col-12">
                        <h6>Call Us</h6>
                        <span>451133323232</span>
                    </div>
                    <div className="vr d-none d-lg-flex d-md-flex"></div>
                    <div className="col-lg-3 col-md-2 col-12">
                        <h6>Address</h6>
                        <span>Syria, Lattakia</span>
                    </div>
                </div>
            </div> */}

            <div className='footerTop d-flex'>
                <div className='d-flex flex-column gap-3 align-items-center logoSection'>
                    <img src={logo} className='logo ' alt='no imagee' />
                    <span>Keep in touch</span>
                    <div className='d-flex gap-4'>
                        <a href='/#' className='footerLink'><img alt='no imagee' src={facebookIcon} /></a>
                        <a href='/#' className='footerLink'><img alt='no imagee' src={linkedInIcon} /></a>
                        <a href='/#' className='footerLink'><img alt='no imagee' src={instagramIcon} /></a>
                    </div>
                </div>


                <div className='d-flex flex-column subscribe '>
                    <h2>SUBSCRIBE</h2>
                    <div className='d-flex flex-column gap-5'>
                        <span>Stay in the loop with our newsletter </span>
                        <div className=' mailSection'>
                            <img src={mail} className='mailImg' />
                            <input type='email' placeholder='E-mail' />
                        </div>

                        <button className='align-self-center'>Submit</button>
                    </div>
                </div>

                <div className='contactWithUs'>
                    <h2>CONTACT US</h2>
                    <div className='d-flex flex-column gap-3'>
                        <span>We're here to help</span>
                        <h3>info@BAS.Com</h3>
                        <h3>+963-589687495</h3>
                    </div>
                </div>

            </div>

            <hr />

            <div className='footerBottom'>
                <img src={footerImg} className='footerImg' />
                <img src={footerImgMob} className='footerImgMob d-none' />
                <span>Registration date, Terms and Conditions</span>
            </div>

        </footer>
    );

}

export default Footer;