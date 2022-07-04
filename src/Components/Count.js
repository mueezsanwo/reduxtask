import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from './Services/actions/counterActions';
const Count = () => {
    const counts = useSelector(state => state.count);
    // console.log(counts);
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(incrementCounter())
    };

    const handleDecrement = () => {
      dispatch(decrementCounter())
    };

    const handleReset = () => {
      dispatch(resetCounter());
    }
  return (
    <div>
      <h3> Counter App</h3>
      <h3 id='countervalue'>Count {counts}</h3>
      <button id='increasebutton' onClick={handleIncrement}>Increment </button>
      <button id='reset-button' onClick={handleReset}>Reset</button>
      <button id='decreasebutton' onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Count

// state-count : 0;
// action - increment - decrement , reset 
// reducers - increment -> Count -> count + 1 ;
// reducers => decrement => Count => count - 1 ;
// reducers => reset => count => 0;
// store => to create store
// providing store/use the store

