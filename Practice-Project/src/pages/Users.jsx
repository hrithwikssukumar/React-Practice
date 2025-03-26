import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

const Users = () => {
  const {username} = useParams()
  return (
    <div>
       <Navbar/>
      <h1>User: {username}</h1>
    </div>
  )
}

export default Users
