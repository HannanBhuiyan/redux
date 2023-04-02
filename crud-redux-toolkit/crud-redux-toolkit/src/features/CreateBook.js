import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./bookSlice";
import { useNavigate } from "react-router-dom";


const CreateBook = () => {

     const [bookName, setBookName] = useState("");
     const [author, setAuthor] = useState("");

     const numberOfBook = useSelector(state => state.bookReducer.books.length)
     const dispatch = useDispatch()
     const navigate = useNavigate()

     const createBookHandler = (e) => {
          e.preventDefault();

          const book = {
               id: numberOfBook+1,
               book_name: bookName,
               author: author
          }
          dispatch(addBook(book))
          navigate('/')
 
     }


     return (
          <>
                    <div className="w-2/4 m-auto mt-4">
                         <form onSubmit={createBookHandler} >
                              <label className="w-full text-lg font-semibold block mb-1">Book Name</label>
                              <input type="text" className="border border-spacing-3 w-full p-3 outline-0" placeholder="Enter book name" value={bookName} onChange={ (e) => setBookName (e.target.value )} />

                              <label className="mt-5 w-full text-lg font-semibold block mb-1">Author Name</label>
                              <input type="text" className="border border-spacing-3 w-full p-3 outline-0" placeholder="Enter author name" value={author} onChange={ (e) => setAuthor (e.target.value )} />

                              <button className="rounded bg-indigo-500 text-white px-6 py-3 font-semibold  mt-4 ">Add Book</button>
                         </form> 
                    </div>
               
               
          </>
     )

}

export default CreateBook;