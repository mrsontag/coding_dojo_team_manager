import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/header';
import Players from './components/players';
import EditPlayer from  './components/editplayer';
import GameStatus from './components/game_status';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main_shell" >
        <Router>
          <Players path="/" />
          <EditPlayer path="/edit/:id" />
          <EditPlayer path="/new/" />
          <GameStatus path="/status/" />
        </Router>
      </div>
    </div>
  );
}

export default App;
