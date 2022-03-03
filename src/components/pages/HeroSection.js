import React from 'react'
import '../../App.css'
import './HeroSection.css'
import Navbar from '../Navbar'
import {Icon} from '@iconify/react';
import mouseIcon from '@iconify-icons/bi/mouse';

function HeroSection() {

    return (
        <div className = "hero-container">
            <Navbar/>
            <div className = "main-container">
                <div className = "hero-info">
                    <p className = "hero-greeting">Hi There 👋</p>
                    <h1>I'm <div class = "linear-wipe">Leonardo</div></h1>
                    <p className = "hero-description">I am a third-year computer science student studying at the University of Manitoba. I'm passionate about software development and machine learning.</p>
                    <p className = "hero-scroll"><Icon icon={mouseIcon} className = "spacing"/> Scroll Down </p>
                </div>
                <div className = "hero-picture">
                    {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className = "hero-blob">
                        <path fill="#D0E2FF" d="M49.5,-16.3C57.5,8.5,52.7,37.2,38.6,45.6C24.5,54,1.2,42.2,-21.7,26.4C-44.5,10.6,-67,-9.3,-63.3,-28.1C-59.6,-46.9,-29.8,-64.7,-4.5,-63.2C20.8,-61.7,41.5,-41,49.5,-16.3Z" transform="translate(100 100)" />
                    </svg> */}
                    {/* <img src = "images/humanPhoto.png" alt = "profile"/> */}
                </div>
            </div>
        </div>
    );
}
 
export default HeroSection;
