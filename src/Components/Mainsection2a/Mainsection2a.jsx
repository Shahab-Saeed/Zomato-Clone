import React from 'react'
import "./Mainsection2a.css"
import {assets} from "../../assets/assets"
const Mainsection2a = (props) => {
     
  return (
    
    <div className='mainsection2a'>
     <div className="child">
     <div className="c1">
        <p>{props.heading}</p>
        <p className='places'>{props.places}</p>
      </div>
      <div className="c2"> 
        <img src={assets.rightarrow} alt="" />
      </div>
     </div>
    </div>
  )
}

export default Mainsection2a
