import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./todoSlice";


const TodoView = () => {

     const {error, isLoading, todo } = useSelector(state => state.todo)

     const dispatch = useDispatch();

     useEffect( () => {
          dispatch(fetchTodos())
     },[])

     console.log(todo)

     return(
          <>
              {error && <h2> error </h2>}
              {isLoading && <h2> Loading ... </h2>} 

              <ul>

                    {todo && todo.map( (value, index) => { 
                         return(
                              <li key={index}>{value.title}</li>
                         )
                    })}
              </ul>
          </>
     )

}

export default TodoView