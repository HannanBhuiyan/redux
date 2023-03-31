import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementByFive, reset } from './counterSlice';

const CounterView = () => {
     const count = useSelector(state =>  state.counter.count)

     const dispatch = useDispatch()

     return (
          <>
          <h2>Counter : {count}</h2>
          <button onClick={ () => { dispatch(increment()) }}>Increment</button>
          <button onClick={ () => { dispatch(decrement()) }}>Decrement</button>
          <button onClick={ () => { dispatch(reset())} }>Reset</button>
          <button onClick={ () => { dispatch(incrementByAmount(5)) } } >IncrementByAmount</button>
          <button onClick={ () => { dispatch(incrementByFive()) } } >IncrementByFive</button>
          </>
     )
}

export default CounterView