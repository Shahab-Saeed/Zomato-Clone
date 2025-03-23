import React from 'react'

import "./Mainsection1.css"
const Mainsection1 = (props) => {
  return (
    <div className='mainsection1'>
      <div className="container">
        <div className="child1">
            <img src={props.img} alt="" />
        </div>
        <div className="child2"> 
            <h3>{props.heading}</h3>
            <p>{props.paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Mainsection1
