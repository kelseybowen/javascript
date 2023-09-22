import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerDetail from "./components/PlayerDetail";
import DashboardView from "./views/DashboardView";
import Header from "./components/Header";
import AddPlayer from "./components/AddPlayer";
import './App.css'

function App() {

  const [allPlayers, setAllPlayers] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then(res => setAllPlayers(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardView allPlayers={allPlayers} setAllPlayers={setAllPlayers} />} path="/api/players" />
          <Route element={<PlayerDetail />} path="/api/players/:id" />
          <Route element={<AddPlayer />} path="/api/players/add" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
