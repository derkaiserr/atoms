import React from "react";
import "./Sectionone.css"
import shoe from "./Images/shoe web1 1.png"
import shoe2 from "./Images/Group 2.png"

import vogue from "./Images/VOGUE.svg"
import esquire from "./Images/Esquire.svg"
import humans from "./Images/Frame 15.svg"

export default function One(){

    console.log(window.innerWidth)
    return(
        <div>
            <section className="first">
                <p className="comfort">Comfort & magic awaits Everyday</p>
                <img className="levitate" src={shoe} alt="" />
                <div>
                <p id="designed">Designed for the way you live your life. Atoms are beautiful in their simplicity, supporting your feet with absolute comfort.</p>
                <button>Shop</button>
                </div>
            </section>
            <section className="second">

            <p>“I ordered ten pairs as Christmas presents. These were the best received gifts I’ve ever given. My agent went on to buy an additional seven pairs in every color.”</p>

            <div className="images">
                <img src={vogue} alt="" />
                <img src={humans} alt="" />
                <img src={esquire} alt="" />
            </div>

            </section>

            <div className="the-best">The best shoes need the best materials.</div>
            <section className="third">
            <div className="part-one">
                <p className="whole">A whole new level of comfort</p>
                <p className="midsole">Atoms midsole is our proprietary foam that provides remarkable cushioning and responds to every movement of your feet. Throughout the day, as your feet change, the midsole foam adapts to these changes. </p>
                <p className="copper">What is copper doing in your shoes? A lot</p>
                <p className="tie">Tie your Atoms shoe laces once </p>
            </div>

            <img src={shoe2} alt="shoe" />
            </section>
            <div className="paragraph">Essential Colors for Model 001</div>
        </div>
    )
}