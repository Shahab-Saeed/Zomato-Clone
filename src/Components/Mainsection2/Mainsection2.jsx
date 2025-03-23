import React from 'react'
import "./Mainsection2.css"
import Mainsection2a from '../Mainsection2a/Mainsection2a'
import { assets } from '../../assets/assets'
const Mainsection2 = () => {
  return (
    <div className='mainsection2'> 
      <div className="c1">
        <h1>Popular localities in and around <span>Delhi NCR</span></h1>
      </div>
      <div className="child2">
      <div className="c2">
        <Mainsection2a heading={"Connaught Place"} places={"308 places"}/>
        <Mainsection2a heading={"Sector 29"} places={"153 places"}/>
        <Mainsection2a heading={"Sector 18, Noida"} places={"247 places"}/>
        <Mainsection2a heading={"Rajouri Garden"} places={"426 places"}/>
        <Mainsection2a heading={"Saket"} places={"384 places"}/>
        <Mainsection2a heading={"DLF Cyber City"} places={"158 places"}/>
        <Mainsection2a heading={"Golf Course Road"} places={"165 places"}/>
        <Mainsection2a heading={"DLF Phase 4"} places={"251 places"}/>
        <div className="c2a">
            <p>see more</p>
            <img src={assets.downarrow} alt="" />
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default Mainsection2
