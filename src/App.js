import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import BigTodos from './BigTodos';
import Header from './Header';
import AddTodo from './AddTodo';

//used React Crash Course Tutorial Video to help explain some concepts of coding JSX Todo in  React: https://www.youtube.com/watch?v=sBws8MSXN7A
//This video helped me learn react and the components that go into developing a ToDo app in react, some of the CSS styling and HTML structure was also used from this video tutorial


//My Project sorts based on date created - puts most recent todos first after refreshing
class App extends Component {
  state = {
    todos: [

    ],
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: Math.random() * 10000000000000000000,
    //   title,
    //   completed: false
    // }
    fetch("https://cse204.work/todos", {
      method: 'post',
      headers: new Headers({"Content-type": "application/json", "x-api-key": "cd679f-1a5c76-c58d52-74735c-f21eac"}),
      body: JSON.stringify({
        "text": title
      })
    }).then(response => response.json()).then(big_data => {
      this.setState({todos: [...this.state.todos, big_data]})
      })
  }


delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  fetch("https://cse204.work/todos/" + id, {
  method: 'delete',
  headers: new Headers({"x-api-key": "cd679f-1a5c76-c58d52-74735c-f21eac"})
})
}


markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
      fetch("https://cse204.work/todos/" + id, {
          method: 'put',
          headers: new Headers({"x-api-key": "cd679f-1a5c76-c58d52-74735c-f21eac", "Content-type": "application/json"}),
          body: JSON.stringify({
            completed: todo.completed
          })
        })
    }
    return todo;
  })});
}

  render() {
    return (
      <div className="content">
         <div className = "container">
        <Header/>
        <AddTodo addTodo = {this.addTodo}/>
        <BigTodos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://cse204.work/todos", {
      method: 'get',
      headers: new Headers({"x-api-key": "cd679f-1a5c76-c58d52-74735c-f21eac"})
    }).then(coco => {
      return coco.json();
    }).then(big_data => {
      this.setState({todos : big_data})
    })
  }
}



export default App;
