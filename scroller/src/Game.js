import React, { useState } from 'react';
import Sketch from 'react-p5';
import useChar from './hooks/useChar';

export default function Game(props) {


  const[x, setX] = useState(10)
  const[y, setY] = useState(360)

  // let x = 10
  // let y = 360
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 400).parent(canvasParentRef)
    
    
    
  }

  console.log(x,y)

  const keyDown = (p5) => {
    
    if (p5.keyIsDown(39)) {
      if(x < 590){
        setX(prev => prev +=5)
       
      }
      
    }
    if (p5.keyIsDown(37)) {
      
      if(x > 10){
        setX(prev => prev -=5)
      }

      // 080588333w60
      // michel jzanus 407624982 5163260808
      
    }
    if (p5.keyIsDown(38)) {
      if(y > 0) {
        setY(prev => prev -=5)
      }
      
    }
    if (p5.keyIsDown(40)) {
      if(y < 360){
        setY(prev => prev +=5)
      }
      
    }
  }
// const {movement} = useChar(setX, setY, x, y)
  const draw = p5 => {
    keyDown(p5)
    p5.background('pink')
    p5.fill(props.color)
    p5.rect(x, y, 18, 40, 30)
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
