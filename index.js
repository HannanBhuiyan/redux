
const { createStore } = require('redux')

// define const
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// create state
const initialCounterState = {
     count: 0
}


// create action
const createIncrementAction = () => {
     return {
          type: INCREMENT
     }    
}

const createDecrementAction = () => {
     return {
          type : DECREMENT
     }
}

// create reducer


const counterReducer = (state=initialCounterState, action) => {
     switch(action.type){
          case INCREMENT:
               return {
                    ...state,
                    count: state.count + 1
               }
          case DECREMENT:
               return {
                    ...state,
                    count: state.count - 1
               }
          default:
               return state;
     }
}

 
 

// create store

let store = createStore(counterReducer)

store.subscribe( () => console.log(store.getState()))

store.dispatch(createIncrementAction())
store.dispatch(createIncrementAction())
store.dispatch(createIncrementAction())
store.dispatch(createIncrementAction())
store.dispatch(createIncrementAction())

store.dispatch(createDecrementAction())