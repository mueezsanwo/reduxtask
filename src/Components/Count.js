import React from 'react'

const Count = () => {
    
    const handleIncrement = () => {
        console.log("button Clicked")
    }
  return (
    <div>
      <h3>Developer Counter App</h3>
      <h3>Count</h3>
      <button onClick={handleIncrement}>Increment </button>
    </div>
  )
}

export default Count

// state-count : 0;
// action - increment - decrement , reset 
// reducers - increment -> Count -> count + 1 ;
// reducers => decrement => Count => count - 1 ;
// reducers => reset => count => 0;
// store => 

