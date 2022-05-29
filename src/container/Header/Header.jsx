import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className="header app__flex">
      <div className="header__content">
          <h1 className="head-text app__flex">
          Amazing<br/>
        Experiences from Our Wonderful Customers
          </h1>
          <p className="p-text">Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
      </div>
      <div className="header__image">
          <div className="header__image-circle"></div>
          <div className="header__image-container">

          </div>
      </div>
    </div>
  )
}

export default Header
