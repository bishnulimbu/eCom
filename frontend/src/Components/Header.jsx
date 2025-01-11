import React from 'react'
import pp from '.././assets/pp.jpg'
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <p>Hello User!</p>
      <h3>E-comm Site</h3>
      <img src={pp} alt="profile image" id="ppImg" />
    </div>
  )
}

export default Header
