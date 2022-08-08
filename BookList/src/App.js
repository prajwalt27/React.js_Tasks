import React, { Component } from "react";
import BookList from "./components/Booklist";
import Navbar from "./components/Navbar";
import NewBookForm from "./components/NewBookform";
import BookContextProvider from "./contexts/bookcontexts";

class App extends Component {
  render() {
    return (
        <div className="App">
          <BookContextProvider>
            <Navbar/>
            <BookList/>
            <NewBookForm/>
          </BookContextProvider>
        </div>
     );
  }
}

export default App;
