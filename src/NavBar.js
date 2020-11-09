import React, { useState, useEffect } from 'react';
import './NavBar.css';

function NavBar() {
    const [show, handleShow] = useState(false)
    useEffect(()=>{
       window.addEventListener("scroll",()=>{
           if(window.scrollY >100){
               handleShow(true);
           } else {
               handleShow(false)
           }
       });
       return()=>{
        window.removeEventListener("scroll")
       }
       
    },[])
    return (
        <div> className={`nav ${show && "nav__block"}`}
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="netflix Logo"/>
            <img className="nav__avatar" 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt=" netflix Logo"/>
        </div>
    )
}

export default NavBar
