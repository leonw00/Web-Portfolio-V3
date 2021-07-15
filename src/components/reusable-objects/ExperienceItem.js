import React from 'react'
import './ExperienceItem.css'

function ExperienceItem(props) {
    return (
        <li className = "experience__item">
            <figure className = "experience__item__picture">
                <img src = {props.src} alt = "project" className = "experience__item__img"/>
            </figure>
            <div className = "experience__item__info">
                <h2 className = "experience__item__title"><i class="fas fa-briefcase"/>{props.title}</h2>
                <h2 className = "experience__item__location"><i class="fas fa-compass"/>{props.location}</h2>
                <h2 className = "experience__item__duration"><i class="fas fa-clock"/>{props.duration}</h2>
                <div className = "experience__item__text">
                    {props.text}
                </div>
            </div>
        </li>
    )
}

export default ExperienceItem
