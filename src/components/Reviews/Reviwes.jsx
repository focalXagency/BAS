import '../Reviews/Reviews.css';
import Cardreviews from '../Cardreviews/Cardreviews';
import Slider from 'react-slick';
import { useState } from 'react';
import { useEffect } from 'react';
import SliderData from './SliderData';


function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const handleResize = () => setSize([window.innerHeight, window.innerWidth]);
      window.addEventListener("resize", handleResize);
    }, [])
    return size;
  }

  const array = [1,2,3,4,5]
function Reviews() {
/*     const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    }; */
    const [imageIndex, setImageIndex] = useState(0);
    const [height, width] = useWindowSize();
    const settings = {
        className: "center",
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: width > 1000 ? 3: 1,
        centerMode: true,
        centerPadding: "60px",
        beforeChange: (current, next) => {
          console.log(current);
          setImageIndex(next);
        },
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };

    return (
        <section className='container reviews'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h1>Reviews</h1>
                    <p className='more'>+ 33 More</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <p className='kind-words'>Some of your kind words</p>
                </div>
            </div>
            <div className='container-show'>
        <Slider {...settings}>
          {array.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <Cardreviews />
            </div>
          ))}
        </Slider>
{/*                 <Slider {...settings}>

                    <div className='row'>
                        <div className='col-lg-3 slick-cloned '>
                            <Cardreviews />
                        </div>

                        <div className='col-lg-3 slick-cloned '>
                            <Cardreviews />
                        </div>

                        <div className='col-lg-3 slick-cloned '>
                            <Cardreviews />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 slick-cloned '>
                            <Cardreviews />
                        </div>

                        <div className='col-lg-3 slick-cloned '>
                            <Cardreviews />
                        </div>

                        <div className='col-lg-3 slick-cloned '>
                            <Cardreviews />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 slick-cloned '>
                            <Cardreviews />
                        </div>

                        <div className='col-lg-3 slick-cloned '>
                            <Cardreviews />
                        </div>

                        <div className='col-lg-3 slick-cloned '>
                            <Cardreviews />
                        </div>
                    </div>


                </Slider> */}
            </div>

        </section>
    )
}




export default Reviews;