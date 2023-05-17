import React from "react";

import './TicTacToe.css';

import { Board } from "./Board";
import { Scoreboard } from "./scoreboard";
import { useState } from "react";
import { useEffect } from "react";

const intialBoard=['','','','','','','','',''];


export const TicTacToe = ()=>{
    const[gameState, setGameState] = useState(intialBoard);
    const[isXTurn, setIsXTurn] = useState(true);
    const[status, setStatus] = useState('');
    const[scores, setScores] = useState({xScore : 0, oScore : 0});

    useEffect(() =>{
        const winner = checkWinner();
        if(winner === null){
            return;
        }

        if(winner === "X"){
            setScores({xScore: scores.xScore + 1, oScore: scores.oScore});
        }
        
        else{
            setScores({oScore: scores.oScore + 1, xScore: scores.xScore});
        }

    },[status])

    useEffect(()=>{
        const winner = checkWinner();
        if(winner)
        {
            setStatus(`Winner: ${winner}`);
        }else if(!gameState.includes('')){
            setStatus("It's a draw!");
            }else{
                setStatus(`${isXTurn ? 'X' : 'O'}'s turn`);
            }
    },[gameState])

const onSquareClick = (index) =>{    
    let strings = Array.from(gameState);

    if(status.includes("Winner")){
        return;
    }

    if(strings[index] !== '')
    {
        return;
    }
    strings[index] = isXTurn ? 'X' : 'O';
    setGameState(strings);
    setIsXTurn(!isXTurn);
}

    const checkWinner = () =>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,4,8]
        ];
        for(let i = 0; i < lines.length; i++){
            const[a,b,c] = lines[i];
            if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    return(
        <div>
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Scoreboard scores={scores}/>
            <Board gameState={gameState} onSquareClick={onSquareClick}/>
            {!status.includes("Winner") &&(
                <>
                <span>{status}</span>
                <button onClick={()=>{
                    setGameState(intialBoard);
                    setIsXTurn(true);
                }}>Clear Board</button>
                </>
            )}
            {status.includes("Winner") &&(
                <>
                <span>{status}</span>
                <button onClick={()=>{
                    setGameState(intialBoard);
                    setIsXTurn(true);
                }}>Clear Board</button>
                </>
            )}
        </div>
        </div>
    );
    
}