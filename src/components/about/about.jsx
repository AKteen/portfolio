import React from 'react';
import ProfileCard from '../../Bits/ProfileCard.jsx';
import './about.css';

const About = () => {
    return (
        <>
        <div className="about-container">
            <div className="about-box">
                <ProfileCard />
                <div className="about-text">
                    <h2 className="about-h">About Me</h2>
                    <p className="about-p">I'm Aditya Kulkarni an engineering student at PES Modern College of Engineering, Pune.— a passionate front-end developer currently diving deeper into the MERN stack. I love turning ideas into interactive, responsive, and meaningful web experiences using HTML, CSS, JavaScript, and ReactJS. 
                        With a mindset rooted in continuous learning, I'm currently undergoing internship training to sharpen my full-stack development skills and explore real-world problem solving through code. Every project I take on is a step 
                        toward mastering my craft and building solutions that matter.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;