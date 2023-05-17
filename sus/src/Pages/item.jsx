import React from "react";

export const Item =(props) =>{
    return(
        <div>
            <img src={props.img} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}