import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/themecontxts';

//without using hooks 

// class BookList extends Component{
//     static contextType= ThemeContext;
//     render(){
//         console.log(this.context);
//         const {isLightTheme, light, dark}= this.context;
//         const theme= isLightTheme?light:dark;

//         return(
//             <div className='book-list' style={{color:theme.syntax , background:theme.bg}}>
//                <ul>
//                    <li style={{background: theme.ui}}>Wings of fire</li>
//                    <li style={{background: theme.ui}}>Sapiens</li>
//                    <li style={{background: theme.ui}}>Ikigai</li>
//                </ul>
//             </div>
//         )
//     }
// }

//with hooks
//sfc snippet

const BookList = () => {
    const {isLightTheme,light,dark }=useContext(ThemeContext)
    const theme= isLightTheme?light:dark;
    const {books}= useContext(BookContext);
    return(
        <div className='book-list' style={{color:theme.syntax , background:theme.bg}}>
           <ul>
               {books.map(book=>{
                   return (
                       <li key={book.id} style={{background:theme.ui}}>{book.title}</li>
                   )
               })}
           </ul>
        </div>
    )
}
 
export default BookList;
 



