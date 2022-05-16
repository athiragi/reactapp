import React, { useState } from 'react'

const Profile = () => {
    var [name,setName]=useState("appu")
    
const changeName = () => {
setName(
    name="ammu"
)
   
}
  return (
    <div>logged in as {name}
    <button onClick={changeName} className='btn btn-success'>Change ProfileName</button>
    </div>
    

  )
    
}

export default Profile