import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./bookSlice";


const EditBook = () => {

     const location = useLocation()

     const dispatch = useDispatch()
     const navigator = useNavigate()
    

     const [id, setId] = useState(location.state.id)
     const [bookName, setBookName] = useState(location.state.book_name)
     const [author, setAuthName] = useState(location.state.author)
     

     const updateSubmitHandler = (e) => {
          e.preventDefault();

          const book = {
               id, 
               book_name : bookName,
               author
          }

          dispatch(updateBook(book))
          navigator('/', {replace: true})

     }
     
     return (
          <>
                <div className="w-2/4 m-auto mt-4">
                         <form onSubmit={updateSubmitHandler} >
                              <label className="w-full text-lg font-semibold block mb-1">Book Name</label>
                              <input type="text" className="border border-spacing-3 w-full p-3 outline-0" placeholder="Enter book name" value={bookName} onChange={ (e) => setBookName (e.target.value )} />

                              <label className="mt-5 w-full text-lg font-semibold block mb-1">Author Name</label>
                              <input type="text" className="border border-spacing-3 w-full p-3 outline-0" placeholder="Enter author name" value={author} onChange={ (e) => setAuthName (e.target.value )} />
                              <button className="rounded bg-indigo-500 text-white px-6 py-3 font-semibold  mt-4 ">Update Book</button>
                         </form> 
                    </div>
          </>
     )

}

export default EditBook;