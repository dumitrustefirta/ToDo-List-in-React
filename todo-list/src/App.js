import React, { Component } from 'react';
import './App.css';
import { ToDoList } from './ToDoComponents/TodoApp';
import { Button } from './UIElements/button';
import { FiRefreshCw } from "react-icons/fi";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      date: new Date(),
    }
  }

  handleChangeInput = (event) => {
    const value = event.target.value;
    this.setState({ input: value })
  }

  handleAddItem = () => {
    if (this.state.input.length === 0) {
      return alert('No input!');
    }
    const newItem = {
      id: new Date(),
      text: this.state.input,
      status: false
    }
    this.setState({
      input: '',
      todos: this.state.todos.concat(newItem)
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
    )
  }

  handleCheckStatus = (item) => {

    const newItems = this.state.todos.map(todo => {
      if (todo.id === item.id) {
        todo.status = !item.status
      }
      return todo
    });

    this.setState({
      todos: newItems
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  handleRemoveItem = (item) => {
    const newTodos = this.state.todos.filter(todos => {
      return todos !== item;
    })

    this.setState({
      todos: [...newTodos]
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  handleClearAll = () => {
    this.setState({
      todos: []
    }, () => {
      localStorage.clear()
    })
  }

  todoListStats = () => {
    return this.state.todos.filter(item => item.status).length;
  }

  handleResetCheckBox = () => {
    const resetItems = this.state.todos.map(item => {
      if (item.status === true) {
        item.status = false;
      }
      return item
    })
    this.setState({
      todos: resetItems
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  render() {
    return (
      <div className="container">
        <div className="list-header">
          <h1>To Do list</h1>
          <div className='clear'>
            <FiRefreshCw className="clear-all" onClick={this.handleClearAll} />
          </div>
          <span id="date">{this.state.date.toLocaleDateString()}</span>
        </div>
        <div className="todo-component">
          <div className="todo-component__control">
            <div className="todo-component__input-group">
              <input onChange={this.handleChangeInput} value={this.state.input} type="text" id="todo-input" placeholder=" Add to-do" />
              {/* {this.state.input.length ? (
                <span id="input-count">Characters counter: {this.state.input.length}</span>
              ) : null
              }
              {this.state.todos.length ? (
                <span id="total">Total items: {this.state.todos.length}</span>
              ) : null
              } */}
              {this.todoListStats() || this.state.todos.length ? (
                <span id="total-done">Done Todos: {this.todoListStats()} / {this.state.todos.length}
                  <button className='uncheck-btn' onClick={this.handleResetCheckBox}>Undone</button>
                </span>
              ) : null
              }
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
