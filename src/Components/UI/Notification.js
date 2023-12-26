import React from "react";
import './Notification.css'
const Notification = (props) =>{
    //console.log(props.status)
    return(
        <div className={`notification ${props.status.toLowerCase()}`}>
                <span> {props.status}</span>
                <span> {props.title}</span>
                <span> {props.message}</span> 
        </div>
    )
}

export default Notification;