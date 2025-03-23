import React from 'react'
import "./Collections1.css"
import { assets } from '../../assets/assets'

const Collections1 = (props) => {
    const containerStyle = {
        backgroundImage: `url(${props.img})`,
   
        backgroundSize: 'cover',            
        backgroundPosition: 'center',      
        height: '100%',
        width: '100%', 
        filter:" brightness(0.9) contrast(1) opacity(9) ",
        opacity:"1",
        color:"white",

    
    
       
      };
  return (
    <div>
      <div className="collections1">
        <div className="container" style={containerStyle}>
            <div className="c1">
                <h1>{props.heading}</h1>
            </div>
            <div className="c2">
                <p>{props.places}</p>
                <img src={assets.rightarrowgraybold} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Collections1
