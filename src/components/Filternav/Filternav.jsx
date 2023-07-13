import React from "react";
import '../Filternav/Filternav.css';
import Dropdown from '../Drop/Drop';

function Filternav(){    
    return(
        <>
            <nav className="filternav" >
                <ul className="filterul" >
                    <li className="filterli">
                        <a href="">All</a>
                    </li>
                    <li className="filterli">
                        <a href="">Technology</a>
                    </li>
                    <li className="filterli">
                        <a href="">Commercial</a>
                    </li>
                    <li className="filterli">
                        <a href="">Industrial</a>
                    </li>
                </ul>
            </nav>
            <div className="drop-down" >
                <Dropdown />
            </div>
        </>
        
    )
}

export default Filternav;