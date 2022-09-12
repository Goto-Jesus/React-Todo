import React from "react";
import "./Button.css"

let Button = (props) =>{
    return(
        <button className="button" style={props.style} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;