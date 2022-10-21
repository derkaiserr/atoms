import React from "react";
import man from "./Images/assets_a12f8232201349c391f4feed87a4d995_c7968003978d4857acf3a8c973c24f7f 1.png"
import manShoe from "./Images/assets_a12f8232201349c391f4feed87a4d995_5f4b33a052cc4f1b9e9a03f50ec0b53c 1.png"

import "./Three.css"


export default function Three(){
    return(
        <div>

    <section>

        <p className="based-in">
        Based in New York City, Atoms began with an idea: make a shoe you’d want to wear everyday. In practice, this simple idea turned out to be much more complex, and led to a full reimagining of what shoes are and what they can be. Three years later, Atoms are loved by thousands of people everyday.
        </p>
        <p className="response">In response to the pandemic, we shifted our manufacturing to make one of the best reusable face masks, sold close to our costs, and donated nearly half million within the US. Always looking to make things better for people. Creating the best products, using the best materials. Never taking shortcuts, never letting quality suffer. Always working to make our products the best they can be. And always focused on treating our customers right.</p>
    </section>


    <section className="firstt">
        <img className="man" src={man} alt="man-pic" />
        <div className="section">
        <img className="man-shoe" src={manShoe} alt="" />
        <div className="grid">
            <div>
            <p id="model">Model 000</p>
            <p id="grey">Grey</p>
            </div>
            <button>Shop</button>
        </div>
            <p className="before-one">Before One there was Zero- Model 000, that is. Our best-selling sneaker is tuned for extreme comfort. It’s like wearing your favourite T-shirt but these shoes look as sharp as a blazer. And it comes in 6 colours and 47 sizes.</p>
        </div>
    </section>
        </div>
    )
}