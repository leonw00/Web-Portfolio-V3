import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import NavItem from './reusable-objects/NavItem';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setTimeout(() => {setClick(false)}, 1000);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu}>
                        LW 
                    </Link>
                    <div className = "menu-icon" onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <NavItem
                            name = "Projects"
                            logo = "fas fa-code"
                            destination = "project_page"
                            onClick = {closeMobileMenu}
                        />
                        <NavItem
                            name = "Experience"
                            logo = "fas fa-tools"
                            destination = "experience_page"
                            onClick = {closeMobileMenu}
                        />
                        <NavItem
                            name = "Contact"
                            logo = "fas fa-envelope"
                            destination = "contact_page"
                            onClick = {closeMobileMenu}
                        />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
