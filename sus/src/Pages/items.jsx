import React from "react";
import {Item} from "./item";
import {items} from "./itemDataBase";

export const Items=()=>{
    return(
        <div>
            {
                items.map(({img,title,description})=>
                <Item 
                    img={img}
                    title={title}
                    description={description}
                />
                )
            }
        </div>
    )
}