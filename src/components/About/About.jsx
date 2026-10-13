import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Software Engineer | Java Full Stack Developer with 4+ Years of Experience in software development, specializing in Java, Spring, Spring Boot, Microservices, REST APIs,
                   and Full Stack Development. Experienced in building and enhancing enterprise applications in the financial domain, including Mortgage-Backed Securities (MBS) and
                    Liquidity Risk Infrastructure (LRI) solutions. Strong hands-on experience with React JS, Angular, Kafka, JPA, Hibernate, SQL, PostgreSQL, MySQL, Docker, AWS, and 
                    Kubernetes. Proven expertise across the complete software development lifecycle, including requirement analysis, design, coding, unit testing, debugging, bug fixing,
                     and implementation of change requests. Experienced in developing scalable applications, real-time messaging solutions, and financial reporting systems with a strong 
                     focus on quality, performance, and business requirements.
</p>
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
                <div className="about-skill"><p>Kafka</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Docker</p><hr style={{width:"50%"}} /></div>
                                              <div className="about-skill"><p>Kubernetes</p><hr style={{width:"70%"}} /></div>
                              <div className="about-skill"><p>JUnit</p><hr style={{width:"70%"}} /></div>
                              <div className="about-skill"><p>Jenkins</p><hr style={{width:"65%"}} /></div>

            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>4+</h1>
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
