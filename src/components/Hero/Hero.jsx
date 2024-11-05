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
        <div>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Solutions.
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={react} alt="" />
                </div>
                <img className="Soft" src={HeroImg} alt="" />
            </div>
            <div>
                <div className="tech-icon">
                    <img src={HtmlImg} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={CSSImg} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={jsImg} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={ NodejsImg} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={TSImg} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={ApiImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero