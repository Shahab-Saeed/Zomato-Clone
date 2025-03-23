import React, { useState } from 'react'
import {assets} from "../../assets/assets"
import './Header.css'
const Header = () => {

  const [toggle, setToggle] = useState(false)
  const toggleMenu=()=>{
    setToggle(!toggle);
    
    
  }

  const containerStyle = {
    backgroundImage: `url(${assets.coverphoto})`,
    backgroundSize: "cover", 
    backgroundPosition: "center",
    min_height: "100%",
    width: "100%",
  };
  return (
    <div className={`headersection `}
      style={containerStyle}
    >
      <div className={`hamburgersection ${toggle ? `widthfull` : 'widthhalf' }` } onClick={toggleMenu}>

        {
          toggle ? <div className='hamburgerchild'>
            <div className="child1">
            <img src={assets.cross} alt="" onClick={toggleMenu} className='crossimg' />
            <img src={assets.zomatologo} alt="" className='logoimg'/>
            </div>

            <div className="child2">
              <ul>
                <li>Investor Relations</li>
                <li>Add Restaurant</li>
                <li>Log in</li>
                <li>Sign up</li>
              </ul>
            </div>
          </div>
           : 
           <img src={assets.menuicon} onClick={toggleMenu} /> 
        }

      </div>
   
        <div className="nav">
          <div className="child1">
            Get the App
          </div>
          <div className="child2">
            <ul>
              <li>Investor Relations</li>
              <li>Add restaurant</li>
              <li>Log in</li>
              <li>Sign up</li>
            </ul>
          </div>
          
        </div>
        <div className={`othersection ${toggle ? "hide": "show"}`}>
          <div className='mainheading'>Zomato</div>
          <p className="text">Dicover the best food & drinks in Delhi NCR</p>
          <div className="searchbox">
            <div className="input1">
              <div className="input1a">
              <img src={assets.locationicon}  />
              <div>Block B, jaypee ..</div>
              </div>
              <img src={assets.downarrowbold} className='cp' />
            </div>
            <div className="input2">
              <img src={assets.searchicon}  />
              <p>Search for restaurant, cuisine or a dish</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
