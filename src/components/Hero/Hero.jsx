import React from 'react'
import './Hero.css'
import Arjun_CV from '../../assets/Arjun_CV.pdf'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Arjun Sharma,</span> Full Stack Developer</h1>
<p>I am full stack Developer currently working with Hover Technolgies Pvt Ltd</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>

        <div className="hero-resume">
                          <a href={Arjun_CV} className='anchor-link' target="_blank" rel="nooperner noreferrer" download>

          My resume          </a>

          </div>
      </div>
    </div>
  )
}

export default Hero
