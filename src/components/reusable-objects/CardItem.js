import React from 'react'
import './CardItem.css'
import Button from './Button.js'
import { Icon } from '@iconify/react';
import djangoIcon from '@iconify-icons/logos/django-icon';
import pythonIcon from '@iconify-icons/logos/python';
import flutterIcon from '@iconify-icons/logos/flutter';
import postgresqlIcon from '@iconify-icons/logos/postgresql';
import firebaseIcon from '@iconify-icons/logos/firebase';
import javaIcon from '@iconify-icons/logos/java';
import javascriptIcon from '@iconify-icons/logos/javascript';


function CardItem(props) {

    const language_array = ["java", "python", "javascript", "flutter"];
    var tempIcon;

    for(var i = 0; i < language_array.length; i++){
        if(language_array[i].match("java")){
            tempIcon = djangoIcon;
            <Icon icon = {tempIcon} className = "spacing"/>
        }
    }

    return (
        <li className = "card__item">
            <figure className = "card__item__picture">
                <img src = {props.src} alt = "project" className = "card__item__img"/>
            </figure>
            <div className = "card__item__info">
                <h2 className = "card__item__title">{props.title}</h2>
                <h3 className = "card__item__language">
                    Built With: 
                    <Icon icon={djangoIcon} className = "spacing"/> 
                    <Icon icon={pythonIcon} className = "spacing" /> 
                    <Icon icon={flutterIcon} className = "spacing" />
                    <Icon icon={postgresqlIcon} className = "spacing" />
                    <Icon icon={firebaseIcon} className = "spacing" />
                    <Icon icon={javaIcon}  className = "spacing"/>
                    <Icon icon={javascriptIcon}  className = "spacing"/>
                </h3>
                <div className = "card__item__text">
                    {props.text}
                </div>
                <div class = "card__item__button__list">
                    <Button 
                        buttonStyle = "btn--demo"
                        children = "Demo" 
                        icon = "fas fa-external-link-alt"
                        href = {props.live}
                    />
                    <Button 
                        buttonStyle = "btn--outline"
                        href = {props.code}
                        children = "Code" 
                        icon = "fab fa-github"
                    />
                </div>
            </div>
        </li>
    )
}

export default CardItem
