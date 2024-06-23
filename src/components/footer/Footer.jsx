import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a href="http://google.com"><SiGmail /></a>
        <a href="http://google.com"><FaFacebook /></a>
        <a href="http://google.com"><FaInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>

  )
}

export default Footer