import React from 'react'
import Slider from "react-slick";
import '../Ourcustomers/Ourcustomers.css';
import hyond from '../images/hyound.png';
import citi from '../images/citi.png';
import coca from '../images/cocacola.png';
import samsung from '../images/samsung.png';
import google from '../images/google.png';
import tiktok from '../images/tiktok.png';
import shell from '../images/shell.png';
import tmall from '../images/tmall.png';
import nike from '../images/nike.png';
import centure from '../images/centure.png';
import instagram from '../images/insta.png';
import lowes from '../images/lowes.png';
import health from '../images/health.png';
import netflix from '../images/netflex.png';
import lg from '../images/lg.png';

function Ourcustomers(props) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  return (
    <section className='container-customers'>
      <div className='row'>
        <div className='col-lg-12'>
          <p className='company'>+ 113 company</p>
          <h1 className='Our-costomer-title' >{props.title}</h1>
          <p className='Our-costomer-desc' >Companies we had the honor to work with</p>
        </div>
      </div>
      <div className='slider-customers'>
        <Slider {...settings}>

          <div>
            <img src={coca} alt='0' />
          </div>
          <div>
            <img src={citi} alt='1' />
          </div>
          <div>
            <img src={hyond} alt='2' />
          </div>
          <div>
            <img src={google} alt='-1' />
          </div>
          <div>
            <img src={samsung} alt='-2' />
          </div>

          <div>
            <img src={coca} alt='0' />
          </div>
          <div>
            <img src={citi} alt='' />
          </div>
          <div>
            <img src={hyond} alt='' />
          </div>
          <div>
            <img src={google} alt='' />
          </div>
          <div>
            <img src={samsung} alt='' />
          </div>


        </Slider>
        <Slider {...settings}>
          <div>
            <img src={shell} alt='' />
          </div>
          <div>
            <img src={tmall} alt='' />
          </div>
          <div>
            <img src={tiktok} alt='' />
          </div>
          <div>
            <img src={centure} alt='' />
          </div>
          <div>
            <img src={nike} alt='' />
          </div>

          <div>
            <img src={shell} alt='' />
          </div>
          <div>
            <img src={tmall} alt='' />
          </div>
          <div>
            <img src={tiktok} alt='' />
          </div>
          <div>
            <img src={centure} alt='' />
          </div>
          <div>
            <img src={nike} alt='' />
          </div>

        </Slider>
        <Slider {...settings}>
          <div>
            <img src={health} alt='' />
          </div>
          <div>
            <img src={lowes} alt='' />
          </div>
          <div>
            <img src={instagram} alt='' />
          </div>
          <div>
            <img src={lg} alt='' />
          </div>
          <div>
            <img src={netflix} alt='' />
          </div>


          <div>
            <img src={health} alt='' />
          </div>
          <div>
            <img src={lowes} alt='' />
          </div>
          <div>
            <img src={instagram} alt='' />
          </div>
          <div>
            <img src={lg} alt='' />
          </div>
          <div>
            <img src={netflix} alt='' />
          </div>

        </Slider>
      </div>
    </section>
  )
}

export default Ourcustomers;