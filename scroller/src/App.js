import React, { useState } from 'react';
import './App.css';
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
    </div>
  );
}

export default App;
