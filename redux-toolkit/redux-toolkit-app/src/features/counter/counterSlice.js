import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
     name: "counter",
     initialState: {
          count: 0
     },
     reducers: {
          increment: (state) => {
               state.count = state.count + 1;
          },

          decrement: (state) => {
               state.count = state.count - 1;
          },

          reset: (state) => {
               state.count = 0
          },
          incrementByAmount: (state, action) => {
               state.count = action.payload
          },
          incrementByFive: (state) => {
               state.count += 5;
          }
     }
})

export const { 
     increment, 
     decrement, 
     reset, 
     incrementByAmount, 
     incrementByFive 
} = counterSlice.actions

export default counterSlice.reducer;