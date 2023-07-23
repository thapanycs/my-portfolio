import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sai Thapan</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

     <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/sai-thapan-748b4a239/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/thapanycs" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/the_hayagriva" target='_blank'><SiTwitter/></a>
        <a href="https://leetcode.com/thapan_ycs/" target='_blank'><SiLeetcode/></a>

     </div>

     <div className="footer__copyright">
      <small>&copy; Made with 💙 by Thapan</small>
     </div>
    </footer>
  )
}

export default Footer