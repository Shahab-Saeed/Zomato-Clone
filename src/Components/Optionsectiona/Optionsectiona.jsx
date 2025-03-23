import React from 'react'
import {assets} from "../../assets/assets"
import "./Optionsectiona.css"

const Optionsectiona = (props) => {
  return (
    <div className='optionsectiona'>
      <div className="child1">
        <p>{props.text}</p>
        <img src={assets.downarrow} alt="" />
      </div>
    </div>
  )
}

export default Optionsectiona
