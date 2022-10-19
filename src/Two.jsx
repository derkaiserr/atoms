import React from "react";

import "./Two.css"
// import Data from "./Data.jsx"
export default function Two (props){



    return (

        <div>
           

        <div className="one">
            <img src={props.image} alt="" />
            <p className="name-model">{props.Model}</p>
            <div className="description">
                <p>{props.colour}</p>
                <p>{props.price}</p>
            </div>
        </div>
        </div>
    )
}