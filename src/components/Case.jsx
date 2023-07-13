import React from "react";
import HeroCaseStudies from "../components/HeroCaseStudies/HeroCaseStudies";
import Filternav from "./Filternav/Filternav";
import Cards from "./Cards/Cards";
import Ourcustomers from "./Ourcustomers/Ourcustomers";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import './CaseStyle.css';



function Case(){
    return(
            <div className="home case">
            <Navbar />
            <HeroCaseStudies /> 
            <Ourcustomers title="Our Customers" /> 
            <Filternav />
            <Cards /> 
            <Footer/>
            </div>
        )
};

export default Case