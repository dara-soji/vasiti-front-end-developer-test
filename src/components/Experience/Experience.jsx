import React from 'react'
import './Experience.scss'

const Experience = ({db, firstName, lastName, location, story, customer}) => {
  return (
    <div className="experience ">
      <div className="experience__dp" style={{backgroundImage: `url(${db})`}}></div>
      <h3 className="experience__name">{`${firstName} ${lastName}`}</h3>
      <div className="experience__cv">
          <p>{location}</p>
          <h5 className={customer? `experience__cv-customer` : `experience__cv-vendor`} >{customer? "customer" : "vendor"}</h5>
      </div>
      <p className="experience__desc">{story}</p>
    </div>
  )
}

export default Experience
