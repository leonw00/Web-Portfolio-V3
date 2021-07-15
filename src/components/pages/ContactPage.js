import React from 'react'
import { Element } from 'react-scroll'
import Footer from '../Footer'
import ContactItem from '../reusable-objects/ContactItem'
import './ContactPage.css'
import Slide from 'react-reveal/Slide';


function ContactPage() {
    return (
        <div className = "contact__page">  
            <Element name = "contact_page" />
            <h1>Contact <p className = "colorize__blue">Me</p></h1>
            <div className = "contact__container">
                <ul className = "contact__items">
                    
                    <ContactItem
                        src = "fab fa-github"
                        href = "https://github.com/leonw00/"
                    />
                    <ContactItem
                        src = "fas fa-envelope-open-text"
                        href = "mailto:warsitol@myumanitoba.ca"
                    />
                    <ContactItem
                        src = "fab fa-linkedin"
                        href = "https://www.linkedin.com/in/leonardo-warsito-733157203/"
                    />
                    
                </ul>   
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage
