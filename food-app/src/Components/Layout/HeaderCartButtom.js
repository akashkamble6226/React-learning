import React from "react";
import CartIcon from "../Cart/CartIcon";
import cssClasses from './HeaderCardButton.module.css';

const HeaderCartButton =props=>{

    return <button className={cssClasses.button} onClick={props.onClick}>
        <span className={cssClasses.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={cssClasses.badge}>5</span>

    </button>
}

export default HeaderCartButton;