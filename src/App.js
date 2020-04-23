import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {

    return (
      <div class="content">


        <NewTodo></NewTodo>
        <ul class = "list" id = "list">

          <Todo></Todo>

        </ul>

      </div>



    );
  }





}

export default App;
