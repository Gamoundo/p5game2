import React from 'react';
import Sketch from 'react-p5';

export default function Game(props) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 400).parent(canvasParentRef)
    
    
    
  }

  const draw = p5 => {
    p5.background(props.color)
  }
  console.log(props)
    return (
    <div>
        <h1>Game</h1>

        <div>
          {props && <p>color: {props.color}</p>}  
           {props && <p>shot: {props.shot}</p>} 
           {props && <p>shotSize: {props.shotSize}</p>} 
           {props && <p> name: {props.name}</p>}
        </div>
        <Sketch draw={draw} setup={setup} />
    </div>
  ) 
}
