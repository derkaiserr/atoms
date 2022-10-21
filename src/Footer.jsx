import React from "react";
import "./Footer.css"
import twitter from "./Images/bi_twitter.svg"
import facebook from "./Images/fa6-brands_square-facebook.svg"
import insta from "./Images/ant-design_instagram-filled.svg"



export default function Six (){


    return(
        <footer>
            <div className="logo-footer">atoms</div>
            <div className="footer-grid">
                <div className="first-grid">
                    <p>Stay in the know on product releases, founder news, and all things Atoms.</p>
                    <form action="">
                    <input type="email" placeholder="Enter email here for updates" name="" id="" />
                    <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                    </form>
                </div>
                <div className="second-grid">
                    <p className="big">Product</p>
                    <p>Model 000</p>
                    <p>Model 001</p>
                    <p>Laces</p>
                    <p>Masks</p>
                    <p>No-show Socks</p>
                    <p>Crew Socks</p>
                    <p>Gift Cards</p>
                </div>
                <div className="third-grid">
                    <p className="big">Support</p>
                    <p>Help Center</p>
                    <p>Order Status</p>
                    <p>Returns & Exchanges</p>
                    <p>Press</p>
                    <p>Contact Us</p>
                </div>
                <div className="fourth-grid">
                    <p className="big">Everything Else</p>
                    <p>Community</p>
                    <p>Why Atoms</p>
                    <p>About Atoms</p>
                    <p>Discount Program</p>
                    <p>Atoms Content</p>
                    <p>AAG Gallery</p>
                    <p>Jobs</p>
                </div>
                <div className="fifth-grid">
                    <div className="subgrid">
         <img src={twitter} alt="" />
                    <p>Twitter</p>
                    </div>
                    <div className="subgrid">
              <img src={insta} alt="" />
                    <p>Instagram</p>
                    </div>
                    <div className="subgrid">
             <img src={facebook} alt="" />


                    <p>Facebook</p>
                    </div>
                </div>
            </div>

        <div className="last-child">
            <p>&copy; 2022 ATOMS INC.</p>
            <p>TERMS & CONDITIONS</p>
            <p>PRIVACY POLICY</p>
        </div>
        </footer>
    )
}