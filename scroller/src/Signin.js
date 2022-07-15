import React from 'react'

export default function Signin() {




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
