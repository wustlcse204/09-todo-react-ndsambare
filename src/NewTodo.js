import React, { Component } from 'react';
import './NewTodo.css';


class NewTodo extends Component {




  render() {

    return (
      <div class="addItem">
        <form class="addAToDo" action="index.html" method="post">

           <input type="text" id="item" placeholder="What do I need to do today?" name="input" value=""></input>
           <button class="add__icon icon--add fas fa-plus-circle" type="button" name="button" aria-hidden="true"></button>


        </form>

      </div>

    );
  }
}

export default NewTodo;
