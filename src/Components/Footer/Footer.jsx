import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer">
      <div className="child1">
        <div className="child1a">
          <img src={assets.zomatologo} />
        </div>

        <div className="child1b">
          <div className="child1ba">
            <img src={assets.flag} alt="" />
            <p>Pakistan</p>
            <img src={assets.downarrow} alt="" />
          </div>

          <div className="child1bb">
            <img src={assets.globalicon} alt="" />
            <p>English</p>
            <img src={assets.downarrow} alt="" />
          </div>
        </div>
      </div>

      <div className="child2">
        <div className="child2a">
          <p className="heading">ABOUT ZOMATO</p>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="child2a">
          <p className="heading">ZOMAVERSE</p>
          <ul>
            <li>Zomato</li>
            <li>Blinkit</li>
            <li>District</li>
            <li>Feeding India</li>
            <li>Hyperpure</li>
            <li>Zomato Live</li>
            <li>Zomaland</li>
            <li>Weather Union</li>
          </ul>
        </div>

        <div className="child2a">
          <p className="heading">FOR RESTAURANTS</p>
          <ul>
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>

        <div className="child2a">
          <p className="heading">LEARN MORE</p>
          <ul>
           <li>Privacy</li>
           <li>Security</li>
           <li>Terms</li>
          </ul>
        </div>

        <div className="child2a">
        <div className="heading">
          SOCIAL LINKS
        </div>

        <div className="child2aa">
          <span><img src={assets.linkedinicon} alt="" /></span>
          <span><img src={assets.instaicon} alt="" /></span>
          <span><img src={assets.twittericon} alt="" /></span>
          <span><img src={assets.youtubeicon} alt="" /></span>
          <span><img src={assets.fbicon} alt="" /></span>
        </div>

        <div className="appimg">
          <img src={assets.p10} alt="" />
        </div>
        <div className="appimg2">
          <img src={assets.p9} alt="" />
        </div>
        </div>
      </div> 

      <div className="child3">
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
