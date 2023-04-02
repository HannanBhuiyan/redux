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
          },
          updateBook:(state, action) => {
              const {id, book_name, author} = action.payload

              const existsBook = state.books.filter( (book) => book.id === id)

              if(existsBook) {
                    existsBook[0].book_name = book_name;
                    existsBook[0].author = author;
              }


          }
     }
})

 

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions

export default bookSlice.reducer