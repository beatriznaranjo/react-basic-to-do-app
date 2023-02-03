import React from 'react';
import logo from './logo.svg';
import ToDoItem from './components/ToDoItem';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, text: 'Hacer tarea'},
        {id: 2, text: 'Enviar emails'},
        {id: 3, text: 'Terminar tutorial'}
      ],
      newTodo: 'Ingrese tarea',
    };
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h2>To Do App</h2>
        <h3>setState, handleChange, handleSubmit</h3>
        <ul>
          {this.state.todos.map((todo) => {
            return (
            <ToDoItem key={todo.id} text={todo.text}/>
            );
          })}
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.newTodo} 
            onChange={this.handleChange}
            placeholder="insert new To Do"
          />
          <button type='submit'>
            Add To Do
          </button>
        </form>
      </header>
    </div>
  );
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState( prevState => ({
      todos: [...prevState.todos, {id: Date.now(), text: prevState.newTodo}],
      newTodo: '',
    })); 
  }
}

export default App;
