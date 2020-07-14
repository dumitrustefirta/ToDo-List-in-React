import React, { Component } from 'react';
import './App.css';
import ToDo from './TodoApp';

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

  removeItem(item) {
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
                      <input onChange={this.handleChangeInput} value={this.state.input}  type="text" id="todo-input" placeholder=" Add to-do" />
                      {this.state.input.length ? (
                        <span id="input-count">Characters counter: {this.state.input.length}</span>
                        ) : null
                      }
                      <span id="total"></span>
                      <span id="total-done"></span>
                  </div>
                  <button onClick={this.handleAddItem} id="todo-add">Add</button>
              </div>
              {/* <ToDo /> */}
              <ul className="todolist" id="todolist">
                {this.state.todos.length ? (
                  this.state.todos.map((item) => {
                    return (<li className='todolist__item'>
                    <input type="checkbox" />
                    <span className={item.status ? 'complete.todolist__item span' : ''}>{item.text}</span>
                    <button onClick={(e) => this.removeItem(item)}>X</button> 
                    </li>)
                  })
                ) : null}
              </ul>
          </div>
      </div>
    );
  }
}

export default App;
