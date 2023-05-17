import React from "react";
import './App.css';
import { Message } from "./Pages/home";
import { Buttons } from "./Pages/button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router }  from "./Pages/Router";
import { Counters } from "./Pages/Counters";
import {Items} from "./Pages/items";
import {List} from "./Pages/list";
import { TicTacToe } from "./TicTacToe/TicTacToe";

<titles>sammakko world</titles>
function App() {
  return (
    <BrowserRouter>
      <div >
      <Routes>
      <Route path='/' element={<Router/>}>
              <Route index element={<Message/>}/>
              <Route path="Buttons" element={<Buttons/>}/>
              <Route path="Counters" element={<Counters/>}/>
              <Route path="Items" element={<Items/>}/>
              <Route path="List" element={<List/>}/>
              <Route path="TicTacToe" element={<TicTacToe/>}/>

      </Route>
      </Routes>
       
    </div>
  </BrowserRouter>
  );
}

export default App;
