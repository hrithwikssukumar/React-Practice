

import React,{useState} from 'react'

const App = () => {

  const [num,setNum] = useState(18);


  const handleadd = () => {
    
    setNum((currentvalue)=>{
      return currentvalue + 1 ;
    });
  
  }

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={handleadd}>Add</button>

    </div>
    
    
  
  )
}

export default App
