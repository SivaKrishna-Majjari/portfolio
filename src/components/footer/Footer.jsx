import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a href="mailto:sivakrishna.majjari@gmail.com" target='_blank'><SiGmail /></a>
        <a href="https://www.facebook.com/profile.php?id=100006375585798" target='_blank'><FaFacebook /></a>
        <a href="https://www.instagram.com/sivakrishna_m/" target='_blank'><FaInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>

  )
}

export default Footer