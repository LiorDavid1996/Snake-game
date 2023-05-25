import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game/Game'

function App() {
  return (
    <>
    <div style={{display:'flex' ,justifyContent:'center' }}>
    <h1 className='font-link title' >SNAKE GAME</h1>
    </div>
    <Game/>
    </>
  );
}

export default App;
