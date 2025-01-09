import React from "react";
import { RiMenu2Line } from "react-icons/ri";   
const Navbar=()=>{
    return(
        <div className='container' >
           <div className='nav '>
                <div className='name'>Adeen</div>
            
            <ul className="link">

            <li className="menuLink"><a href="#hero">Home</a></li>
            <li className="menuLink"><a href="#about">About</a></li>
            <li className="menuLink"><a href="#projects">Projects</a></li>
            <li className="menuLink"><a href="#skills">Skills</a></li>
            <li className="menuLink"><a href="#contact">Contact</a></li>
         
            </ul>
            <RiMenu2Line  className="menu" size={30}/>
            </div>
        </div>
    ) 
}
export default Navbar;