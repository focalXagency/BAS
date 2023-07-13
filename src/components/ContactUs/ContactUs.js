// import  './../../assets/images/Contact us/Rectangle 1448.png'
import './../ContactUs/ContactUs.css'
import plus from './../images/plus.svg'
import rotatePlus from './../images/close.svg'
import { useState } from 'react'
// import axios from "axios";

const ContactUs = () => {

    const [service, setService] = useState();
    const [company_name, setCompanyName] = useState();
    const [name, setName] = useState();
    const [position, setPosition] = useState();
    const [number, setNumber] = useState();
    const [email, setEmail] = useState();
    const [content, setContent] = useState();



    const addMessage = (event) => {
        event.preventDefault();
        const dData = { service, company_name, name, position, email, content, number };
        console.log(dData);

        fetch('http://localhost:4000/messages', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(dData)
        }).then((res) => {
            alert('saved successfully!')
        }).catch((err) => {
            console.log(err.message);
        })
    };


    const servicesMenu = () => {
        const services = document.getElementById('services');
        services.classList.add('noServices');
        const service = document.getElementById('service');
        const serviceItem = document.querySelectorAll('.service-item');
        const servImg = document.getElementById('servImg');
        const servImgclose = document.getElementById('servImgclose');
        servImg.classList.add('hideServImg');
        servImgclose.classList.add('showServImgClose');
        serviceItem.forEach((item) => {
            item.addEventListener('click', () => {
                const y = item.innerHTML;
                service.value = y;
                setService(y);
                console.log(service.value);
                services.classList.remove('noServices');
                servImgclose.classList.remove('showServImgClose');
                servImg.classList.remove('hideServImg');
            })
        });

    }

    const servicesMenuClose = () => {
        const servImg = document.getElementById('servImg');
        const servImgclose = document.getElementById('servImgclose');
        servImg.classList.remove('hideServImg');
        servImgclose.classList.remove('showServImgClose');
        const services = document.getElementById('services');

        services.classList.remove('noServices');

    }


    return (

        <section id='contactUs'>






            <div className='row contactUsLabel'>
                <div className='col-lg-12'>
                    <h1 >Contact Us</h1>
                    <p>Fill the form below to start your journey </p>
                </div>
            </div>


            <div className='contactUs' >


                <form onSubmit={addMessage}>
                    <div className='contactUsTop'>
                        <div className='contactusForm'>

                            <div class="servInput">
                                <label>Services</label>
                                <img title='The reason for contact' id='servImg' class="servImg" alt='uu' src={plus} onClick={servicesMenu} />
                                <img title='close menu' id='servImgclose' class="servImgclose" alt='uu' src={rotatePlus} onClick={servicesMenuClose} />
                                <input name='service' readOnly id='service' type="text" placeholder='The reason for contact' />
                                <div className='services' id='services' >
                                    <h6 className='service-item' value="Public Relations" >Consulting</h6>
                                    <h6 className='service-item'>Public relations</h6>
                                    <h6 className='service-item'>Data analysis</h6>
                                    <h6 className='service-item'>Upselling</h6>
                                    <h6 className='service-item'>Case Study</h6>
                                </div>
                            </div>

                            <div>
                                <label>Name</label>
                                <input onChange={(event) => setName(event.target.value)} name='name' type='text' placeholder='Enter your name' />
                            </div>
                            <div>
                                <label>Company Name</label>
                                <input onChange={(event) => setCompanyName(event.target.value)} name='company_name' type='text' placeholder='Enter your company name' className='' />
                            </div>
                            <div>
                                <label>Number(optional)</label>
                                <input onChange={(event) => setNumber(event.target.value)} name='number' type='text' placeholder='Enter your number' />
                            </div>
                            <div>
                                <label>Position</label>
                                <input onChange={(event) => setPosition(event.target.value)} name='position' type='text' placeholder='Enter your position in the company' />
                            </div>
                            <div>
                                <label>E-mail</label>
                                <input onChange={(event) => setEmail(event.target.value)} name='email' type='email' placeholder='Enter your work E-mail' />
                            </div>
                            <div>
                                <label>Message</label>
                                <textarea onChange={(event) => setContent(event.target.value)} name='content' type="text" placeholder='Enter your message' />
                            </div>
                        </div>
                    </div>

                    <div className='contactUsBottom'>
                        <button type='submit' className='Sbtn mt-4'>Send</button>
                    </div>

                </form>


            </div>







        </section>
    );
}




export default ContactUs;