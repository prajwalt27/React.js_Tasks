import  React, { Component } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/contact";
import Post from "./components/post";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          
          <Routes>
         
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="posts/:post.id"  element={<Post/>}/>
          
          </Routes>
         
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
