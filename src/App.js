import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>
            Todos
          </h1>
        </div>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="new todo description..." />
          <div className="input-group-append">
            <button className="btn btn-success" type="button">Add</button>
          </div>
        </div>

        <TodoList />
      </div>
    );
  }
}

export default App;
