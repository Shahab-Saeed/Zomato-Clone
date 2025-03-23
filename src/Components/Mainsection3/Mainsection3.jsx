import React from "react";
import "./Mainsection3.css";
import { assets } from "../../assets/assets";

const Mainsection3 = () => {
  return (
    <div className="mainsection3">
      <div className="child1">
        <img src={assets.p8} alt="" />
      </div> 

      <div className="child2">
        <h1>Get the Zomato app</h1>

        <p>
          We will send you a link, open it on your phone to download the app
        </p>

        <div className="child2a">
          <div className="child2aa">
            <input type="radio" name="contact" id="c" />
            <label htmlFor="c">Email</label>
          </div>
          <div className="child2aa">
            <input type="radio" name="contact" id="p" />
            <label htmlFor="p">Phone</label>
          </div>
        </div>

        <div className="child2b">
          <input type="text" className="input" placeholder="Email"/>
          <div className="applink">Share App Link</div>
        </div>

        <p className="light">Download app from</p>

        <div className="child2c">
          <img src={assets.p9} alt="" />
          <img src={assets.p10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mainsection3;
