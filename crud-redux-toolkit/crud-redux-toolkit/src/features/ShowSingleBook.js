import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ShowSingleBook = () => {


 const location = useLocation()
 
 const {book_name, author} = location.state;
  return (
    < >
     <div className="w-2/4 m-auto mt-4">
          <form>
               <label className="w-full text-lg font-semibold block mb-1">Book Name</label>
               <input type="text" disabled className="border border-spacing-3 w-full p-3 outline-0" placeholder="Enter book name" value={book_name} />

               <label className="mt-5 w-full text-lg font-semibold block mb-1">Author Name</label>
               <input type="text" disabled className="border border-spacing-3 w-full p-3 outline-0" placeholder="Enter author name" value={author}/>
               <Link to="/" className="rounded bg-indigo-500 text-white px-6 py-3 font-semibold  mt-4 inline-block ">Back Home</Link>
          </form> 
     </div>
    </>
  )
}

export default ShowSingleBook


