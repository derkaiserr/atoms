import React from "react";
import "./Five.css"

import woman from "./Images/assets_a12f8232201349c391f4feed87a4d995_dae817a22ec54b7abec3ed8fa3ef0017 1.png"
import lace from "./Images/shocking-pink 1.png"
import mask from "./Images/black 1.png"

export default function Five(){
    return(
        <div>
             <section className="more-than-a-woman">
                <img src={woman} alt="" />
                <div>
                    <p className="read">Read the incredible Humans of New York story from our co-founder, Sidra Qasim, about struggle, chasing dreams, and making shoes</p>
                    <p className="from">From Lahore, Pakistan to Lafayette Street, New York — the Atoms co-founders’ origins exemplify the American Dream. The history behind our company goes way back before our founders, Sidra Qasim and Waqas Ali, stepped foot in the United States, and even before they started speaking English. It’s a story worth reading.</p>
                    <button>Read Sidra’s Story</button>
                </div>

            </section>

            <section className="section-two">
                <div>
                    <p className="atom-stretch">Atoms Stretch Laces & Masks</p>
                    <p className="designed">Designed by Atoms, with premium, durable and environmentally friendly materials.</p>

                </div>
                <div className="grid-box1 grid-box">
                <img src={lace} alt="lace" />
                <div>
                    <p>Atoms Stretch Laces</p>
                    <div>
                        <p>Shocking Pink</p>
                        <p>$15</p>
                    </div>
                </div>
                </div>
                <div className="grid-box2 grid-box">
                <img src={mask} alt="mask" />
                <div>
                    <p>Atoms Everyday Mask</p>
                    <div>
                        <p>Black</p>
                        <p>$15</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}