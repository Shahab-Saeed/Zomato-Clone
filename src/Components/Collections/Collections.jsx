import React from 'react'
import "./Collections.css"
import {assets} from "../../assets/assets"
import Collections1 from '../Collections1/Collections1'

const Collections = () => {
  return ( 
    <div className='collections'>
      <div className="child1">
        <h1>Collections</h1>
        <div className="child1a">
            <div className="pflex">
            <p>Explore  curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            <div className="child1b">
                <p>All collections in Delhi NCR</p>
                <img src={assets.rightarrowbold}/>
            </div>
        </div>
      </div>

      <div className="child2">
        <Collections1 img={assets.p4} heading={"Top Trending Spots"} places={"30 Places"}/>
        <Collections1 img={assets.p7} heading={"Best Insta-worthy Places"} places={"46 Places"}/>
        <Collections1 img={assets.p5} heading={"Newly Opened Places"} places={"48 Places"}/>
        <Collections1 img={assets.p6} heading={"Iftar Specials"} places={"14 Places"}/>
      </div>
    </div>
  )
}

export default Collections
