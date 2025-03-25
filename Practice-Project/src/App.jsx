import React, { useEffect, useState } from 'react'

const App = () => {
    const [num1,setNum1] = useState(10)

    useEffect(()=>{
        setNum1(200)},
        console.log("from useEffect"),
        [])

    console.log("num1",num1)
    

  return (
    <div>
        <h1>{num1}</h1>
        <button onClick={()=> setNum1((value) => value+1)}>Add</button>
      
    </div>
  )
}

export default App
