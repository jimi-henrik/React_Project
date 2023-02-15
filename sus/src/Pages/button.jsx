import react from "react";
import {useState} from "react";

export const Buttons = () =>{

    const[count, setCount] = useState(0);
    const[difCount, setdifCount] = useState(0);

    function countClicks(){
        setCount(count +1);
    }

    function resetClicks(){
        setCount(0);
        setdifCount(0);
    }

    function countDifClicks(){
        setdifCount(difCount +1);
    }

    return(
        <div>
            <button onClick={countClicks}>
                {count} tammakkos
            </button>
            <button onClick={resetClicks}>
                reset tammakkos
            </button>
            <button onClick={countDifClicks}>
                {difCount} frogges
            </button>
            <a href="https://fi.wikipedia.org/wiki/Sammakko" target="_blank" rel="noreferrer"></a>
        </div>
    );
}