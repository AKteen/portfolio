import React from 'react';
import './hero.css';



const Hero = () => {
    return (
        
        <>
        
        <div className="hero-container">
            <div className="hero-box">
                <h1 className="hero-head">Hello, this is Aditya</h1>
                <p className="hero-para">I didn’t wait to be ready. I just started building. Code is a tool. Mindset is the weapon. Every project 
                    I touch turns into progress — that’s non-negotiable.</p>
                <div className="hero-links">
                    <li><a href="https://www.linkedin.com/in/aditya-kulkarni-92911b1b9/" ><img src="./linked.webp"/>Linkedin</a></li>
                    <li><a href="https://github.com/AKteen" ><img src="./github.png"/>GitHub</a></li>
                </div>
            </div>
        </div> 
        </>

    );
}

export default Hero;
