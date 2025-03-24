

import User from './components/User'
import React from 'react'

function App() {
  const userData = {
    name : "Hrithwik",
    age : 28,
    address : "Bengaluru",
    email : "hrithwik@gmail.com",
    phone: 8281278872
  };

  return (
    <div>
      <User
      // name = {userData.name}
      // age   = {userData.age}
      // address = {userData.address}
      // phone   = {userData.phone}
      // email   = {userData.email}
      {...userData}
      />
    </div>
  );
}

export default App;


