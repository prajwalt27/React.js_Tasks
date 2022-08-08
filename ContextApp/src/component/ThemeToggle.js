import React from "react";

import { useContext } from "react";
import { ThemeContext } from "../contexts/themecontxts";

// class Themetoggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     return <button onClick={toggleTheme}>toggle the theme</button>;
//   }
// }

const Themetoggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>toggle the theme</button>;
};

export default Themetoggle;
