import React from "react";
import "../App.css"
const square = (props)=>{
    return (
        <div 
        onClick={props.onClick}
        style={props.style}
        className="square"
        >
            <h5>{props.value}</h5>
        </div>
    )
}
export default square;