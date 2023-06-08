import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.card}>
      <img
        className={classes.Image}
        src="https://p-u.popcdn.net/attachments/images/000/012/271/large/logo_cleverse.png?1538033995"
        alt="cleaverse"
      />
      <div className={classes.Text}>
        <a>About Us</a>
        <a>Blog</a>
        <a>Career</a>
        <a>Contact Us</a>
        <img
          className={classes.Nightmode}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/OOjs_UI_icon_moon.svg/1200px-OOjs_UI_icon_moon.svg.png"
          alt="night"
        />
      </div>
    </div>
  )
}

export default Navbar
