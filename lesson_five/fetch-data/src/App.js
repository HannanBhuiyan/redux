import logo from './logo.svg';
import './App.css';
import { todosGetData } from '../src/components/action/todosCounterActions'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const { error, isLoading, todos} = useSelector(state => state)

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(todosGetData())
  },[])

  console.log(todos)

  return (
 
    <div className="App">
       <ul>
        {todos.map( (value, index) => {
          return(
            <li key={index}>{value.title}</li>
          )
        })}
     
       </ul>
    </div>
  );
}

export default App;
