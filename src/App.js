import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import BigTodos from './BigTodos';
import Header from './Header';
import AddTodo from './AddTodo';

//used React Crash Course Tutorial Video to help explain some concepts of coding JSX Todo in  React: https://www.youtube.com/watch?v=sBws8MSXN7A
//This video helped me learn react and the components that go into developing a ToDo app in react, some of the CSS styling and HTML structure was also used from this video tutorial

class App extends Component {
  state = {
    todos: [

    ]
  }

  addTodo = (title) => {
    const newTodo = {
      id: Math.random() * 10000000000000000000,
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }


delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}



markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}


  render() {

    return (
      <div class="content">
         <div className = "container">

        <Header/>
        <AddTodo addTodo = {this.addTodo}/>
        <BigTodos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        </div>

      </div>



    );
  }


}

export default App;
