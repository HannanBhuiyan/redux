const { createStore , applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const axios = require('axios');


// define constant
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const API_URL = "https://jsonplaceholder.typicode.com/todos/";


// create initial state
const todosInitialState = {
     todos: [],
     isLooding: false,
     error:null 
}

// create action for todos
const getTodoRequest = () => {
     return {
          type: GET_TODOS_REQUEST
     }
}

const getTodoSuccess = (todos) => {
     return {
          type: GET_TODOS_SUCCESS,
          payload: todos
     }
}

const getTodoFailed = (error) => {
     return {
          type: GET_TODOS_FAILED,
          payload: error
     }
}

// create reducer for todos
const todosReducer = (state=todosInitialState, action) => {
     switch (action.type) {
          case GET_TODOS_REQUEST:
                return {
                    ...state,
                    isLooding: true
                }
          case GET_TODOS_SUCCESS:
               return {
                    ...state,
                    isLooding: false,
                    todos: action.payload
                   
               }
          case GET_TODOS_FAILED:
               return {
                    ...state,
                    isLooding: false,
                    error: action.payload
               }
          default:
               return state;
     }
}

// api call and data fetching

const fetchData = () => {
     return (dispatch) => {
          dispatch(getTodoRequest())
          axios.get(API_URL)
          .then( (res) => {
               let todos = res.data;
               let titles = todos.map( res => res.title) 
               dispatch(getTodoSuccess(titles))
          })
          .catch( (error) => {
               let errorMsg = (error.message);
               dispatch(getTodoFailed(errorMsg))
          })
     }
}


const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe( () => console.log(store.getState()))

store.dispatch(fetchData())