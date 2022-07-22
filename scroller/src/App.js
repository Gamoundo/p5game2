import React, { useState } from 'react';
import './App.css';
import Game from './Game';
import Signin from './Signin';




function App() {
  const [char, setChar] = useState({
    name: '',
    shot: '',
    shotSize: "",
    color: ''
  })
  
  
  
  
  
  
  return (
    <div className="App">
      <h1> Side Scroller</h1>
      {char.name === '' && <Signin setChar={setChar}/>}
      {char.name !== '' && <Game name={char.name} shot={char.shot} shotSize={char.shotSize} color={char.color}/>}
    </div>
  );
}

export default App;
