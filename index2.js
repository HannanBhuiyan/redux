const { createStore } = require('redux')


// define constant

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const RESET = 'RESET'
const ADD_USER = 'ADD_USER';

 
// create state
const initialCounterState = {
     users: ['jhon'],
     count: 1
}

// create action

const adduUser = (user) => {
     return {
          type: ADD_USER,
          payload: user
     }
}


const createIncrementAction = () => {
    return {
          type: INCREMENT
    }
}

const createDecrementAction = () => {
     return {
          type: DECREMENT
     }
}

const incrementCounterByValue = (value) => {
     return {
          type: INCREMENT_BY_VALUE,
          payload: value
     }
}


const resetCounterAction = () => {
     return {
          type: RESET
     }
}

// create reducer

const createReducer = (state=initialCounterState, action) => {
     switch (action.type) {
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
          case INCREMENT_BY_VALUE :
               return {
                    ...state,
                    count: state.count + action.payload
               }
          case RESET:
               return {
                    ...state,
                    count: 0
               }
          case ADD_USER:
               return {
                    users : [...state.users, action.payload],
                    count: state.count + 1
               }
          default:
               return state;
     }
}


const store = createStore(createReducer)

store.subscribe( () => console.log(store.getState()))

// store.dispatch(createIncrementAction())
// store.dispatch(createIncrementAction())
// store.dispatch(createIncrementAction())
// store.dispatch(createDecrementAction())
// store.dispatch(incrementCounterByValue(4))
// store.dispatch(resetCounterAction())

store.dispatch(adduUser("smit"))

