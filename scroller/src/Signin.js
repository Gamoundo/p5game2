import React from 'react'

export default function Signin({setChar}) {

const handleSubmit = (e) => {
  e.preventDefault()
  const sizes =['s','m','l']
  setChar({
    name: e.target.name.value,
    color: e.target.color.value,
    shot: Math.floor(Math.random() * 3),
    shotSize: sizes[Math.floor(Math.random() * sizes.length)]
  })
}


  return (
    <form onSubmit={handleSubmit} className='sign'>
    <div> 
    <input type="text" name="name" placeholder="Name" />
    </div>
    <div>
    <input type="text" name="color" placeholder="Color" />
    </div>
    <input type="submit" value="To Battle!"  />
</form>
  )
}
