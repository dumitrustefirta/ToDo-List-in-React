import React, { Component } from 'react';
import './App.css';
import { ToDoList } from './ToDoComponents/TodoApp';
import { Button } from './UIElements/button';
import { StyleList } from './UIElements/ToDoListItem'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      todos: [],
      date: new Date(),
    }
  }

  handleChangeInput = (event) => {
    const value = event.target.value;
    this.setState({ input: value })
  }

  handleAddItem = () => {
    const newItem = {
      id: new Date(),
      text: this.state.input,
      status: false
    }
    this.setState({
      input: '',
      todos: this.state.todos.concat(newItem) 
    })
  }

  handleCheckStatus = (item) => {
    console.log(item.status)

    const newItems = this.state.todos.find(todos => {
      return todos.status = !item.status;
    });

    this.setState({
      todos: [newItems]
    })
    console.log(item.status)
  }


  handleRemoveItem = (item) => {
    const newTodos = this.state.todos.filter(todos => {
      return todos !== item;
    })

    this.setState({
      todos: [...newTodos]
    })
  }

  render() {
    return (
      <div className="container">
        <div className="list-header">
          <h1>To Do list</h1>
          <span id="date">{this.state.date.toLocaleDateString()}</span>
        </div>
        <div className="todo-component">
          <div className="todo-component__control">
            <div className="todo-component__input-group">
              <input onChange={this.handleChangeInput} value={this.state.input} type="text" id="todo-input" placeholder=" Add to-do" />
              {this.state.input.length ? (
                <span id="input-count">Characters counter: {this.state.input.length}</span>
              ) : null
              }
              <span id="total"></span>
              <span id="total-done"></span>
            </div>
            <Button onClick={this.handleAddItem}>Add</Button>
          </div>
          <ToDoList
            todos={this.state.todos}
            handleCheckStatus={this.handleCheckStatus}
            handleRemoveItem={this.handleRemoveItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
