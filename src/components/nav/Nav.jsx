import React from 'react'
import './nav.css'
import { RiHome2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><RiHome2Line /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><FaUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><FiBook /></a>
      <a href="#projects" className={activeNav === '#projects' ? 'active' : ''} onClick={() => setActiveNav('#projects')}><GrProjects /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><AiFillMessage /></a>
    </nav>
  )
}

export default Nav