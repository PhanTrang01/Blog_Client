import React from 'react';
import Logo from '../images/logo.png';

function Footer() {
  return (
    <div><footer>
    <img src={Logo} alt="" />
    <span>
      Made with <b>React.js</b> by <i>TrangPhan</i> 💗
    </span>
  </footer></div>
  )
}

export default Footer