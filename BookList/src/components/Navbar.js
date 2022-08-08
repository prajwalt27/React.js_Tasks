import React,{useContext} from 'react';
import {BookContext} from '../contexts/bookcontexts';

const Navbar = () => {
    const {books} = useContext(BookContext)
    return ( 
        <div className='navbar'>
            <h1>Og Reading List</h1>
            <p>Currently u have {books.length} books to get through...</p>
        </div>
     );
}
 
export default Navbar;