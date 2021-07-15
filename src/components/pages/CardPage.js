import React from 'react'
import { Element } from 'react-scroll'
import CardItem from '../reusable-objects/CardItem'
import './CardPage.css'
import Fade from 'react-reveal/Fade';

function CardPage() {
    return (
        <div className = "cards">
            <Element name = "project_page" />
            <h1>My <p className = "colorize__blue">Projects</p></h1>
            <div className = "cards_container">
                <ul className = "cards_items">
                    <Fade bottom>


                        <CardItem
                            src = "images/mockSS.png"
                            title = "Secret Stories"
                            text = "A web app where users could post stories online anonymously. There is a login functionality for the user to track what they have posted. The site is mainly built in Django with postgresql as its database. It is deployed to Heroku with the use of Docker as its container."
                            live = "https://gentle-plateau-42680.herokuapp.com/"
                            code = "https://github.com/leonw00/secret-stories"
                        />

                        <CardItem
                            src = "images/mockMD.png"
                            title = "Mood Daily"
                            text = "A mobile application where users are able to record their feelings and look back upon them on a later date. This application is made in flutter which makes it accessible on both android and ios. But so far, it has only been published on the google play store for android. Building this project, I have learned a lot of things such as, being able to effeciently read and write to the firestore database, understand how to publish an app to the google play store and built a working app in flutter."
                            live = "https://play.google.com/store/apps/details?id=hoxy.mood_record_daily"
                            code = "https://github.com/leonw00/Daily-Mood-App"
                        />

                        <CardItem
                            src = "images/mockRL.png"
                            title = "Reversible Learning"
                            text = "An android application that allows users to create flashcards to study from. This is a group project for my software engineer course where the project is built in Android Studio. By doing this project, I learn about the Agile Development Cycle, the importance of unit tests, integrations tests and system tests, cooperating and communicating with my group members to work efficiently and effectively and have developed a sense of estimating feature management."
                            live = "https://rawcdn.githack.com/leonw00/COMP3350-ReversibleLearning/be74a7c308c645dd2a7f062a9ef6d4a6d9ef462c/index.html"
                            code = "https://github.com/leonw00/COMP3350-ReversibleLearning"
                        />

                        
                    </Fade>
                </ul>
            </div>
        </div>
    )
}

export default CardPage
