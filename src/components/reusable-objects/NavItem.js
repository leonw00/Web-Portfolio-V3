import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'


function NavItem(props) {
    return (
        <li className = "nav-item">
            <Link 
                to = {props.destination} 
                className = "nav-links" 
                onClick = {props.onClick}
                spy={true} smooth={true} offset={-50} duration={750}>
                    <i class={props.logo}/> {props.name}
            </Link>
        </li>
    )
}

export default NavItem
