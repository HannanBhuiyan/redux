import React from "react";
import { useSelector } from "react-redux";


const BookView = () => {

     const book = useSelector(state => state.bookReducer.books)

 
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
                                        return (
                                             <tr className="bg-gray-50 border" >
                                                  <td className="p-4">{value.id}</td>
                                                  <td className="p-4">{value.book_name}</td>
                                                  <td className="p-4">{value.author}</td>
                                                  <td className="p-4">
                                                       <a href="" className="bg-sky-900 text-white p-2 rounded mx-2 font-semibold" >Edit</a>
                                                       <a href="" className="bg-cyan-500 rounded p-2 mr-2 text-white font-semibold">Show</a>
                                                       <a href="" className="bg-red-700 rounded text-white p-2 font-semibold" >Delete</a>
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