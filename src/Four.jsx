import React from "react";
import "./Four.css"

import woman from "./Images/assets_a12f8232201349c391f4feed87a4d995_dae817a22ec54b7abec3ed8fa3ef0017 1.png"


export default function Four(props){
    return(
        <div>

             <div className="onee">
            {props.tag && <div className="tag">Best Seller</div>}
            <img src={props.image} alt="" />
            <p className="nameModel">{props.Model}</p>
            <div className="descriptionn">
                <p>{props.colour}</p>
                <p>{props.price}</p>
            </div>
            </div>


           
        </div>
    )
}