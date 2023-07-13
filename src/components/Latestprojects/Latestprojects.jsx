import Slider from 'react-slick';
import '../Latestprojects/Latestprojects.css';
import focal from '../images/focal.svg';
import workout from '../images/workout.png';
import Focalx from '../Focalx/Focalx';




function Latestprojects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true 
    }
    return (
        <section className='container latestprojects'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h1>Latest projects</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <p className='latest'>latest projects provided by our company</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-7'>
                    <Focalx />
                    <button type="button" class="btn view-btn">All projects</button>
                </div>
                <div className='col-lg-3 slider-right'>
                    <Slider {...settings} >
                        <div>
                            <img src={focal} alt="right-img" className='right-img' />
                        </div>
                       
                        <div>
                            <img src={workout} alt="right-img" className='right-img' />
                        </div>



                    </Slider>
                </div>
            </div>

        </section>
    )
}





export default Latestprojects;