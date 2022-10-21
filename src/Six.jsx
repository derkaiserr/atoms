import React from "react";
import "./Six.css"
import one from "./Images/assets_a12f8232201349c391f4feed87a4d995_845e84d5fdcd4fdda07291e7d9f77e33 1.png"
import two from "./Images/assets_a12f8232201349c391f4feed87a4d995_cccee8265cb7412c9af1b904333f47bc 1.png"
import three from "./Images/assets_a12f8232201349c391f4feed87a4d995_841109014fd145e0a0e59ab727fe9825 1.png"
import four from "./Images/assets_a12f8232201349c391f4feed87a4d995_7d811c172b264f82b8b1f1499274fe96 1.png"
import five from "./Images/assets_a12f8232201349c391f4feed87a4d995_7234b613a18a404295bba74c8545ec84 1.png"



export default function Six (){
    return(
        <div className="width">
            <p className="everyday common">Atoms in Everyday</p>
            <p className="link common">@atoms</p>
            <div className="insta">
            <img src={one} alt="first pic" />
            <img src={two} alt="second pic" />
            <img src={three} alt="third pic" />
            <img src={four} alt="fourth pic" />
            <img src={five} alt="fifth pic" />
            </div>
        </div>
    )
}