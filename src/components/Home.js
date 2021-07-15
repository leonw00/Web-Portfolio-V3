import React from 'react'
import '../App.css'
import HeroSection from './pages/HeroSection'
import CardPage from './pages/CardPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'

function Home () {
    return (
        <>
            <HeroSection/>
            <CardPage/>
            <ExperiencePage/>
            <ContactPage/>
        </>
    );
}

export default Home;