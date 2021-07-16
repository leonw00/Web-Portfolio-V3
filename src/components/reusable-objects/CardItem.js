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
import mongodbIcon from '@iconify-icons/logos/mongodb';
import dartIcon from '@iconify-icons/logos/dart';
import dockerIcon from '@iconify-icons/logos/docker-icon';
import supabaseIcon from '@iconify-icons/simple-icons/supabase';



function CardItem(props) {

    const language_array = props.languages;
    var tempIcon;
    var language_container = [];
    var divChild;

    for(var i = 0; i < language_array.length; i++){
        
        if(language_array[i].match("java")){
            tempIcon = javaIcon;
        }
        else if(language_array[i].match("javascript")){
            tempIcon = javascriptIcon;
        }
        else if(language_array[i].match("python")){
            tempIcon = pythonIcon;
        }
        else if(language_array[i].match("django")){
            tempIcon = djangoIcon;
        }
        else if(language_array[i].match("flutter")){
            tempIcon = flutterIcon;
        }
        else if(language_array[i].match("postgresql")){
            tempIcon = postgresqlIcon;
        }
        else if(language_array[i].match("firebase")){
            tempIcon = firebaseIcon;
        }
        else if(language_array[i].match("mongodb")){
            tempIcon = mongodbIcon;
        }
        else if(language_array[i].match("dart")){
            tempIcon = dartIcon;
        }
        else if(language_array[i].match("docker")){
            tempIcon = dockerIcon;
        }
        else if(language_array[i].match("supabase")){
            tempIcon = supabaseIcon;
        }
        else{
            tempIcon = "";
        }
        

        divChild = <Icon icon = {tempIcon} className = "spacing" width = "1.4em" height = "1.4em"/>;
        language_container.push(divChild);
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
                    {language_container}
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
