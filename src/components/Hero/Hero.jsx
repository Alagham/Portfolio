import React from 'react'
import "./Hero.css"
import HeroImg from "../../assets/prop-img.jpg"
import HtmlImg from "../../assets/html-img.png"
import CSSImg from "../../assets/css-img.png"
import jsImg from "../../assets/js-img.png"
import NodejsImg from "../../assets/nodejs-img.png"
import TSImg from "../../assets/typescript-img.png"
import ApiImg from "../../assets/api-img.png"
import  react from "../../assets/react.svg"

const Hero = () => {
  return (
    <section className="hero-container">
        <div className='intro'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Full Stack Developer | Transforming Ideas into Seamless and Visually Stunning Solutions.
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={react} alt="" />
                </div>
                <img className="Soft" src={HeroImg} alt="" />
                <div className="tech-icon6">
                    <img src={ApiImg} alt="" />
                </div>
            </div>
            <div className=''>
                <div className="tech-icon1">
                    <img src={HtmlImg} alt="" />
                </div>
                <div className="tech-icon2">
                    <img src={CSSImg} alt="" />
                </div>
                <div className="tech-icon3">
                    <img src={jsImg} alt="" />
                </div>
                <div className="tech-icon4">
                    <img src={ NodejsImg} alt="" />
                </div>
                <div className="tech-icon5">
                    <img src={TSImg} alt="" />
                </div>
               
            </div>
        </div>
    </section>
  )
}

export default Hero