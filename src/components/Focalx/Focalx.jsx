import title from '../images/title.svg';
import carosel from '../images/carosel.png';
/* import focal from '../images/focal.png';
import workout from '../images/workout.png'; */
import '../Focalx/Focalx.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Focalx() {
  const companyname = ['Focal X agency', 'Work out'];
  const [companynameIndex, setCompanynameIndex] = useState(0);

  const service = ['Service provided: Cunsultancy', 'Service provided: Public relations'];
  const [serviceIndex, setServiceIndex] = useState(0);

  const description = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.2'];
  const [descriptionIndex, setDescriptionIndex] = useState(0);


  const companyowner = ['Alaa Darwish', 'CEO name'];
  const [companyownerIndex, setCompanyownerIndex] = useState(0);

  const companyimg = [require("../images/focal.png"), require("../images/workout.png")];
  const [companyimgIndex, setCompanyimgIndex] = useState(0);



  useEffect(() => {
    const intervalId = setInterval(() => {
      setCompanynameIndex((companynameIndex + 1) % companyname.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [companynameIndex]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setServiceIndex((serviceIndex + 1) % service.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [serviceIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDescriptionIndex((serviceIndex + 1) % service.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [descriptionIndex]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCompanyownerIndex((companyownerIndex + 1) % service.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [companyownerIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCompanyimgIndex((companyimgIndex + 1) % service.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [companyimgIndex]);


  return (
    <section className='focalx'>
      <h1>{companyname[companynameIndex]}</h1>
      <p className='services'>{service[serviceIndex]}</p>
      < img className='title-img' src={title} alt='title-img' />
      <p className='p2'>{description[descriptionIndex]}</p>
      <div className='name'>
        <img src={(companyimg[companyimgIndex])} className='focalx-img' />
        <p className='name-alaa'>{companyowner[companyownerIndex]}</p>
      </div>
      <div className='readmore'><Link to="/BAS/profile" >View project </Link>  <img className='right-img' src={carosel} alt='profilr-img' /> </div>
    </section>

  )
}





export default Focalx;