import React from 'react'
import "./about.css"
import AboutImg from "../../assets/developer.png"
import CV from "../../assets/John-Cv.pdf"
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="about__container container grid">
            <a href="#">
              <img src={AboutImg} alt="" className="about__img" />
            </a>

            <div className="about__data">
                <Info />
                <h2 className="section__title">A Little About Me</h2>
                <span className="section__subtitle">DREADFUL</span>
                
                <p className="about__description">I'm a self-taught developer|coder who loves 
                building games and apps. I’m also a full-stack web developer and an avid Anime and Manga fan, and a Daydreamer, 
                and also a casual gamer. If you share my interests, feel free to reach out and 
                connect.</p>

                <a href="#contact" className="let__connect">Let's Connect</a>
            </div>
        </div>
    </section>
  )
}

export default About
