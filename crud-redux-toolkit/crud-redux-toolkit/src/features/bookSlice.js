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
          showBooks: (state) => state
     }
})


export const { showBooks } = bookSlice.actions

export default bookSlice.reducer