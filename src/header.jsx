import React from "react";
import logo from "./Images/logo.png"
import bag from "./Images/bag-2.svg"
import user from "./Images/user.svg"
import "./header.css"



export default function Header(){


    return(
        <div>

          
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
                <p>atoms</p>
            </div>


            <div className="nav">
                <p>Men</p>
                <p>Women</p>
                <p>Accessories</p>
                <p>About</p>
                <button className="finder-quiz">Shoe Finder Quiz</button>
            </div>
                
            <div className="my-support">
            <button className="my-atoms">My Atoms</button>    
            <p>Support</p>


            <img src={user} alt="" />

            <img src={bag} alt="" />
            </div>    
        </div>
        </div>
    )
}