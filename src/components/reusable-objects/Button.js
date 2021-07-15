import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--demo'];

const SIZES = ['btn--medium', 'btn--large'];

function Button (props){
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

    return (
        <a 
        href = {props.href}
        className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick = {props.onClick}>
            <i class = {props.icon}/> {props.children}
        </a>
    );
};

export default Button;

