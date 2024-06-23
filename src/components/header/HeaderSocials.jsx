import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sivakrishnamajjari/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/SivaKrishna-Majjari/" target='_blank'><FaGithub /></a>
        <a href="https://leetcode.com/u/sivakrishna_majjari/" target='_blank'><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials