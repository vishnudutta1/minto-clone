import React from 'react';

import './Navbar.css';



function Navbar() {
  return (
      <div className='Nav'>
          
          <img src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt="" className='NavLogo' />
          <input type="text" placeholder='Topic name, Influencer name' / >
          <span>All Topics</span>
          <span>About</span>
         <button>Login</button>

      </div>
  )
}

export default Navbar 