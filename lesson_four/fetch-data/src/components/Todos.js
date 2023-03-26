import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosData } from "./actions/todosActions";


const Todos = () => {

     const {error, isLoading, todos} = useSelector(state => state)
     
     const dispatch = useDispatch()

     useEffect( () => {
          dispatch(getTodosData())
     },[]) 
     
     return (
          <>
              <div className="container mx-auto">
                    <h1 className="text-3xl mt-5 font-bold pb-5">All todos title here</h1>
                    <div className="max-w-lg mx-auto">
                         <div className="list">
                              {error && <h3>{error.message}</h3>}
                              {isLoading && <h3>Loding...</h3>}
                              <ul>
                                   {todos && todos.map( (todo , index) => {
                                        return <li className="text-white text-left bg-indigo-500 mb-3 p-3" key={index}>{todo.title}</li>
                                   })} 
                              </ul>
                         </div> 
                    </div> 
              </div>
          </>
     )

}

export default Todos