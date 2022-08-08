import React, { useContext } from "react";

import { AuthContext } from "../contexts/authcontexts";
import { ThemeContext } from "../contexts/themecontxts";

//without hooks

// class Navbar extends Component {
//1st way
// static contextType= ThemeContext;
// render() {
//access of data
// console.log(this.context);
//destructuring

//     return (
//       <AuthContext>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>Context App</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? "Loged In" : "Loged Out"}
//                   </div>
//                   <ul>
//                     <li>Home </li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext>
//     );
//   }
// }

//with Hooks

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Loged In" : "Loged Out"}
      </div>
      <ul>
        <li>Home </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
