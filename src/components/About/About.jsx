import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Java Full Stack Developer with 3.5+ years of experience in backend and frontend development. Skilled in Java, 
Spring Boot, Microservices, React JS, SQL, and building enterprise applications. Strong expertise in the financial 
domain with proven contributions across the full software lifecycle — from requirement analysis to coding, testing, 
and deployment and integrating Al solutions using Spring Al.</p>
                <p>My passion for full stack  development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                              <div className="about-skill"><p>Java</p><hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>Spring Boot</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Angular</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Microservices</p><hr style={{width:"50%"}} /></div>
                                              <div className="about-skill"><p>mySQL</p><hr style={{width:"70%"}} /></div>
                              <div className="about-skill"><p>mongoDB</p><hr style={{width:"70%"}} /></div>
                              <div className="about-skill"><p>AWS</p><hr style={{width:"65%"}} /></div>

            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3.5+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1></h1>
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default About
