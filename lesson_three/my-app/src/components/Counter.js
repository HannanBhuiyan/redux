import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/counterAction'


const Counter = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

     const handleIncrementCounter = () => {
          dispatch(incrementCounter())
     }
     const handelDecrementCounter = () => {
          dispatch(decrementCounter())
     }

     const handelResetCounter = () => {
          dispatch(resetCounter())
     }

     return(
          <>
               <h2>{count}</h2>
               <button onClick={handleIncrementCounter} >Increment</button>
               <button onClick={handelDecrementCounter} >Decrement</button>
               <button onClick={handelResetCounter} >Reset</button>
          </>
     )
}

export default Counter
