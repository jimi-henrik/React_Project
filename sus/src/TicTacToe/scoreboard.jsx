import react from "react";

export const Scoreboard = ({scores}) =>{
    return(
        <div>
            <span>X - {scores.xScore}</span>
            <span>O - {scores.oScore}</span>
        </div>
    )
}
