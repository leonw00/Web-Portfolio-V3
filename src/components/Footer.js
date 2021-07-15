import React from 'react'
import './Footer.css'
import {animateScroll as scroll} from 'react-scroll'


function Footer() {
    return (
        <div className = "footer">
            <p className = "footer_name">by Leonardo Warsito</p>
            <i class="fas fa-arrow-alt-circle-up footer_icon" onClick = {scroll.scrollToTop}/>
        </div>
    )
}

export default Footer
