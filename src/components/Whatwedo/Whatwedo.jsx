import '../Whatwedo/Whatwedo.css';
import Card from '../Card/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import right from '../images/consulting.png';
import middle from '../images/upsalling.png';
import left from '../images/left.png';
import studies from '../images/casestudy.png';
import data from '../images/dataanalises.png';

import Slider from "react-slick";

function Whatwedo() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       /*  autoplay: true,
        autoplaySpeed: 3000,
          pauseOnHover: true */
    };
   

    return (
        <>

            <section className='container Whatwedo' id="Whatwedo">
                <h1>What we do</h1>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <p className='title-p'>We deliver diverse range of services such as consulting, public relations...etc.</p>
                    </div>
                </div>
                <Slider className='slider' {...settings}>

                    <div> <div className='contaier-slider1'>
                        <div className='row'>
                            <div className='col-lg-4 '>
                                <Card
                                    img={right}
                                    title="Consulting" text=" Providing individuals and companies with specialized advice and expertise to solve the problems they face in their work and achieve goals through an integrated team of consultants and experts in business solutions " />
                                <div className="vr d-none d-lg-flex d-md-flex"></div>
                            </div>
                            <div className='col-lg-4 '>
                                <Card
                                    img={studies}
                                    title="Case study"
                                    text="A case study provides you with a deep analysis of the problems facing your business and how to solve them, which helps you to efficiently direct your strategic decisions and effectively face potential challenges." />
                                <div className="vr d-none d-lg-flex d-md-flex"></div>
                            </div>

                            <div className='col-lg-4'>
                                <Card
                                    img={data}
                                    title="Data analysis" text=" Providing individuals and companies with specialized advice and expertise to solve the problems they face in their work and achieve goals through an integrated team of consultants and experts in business solutions " />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='contaier-slider2'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <Card
                                    img={left}
                                    title="Public relations "
                                    text="Building and managing relationships between the company and its target audience and building a good reputation and enhancing trust through solutions such as strategic planning and crisis management " />
                                <div className="vr d-none d-lg-flex d-md-flex"></div>
                            </div>
                            <div className='col-lg-4'>
                                <Card
                                    img={middle}
                                    title="Upselling" text=" Analyzing customer needs and providing innovative and customized solutions that meet their aspirations and help them discover the added value they have, which contributes to increasing revenues and raising the return on investment." />
                                <div className="vr d-none d-lg-flex d-md-flex"></div>
                            </div>

                            <div className='col-lg-4'>
                                <Card
                                    img={right}
                                    title="Consulting" text=" Providing individuals and companies with specialized advice and expertise to solve the problems they face in their work and achieve goals through an integrated team of consultants and experts in business solutions " />
                            </div>
                        </div>
                    </div>
                </Slider> 
                 {/* mobile slider */}
                <div  className='container-slider3'>
                <Slider  {...settings}>
                               <div>
                                <Card
                                    img={right}
                                    title="Consulting" text=" Providing individuals and companies with specialized advice and expertise to solve the problems they face in their work and achieve goals through an integrated team of consultants and experts in business solutions " />
                                    </div>

                                    <div>
                                <Card
                                    img={left}
                                    title="Public relations "
                                    text="Building and managing relationships between the company and its target audience and building a good reputation and enhancing trust through solutions such as strategic planning and crisis management " />
                                    </div>

                                    <div>
                                    
                                     <Card
                                    img={middle}
                                    title="Upselling" text=" Analyzing customer needs and providing innovative and customized solutions that meet their aspirations and help them discover the added value they have, which contributes to increasing revenues and raising the return on investment." />
                                    </div>

                                    <div>
        
                                <Card
                                    img={studies}
                                    title="Case study"
                                    text=" A case study provides you with a deep analysis of the problems facing your business and how to solve them, which helps you to efficiently direct your strategic decisions and effectively face potential challenges." />
                           </div>

                           <div>
                                <Card
                                    img={data}
                                    title="Data analysis" text="We provide you with the means to analyze performance and understand customer behavior to uncover trends and patterns, analyze risks and predictions, which helps you make the best decision and discover new opportunities. " />
                       </div>
                </Slider>
                </div>
            </section>
        </>

    )
}





export default Whatwedo;