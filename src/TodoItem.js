import React, { Component } from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';

class TodoItem extends Component {

getStyle = () => {
  if (this.props.todo.completed) {
    return {
      borderBottom: '1px #ccc dotted',
      padding: '10px',

      textDecoration: 'line-through'
    }
  }
  else {
    return {
        borderBottom: '1px #ccc dotted',
      padding: '10px',

      textDecoration: 'none'
    }

  }

}

  render() {
const {id, text} = this.props.todo;
    return (
      <div className = "coconut" style = {this.getStyle()}>
          <p className = "words">
          <input type = "checkbox" onChange = {this.props.markComplete.bind(this, id)}/>
          {this.props.todo.text}
          <button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle}> X </button>
          </p>
      </div>

    )
  }
  }

const btnStyle = {
  border: 'none',
  padding: '5px 8px',
  cursor: 'pointer',
  background: '#ff0000',
  color: '#fff',

  float: 'right'

}

export default TodoItem;
