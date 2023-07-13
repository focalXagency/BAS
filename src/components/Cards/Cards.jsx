import React, { useState } from "react";
import '../Cards/Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {informember} from '../informember';
import corner from '../images/curner.png';
import back from '../images/Vector.svg';
import { Link, useNavigate } from 'react-router-dom';

// .x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x
function Cards(){
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [current,setCurrent] = useState(1)
    return(
        <>
          <div className="row"
          style={{ width: "99%"}}
          >
          {informember.slice(start, end).map((item) => {
       
          return (
            <div className="container col-12 col-lg-4 my-2 flip-card"
                style={{ height: "350px", width: "26%" }}>
                <div className=" flip-card-inner">
                      <div className="card flip-card-front col-12 ">
                          <img
                                className="card-img-top"
                                src={corner}
                                style={{ height: "250px", width: "100%", margin: "auto" ,backgroundColor: "gray" }}
                                alt="Card cap"
                              />
                            <div className="card-body d-flex justify-content-between align-items-center Paragraf">
                              <p className="borderbottom" >Industrial</p>
                              <p>{item.position}</p>
                            </div>
                      </div>
                      <div class="flip-card-back">
                        <h1>LOUIS VUITTON</h1>
                        <p>We solved this problem by 
                        hiring someone who keeps
                        track of all the accounts with
                        constant auditing..<Link to="/BAS/profile" class="link" aria-current="page" >Read More</Link>
                        </p>
                        <img className="corner" src={back} alt="corner-icon" />
                      </div>
                </div>
            </div>
          );
        })}
        <nav
          className="pagination-nav col-11 smnav"
          aria-label="pages Page navigation example col-1"
        >
          <ul class="pagination">
            <li class="page-item">
              <a
                onClick={(event) => {
                  event.preventDefault();
                  if (start >= 3) {
                    setStart(start - 3);
                    setEnd(end - 3);
                    console.log(start, end);
                    setCurrent(current - 1);
                  } else {
                    // Reset to the last page
                    const lastPageStart = Math.floor(informember.length / 3) * 3; 
                    setStart(informember.length - 1);
                    setEnd(informember.length + 3 - 1)
                    setCurrent(4);
                  }
                }}
                class="page-link"
                href="#"
              >
                &lt;
              </a>
            </li>
            <li class="page-item">
              <a 
              onClick={(event) => {
                event.preventDefault();}}
              class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a 
              onClick={(event) => {
                event.preventDefault();}}
              class="page-link" href="#">
                {current}
              </a>
            </li>
            <li class="page-item">
              <a 
              onClick={(event) => {
                event.preventDefault();}}
              class="page-link" href="#">
              {Math.ceil(informember.length / 3)}
              </a>
            </li>
            <li class="page-item">
              <a
                onClick={(event) => {
                  event.preventDefault();

                  if (start < informember.length - 3 && end < informember.length) {
                    setStart(start + 3);
                    setEnd(end + 3);
                    setCurrent(current + 1);
                  } else {
                    setStart(0);
                    setEnd(3);
                    setCurrent(1);
                  }
                }}
                class="page-link"
                href="#"
              >
                &gt;
              </a>
            </li>
          </ul>
        </nav>
       

      </div>
        </>
        )
};

export default Cards