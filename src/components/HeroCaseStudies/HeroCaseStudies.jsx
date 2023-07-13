import React from "react";
import corner from '../images/Vector.svg';
import '../HeroCaseStudies/HeroCaseStudies.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroCaseStudies(){
    return(
        <div className="d-flex justify-content-center align-items-center Hero-casestudy">
            <div className="Case-title" >
                <h1>Case studies</h1>
                <p className="title" >A specialized business consultancy, committed to supporting businesses of all sizes and industries to achieve their success</p>
            </div>
            <img className="corner" src={corner} alt="corner-icon" />
        </div>
        )
};

export default HeroCaseStudies