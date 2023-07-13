import Slider from "react-slick";
import TeamCard from "./teamCard";
import { cardData } from "./mydata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OurTeam = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
/*         autoplay: true,
        autoplaySpeed: 3000, */
        // className: "center",
        // centerMode: true,
        // centerPadding: "px",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    // slidesToShow: 3,
                    // slidesToScroll: 1,
                    // centerMode: true,
                    // centerPadding: "5rem",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]



    };


    return (

        <>

            <section className="ourTeamSec">
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className="text-white">Our Team</h1>
                    </div>
                </div>

                <div className='ourTeamSlider'>

                    <Slider responsive="true" {...settings} className="pu">

                        {
                            cardData.map((item) => (
                                <TeamCard
                                    url={item.imageurl}
                                    name={item.name}
                                    description={item.description}
                                />

                            ))
                        }
                    </Slider>
                </div>
            </section>

        </>
    );
}


export default OurTeam;