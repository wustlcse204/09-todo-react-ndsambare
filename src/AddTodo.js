import React, { Component } from 'react';


class AddTodo extends Component {

constructor(props) {
  super(props);
  this.state = {
    title: ' '
  }
}
onChange = (e) => this.setState({[e.target.name]: e.target.value});
onSubmit = (e) => {
  e.preventDefault();
  this.props.addTodo(this.state.title);
  this.setState({title: ''})
}
  render() {
    return (
    <form onSubmit = {this.onSubmit} style = {{display: "flex"}}>
    <input onChange = {this.onChange} value = {this.state.title} style = {{ flex: '10', padding: '5px'}} type = "text" name = "title" placeholder = "Add that Todo baby..."/>
    <input type = "submit" className = "btn" style = {{flex: "1"}}/>
    </form>
    )
  }

}

export default AddTodo;
