const { createStore, combineReducers  } = require('redux')

// define constant
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_CART = 'ADD_CART';
const GET_CART = 'GET_CART';

// state for product
const initialProduct = {
     products: ['pen'],
     numberOfProduct : 1
}

// state for item
const initialCat = {
     carts : ['banana'],
     numberOfCart: 1
}

// action for product
const getProduct = () => {
     return {
          type: GET_PRODUCTS
     }
}

const addProduct = (product) => {
     return {
          type: ADD_PRODUCT,
          payload: product
     }
}

// action for cart items
const getCartItems = () => {
     return {
          type: GET_CART
     }
}

const addCartItems = (cart) => {
     return {
          type: ADD_CART,
          payload: cart
     }
}

// product reducer
const productReducer = (state=initialProduct, action) => {
     switch(action.type){
          case GET_PRODUCTS:
               return {
                    ...state
               }
          case ADD_PRODUCT:
               return {
                    products : [...state.products, action.payload],
                    numberOfProduct: state.numberOfProduct + 1
               }
          default:
               return state
     }
}

// cart reducer
const cartReducer = (state=initialCat, action) => {
     switch (action.type) {
          case GET_CART: 
               return {
                    ...state
               }
          case ADD_CART:
               return {
                    carts : [...state.carts, action.payload],
                    numberOfCart: state.numberOfCart + 1
               }
     
          default:
               return state;
     }
}

const rootReducer = combineReducers({
     productReducer: productReducer,
     cartReducer: cartReducer 
})


// create store
const store = createStore(rootReducer)
store.subscribe( () => {
     console.log(store.getState())
})

store.dispatch(getProduct())
store.dispatch(addProduct("apple"))

store.dispatch(getCartItems())
store.dispatch(addCartItems("lichi"))