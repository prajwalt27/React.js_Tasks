import React,{createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const[books]=useState([
    {title: 'low high ', id:1},
    {title: 'low  ', id:2},
    {title: 'high low ', id:3},
    {title: 'low high medium', id:4}])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;

