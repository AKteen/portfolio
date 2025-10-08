import React from 'react';
import {useState} from 'react';
import './navbar.css';

const Navbar = () => {


    const [pop, setPop]= useState(false);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        
        <>
        <div className="nav-container">
            <div className="nav-box">
                <img href="#" className="nav-logo"/>
                <h2 className="nav-header">AK</h2>
            {pop ? (
                <div className="nav-menu-container">
                    <button className="nav-btn with-menu" type="button" onClick={()=>setPop(!pop)}><img src="./menu.png"/></button>
                    <ul className="nav-ul">
                        <li className="nav-li" onClick={() => scrollToSection('home')}>Home</li>
                        <li className="nav-li" onClick={() => scrollToSection('about')}>About</li>
                        <li className="nav-li" onClick={() => scrollToSection('experience')}>Experience</li>
                        <li className="nav-li" onClick={() => scrollToSection('skills')}>Skills</li>
                        <li className="nav-li" onClick={() => scrollToSection('contact')}>Contact</li>
                    </ul>
                </div>
            ) : (
                <button className="nav-btn" type="button" onClick={()=>setPop(!pop)}><img src="./menu.png"/></button>
            )}

            </div>
        </div>
        </>

    );
}

export default Navbar;
