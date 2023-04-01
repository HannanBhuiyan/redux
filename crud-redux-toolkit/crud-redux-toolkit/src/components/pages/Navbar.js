import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {

     return (
          <>
              
              <div className="bg-indigo-500 text-white">
                    <ul className="flex items-center justify-center">
                         <li className="pr-3">
                              <NavLink className="p-3 block" to="/" >Home</NavLink> 
                         </li>
                         <li>
                              <NavLink to="/create" >Create</NavLink> 
                         </li>
                    </ul>
              </div>
          </>
     )

}

export default Navbar;