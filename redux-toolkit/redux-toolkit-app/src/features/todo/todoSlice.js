import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
     let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
     return res.data;
})

export const todoSlice = createSlice({
     name: 'todos',
     initialState: {
          todo: [],
          isLoading: false,
          error: null
     },

     extraReducers: (builder) => {
          builder.addCase(fetchTodos.pending, (state) => {
               state.isLoading = true;
          })
          builder.addCase(fetchTodos.fulfilled, (state, action) => {
               state.isLoading = false;
               state.todo = action.payload;
               state.error = null
          })
          builder.addCase(fetchTodos.rejected, (state, action) => {
               state.isLoading = false;
               state.error = action.error.message;
               state.todo = []
          })
     }
})


export const {todoRequest, todoFailed, todoSuccess} = todoSlice.actions

export default todoSlice.reducer;