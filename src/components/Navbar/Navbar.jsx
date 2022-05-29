import React from 'react'
import './Navbar.scss'

const Navbar = () => {

    const logo = process.env.PUBLIC_URL + `/logo.svg`

   
    
  return (
    <div className="navbar app__flex">
      <div className="navbar__topnav app__flex">
          <img src={logo} alt="logo" />
          <ul className="navbar__topnav-content app__flex">
            {['ABOUT US', 'STORIES', 'CONTACT', 'LOG IN', 'SIGN UP'].map((item) =>(
                <li className={item === 'SIGN UP' ? `app__flex p-text navbar__btn` : `app__flex p-text`} key={`link-${item}`}>
                <div />
                <a href={`#`}>{item}</a>
                </li>
            ))}
          </ul>
      </div>
      <ul className="navbar__bottomnav app__flex">
            {['MARKETPLACE', 'WHOLESALE CENTER', 'SELLER CENTER', 'SERVICES', 'INTERNSHIPS', 'EVENTS'].map((item) =>(
                <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#`}>{item}</a>
                </li>
            ))}
          </ul>
    </div>
  )
}

export default Navbar
