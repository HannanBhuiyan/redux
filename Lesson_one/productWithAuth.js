const {createStore , applyMiddleware} = require('redux')
const {logger} = require('redux-logger')

// define constant
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';


// initial state
const productInitialState = {
     products : ['apple'],
     numberOfProducts : 1
}


// create action for products
const getProductAction = () => {
     return {
          type: GET_PRODUCT
     }
}

const  addProductAction = (product) => {
     return {
          type: ADD_PRODUCT,
          payload: product
     }
}


// create reducer

const productReducer = (state=productInitialState, action) => {
     switch (action.type) {
          case GET_PRODUCT:
               return {
                   ...state 
               }
     
          case ADD_PRODUCT:
               return {
                    products: [...state.products, action.payload],
                    numberOfProducts: state.numberOfProducts + 1
               }
          default:
               return state;
     }
}


const store  = createStore(productReducer, applyMiddleware(logger))

store.subscribe( () => console.log(store.getState()))


store.dispatch(getProductAction())
store.dispatch(addProductAction("banana"))