import React from 'react'
import './ContactItem.css'

function ContactItem(props) {

    const result = props.src + " fa-10x contact__item__src";

    return (
        <li className = "contact__item">
            <a href = {props.href}>
                <i class = {result}/>
            </a>
        </li>
    )
}

export default ContactItem
