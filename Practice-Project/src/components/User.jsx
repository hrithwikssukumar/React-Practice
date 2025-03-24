import React from 'react'

function User({name,age,address,phone,email}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{address}</h2>
      <h2>{phone}</h2>
      <h2>{email}</h2>

    </div>
  )
}

export default User
