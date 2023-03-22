// defined contant

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// State init
const initialCounterState = {
     count: 0
}

const initialUserState = () => {
     user: [{userName: "Jhon"}]
}

// action
const incrementCounter = () => {
     return {
          type: INCREMENT
     }
}

const decrementCounter = () => {
     return {
          type: DECREMENT
     }
}


const addUser = () => {
     return {
          type: ADD_USER,
          payload: {userName: "jhon doe"}
     }
}
