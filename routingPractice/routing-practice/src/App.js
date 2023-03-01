import './App.css';
import React, {useState} from 'react';
import {Routes, Route, useParams} from "react-router-dom";
import Home from './components/Home';
import Params from './components/Params';

function App() {

  return (
    <Routes>
      <Route exact path="/home" element={<Home/>}/>
      <Route path="/:word" element={<Params/>}/>
      <Route path="/:word/:color1/:color2" element={<Params/>}/>
    </Routes>
  );
}

export default App;
