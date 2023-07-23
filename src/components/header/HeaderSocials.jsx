import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sai-thapan-748b4a239/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/thapanycs" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/the_hayagriva" target='_blank'><SiTwitter/></a>
        <a href="https://leetcode.com/thapan_ycs/" target='_blank'><SiLeetcode/></a>
        
    </div>
  )
}

export default HeaderSocials