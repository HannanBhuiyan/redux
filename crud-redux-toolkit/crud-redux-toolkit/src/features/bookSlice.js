import { createSlice } from "@reduxjs/toolkit";


const initialBooks = {
     books: [
          {    id: 1,
               book_name: "Javascript",
               author: "Hannan",
          },
          {    id: 2,
               book_name: "React",
               author: "Hannan",
          },
          {    id: 3,
               book_name: "Python",
               author: "Hannan",
          },
     ]
}


export const bookSlice = createSlice({
     name: "book",
     initialState: initialBooks,
     reducers: {
          showBooks: (state) => state,
          addBook: (state, action) => {
               state.books.push(action.payload)
          },
          deleteBook: (state, action) => {
               let id = action.payload;
               state.books = state.books.filter(book => book.id !== id)
          }
     }
})

 

export const { showBooks, addBook, deleteBook } = bookSlice.actions

export default bookSlice.reducer