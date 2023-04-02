import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "./bookSlice";
import {Link } from 'react-router-dom';

const BookView = () => {

     const book = useSelector(state => state.bookReducer.books)

     const dispatch = useDispatch()

     const handelDelete = (id) => {
          dispatch(deleteBook(id))
     }

 
     return (
          <>
               <div className="book_Section">
                    <div className="w-2/4 mx-auto mt-4"> 
                         <table className="w-full text-center">
                              <thead className="bg-gray-500 text-white text-opacity-2">
                              <tr>
                                   <th>ID</th>
                                   <th>Name</th>
                                   <th>Author</th>
                                   <th>Action</th>
                              </tr>
                              </thead>
                              <tbody>
                                   {book && book.map( (value, index ) => {
                                        const {id, book_name, author} = value
                                        return (
                                             <tr key={index} className="bg-gray-50 border" >
                                                  <td className="p-4">{id}</td>
                                                  <td className="p-4">{book_name}</td>
                                                  <td className="p-4">{author}</td>
                                                  <td className="p-4">
                                                       <Link to="/edit-book" state={{ id, book_name, author }} className="bg-sky-900 text-white p-2 rounded mx-2 font-semibold" >Edit</Link>
                                                       <a href="" className="bg-cyan-500 rounded p-2 mr-2 text-white font-semibold">Show</a>
                                                       <button onClick={ () => handelDelete(id)} className="bg-red-700 rounded text-white p-2 font-semibold" >Delete</button>
                                                  </td>
                                             </tr>
                                        )
                                   })}
                         
                              </tbody>
                         </table> 
                    </div>
               </div>
          </>
     )

}

export default BookView;