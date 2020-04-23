import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class BigTodos extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return this.props.todos.map((todo) => (
      <TodoItem markComplete = {this.props.markComplete} delTodo = {this.props.delTodo} key = {todo.id} todo = {todo}/>

    ));
  }




}

export default BigTodos;
