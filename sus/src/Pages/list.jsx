import React from "react";
import {useState} from "react";



export const List = () =>{
    const [content,setContent] = useState([]);
    const[inputValue,setInputValue]=useState('');
    
    const removeHandler = (removeIndex)=>{
        const removeItem = content.filter((item, index)=>{
            return removeIndex !== index;
        });
        setContent(removeItem);
    }

    function clear(){
        setContent([]);
    }

    return(
        <div>
            <div>
                <form onSubmit={(event)=>{
                    event.preventDefault()
                    const temp = [inputValue,...content];
                    setContent(temp);
                    setInputValue('');
                }}>
                    <input type="text" 
                    placeholder="type here :3" 
                    value={inputValue}  
                    onChange={e => setInputValue(e.currentTarget.value)}
                    required/>
                   
                    <input type="submit"value="submit" />
                    {
                        content.map((item, index)=>(
                            <ul>
                                <li>
                                    <p key={index}>{item}</p>
                                    <button onClick={()=> removeHandler(index)}>remove</button>
                                </li>
                            </ul>
                        ))
                    }
                </form>
                <button onClick={clear}>clear list</button>
            </div>
        </div>
    );
}