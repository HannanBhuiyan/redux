
import { TODOS_REQUEST, TODOS_SUCCESS, TODOS_FAILED } from '../constants/todosConstants'
 
const todosInitialState = {
     todos: [],
     error: null,
     isLooding: false,
}


export const todosReducer = (state=todosInitialState, action) => {
     switch (action.type) {
          case TODOS_REQUEST:
               return {
                    ...state,
                    isLooding: true,
               }
          case TODOS_SUCCESS:
               return {
                    ...state,
                    todos: action.payload
               }
          case TODOS_FAILED:
               return {
                    ...state,
                    error: action.payload
               }
          default:
               return state;
     }
}


