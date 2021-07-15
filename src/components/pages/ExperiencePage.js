import React from 'react'
import { Element } from 'react-scroll'
import ExperienceItem from '../reusable-objects/ExperienceItem'
import './ExperiencePage.css'
import Fade from 'react-reveal/Fade';

function ExperiencePage() {
    return (
        <div className = "experience_page">
            <Element name = "experience_page"/>
            <h1>Work <p className = "colorize__blue">Experience</p></h1>
            <div className = "experience_container">
                <ul className = "experience_items">
                    <Fade>

                        <ExperienceItem
                            title = "Grader / Marker"
                            location = "University of Manitoba"
                            duration = "August 2019 - December 2019"
                            src = "logo/umanitoba.jpeg"
                            text = "An android application that allows users to create flashcards to study from. This is a group project for my software engineer course where the project is built in Android Studio. By doing this project, I learn about the Agile Development Cycle, the importance of unit tests, integrations tests and system tests, cooperating and communicating with my group members to work efficiently and effectively and have developed a sense of estimating feature management."
                        />
                        
                        <ExperienceItem
                            title = "Assistant Adjuster"
                            location = "General Adjuster Indonesia"
                            duration = "May 2021 - July 2021"
                            src = "logo/gai.png"
                            text = "An android application that allows users to create flashcards to study from. This is a group project for my software engineer course where the project is built in Android Studio. By doing this project, I learn about the Agile Development Cycle, the importance of unit tests, integrations tests and system tests, cooperating and communicating with my group members to work efficiently and effectively and have developed a sense of estimating feature management."
                        />
                        
                    </Fade>
                </ul>
            </div>
        </div>
    );
}

export default ExperiencePage
