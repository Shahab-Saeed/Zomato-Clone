import React from 'react'
import "./Optionsection.css"
import Optionsectiona from '../Optionsectiona/Optionsectiona'
const Optionsection = () => {
  return (
    <div className='optionsection'>
     <div className="child1">
     <p>Explore options near me</p>
     </div>
     <div className="child2">
        <Optionsectiona text={"Popular cuisines near me"}/>
        <Optionsectiona text={"Popular restaurant types near me"}/>
        <Optionsectiona text={"Top restaurant chains"}/>
        <Optionsectiona text={"Cities we deliver to"}/>
     </div>
    </div>
  ) 
}

export default Optionsection
