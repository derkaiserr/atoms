import React from "react";
import logo from "./Images/logo.png"
import bag from "./Images/bag-2.svg"
import user from "./Images/user.svg"
import "./header.css"
import { useState } from "react";


const ham = document.querySelector('.hams')

export default function Header(){
    const [isToggle, setIsToggle]= useState(false)
    // const hamTop = document.querySelector('.ham-top')
    // const hamMid = document.querySelector('.ham-mid')
    // const hamBottom = document.querySelector('.ham-bottom')
    // React.useEffect( function handleClick(){
    //     hamTop.classList.toggle('ham-top1');
    //     hamBottom.classList.toggle('ham-bottom1');
    //     hamMid.classList.toggle('hidden')
    // })

        
  console.log(isToggle)
  const toggleHams =() =>{
    setIsToggle(true)
    setIsToggle(!isToggle)
  }

    return(
        <div>

          
        <div className="header" >

       
        
        <div onClick={toggleHams} className="hams" >
        <div className={isToggle ? 'ham-top ham-top1' :'ham-top'}></div>
           <div className={isToggle ? 'ham-mid hidden' :'ham-mid'}></div>
        <div className={isToggle ? 'ham-bottom ham-bottom1' :'ham-bottom'}></div>
        </div>
            <div className="logo">
                <img src={logo} alt="" />
                <p>atoms</p>
            </div>


            <div className={isToggle ? "nav" : "nav translate"}>
                <p>Men</p>
                <p>Women</p>
                <p>Accessories</p>
                <p>About</p>
                <button className="finder-quiz">Shoe Finder Quiz</button>
            </div>
                
            <div className={isToggle ? "my-support" : "my-support translate"}>
            <button className="my-atoms">My Atoms</button>    
            <p id="p">Support</p>


            <img src={user} alt="" />
            <img src={bag} alt="" />

            </div>    
            <img id="bag" src={bag} alt="" />
        </div>
        </div>
    )
}