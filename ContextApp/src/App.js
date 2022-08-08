import React from "react";
import { Component } from "react";
import BookList from "./component/bookList";
import Navbar from "./component/navbar";
import Themetoggle from "./component/ThemeToggle";
import AuthContextProvider from "./contexts/authcontexts";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/themecontxts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
            <Themetoggle />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
