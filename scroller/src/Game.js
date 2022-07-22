import React from 'react'

export default function Game(props) {
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
    </div>
  )
}
