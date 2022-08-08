import React, { Component } from "react";
import Todos from './todos';
import Addtodo from "./addtodo";


class App extends Component{
  state={
    todos:[
         {id:1,content:'Read a book'},
         {id:2,content:'buy a car'},   
    ]
  }
  
  deleteTodo= (id)=>{ 
    const todos= this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
   
  addTodo=(todo)=>{
        todo.id=Math.random();
        let todos = [...this.state.todos,todo];
        this.setState({
          todos
        })
  }

  render(){
    return (
      <div className="todo-App container">
         <h1 className="center blue-text">Todo's</h1>
         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} value={this.state.content}/>
         <Addtodo addTodo={this.addTodo}/>
      </div>
    );
  }

}

export default App;