import React, { Component } from 'react';
import ItemList from './ItemList';
import Box from './Box';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['apple','grapes','mango'],
      item: ''
    };
  }

  onButtonClick = () => {
    let { todos, item } = this.state;
    todos = todos.concat({ item });
    this.setState({ todos: todos, item: '' });
  }

  onNewItem = (event) => {
    this.setState({item: event.target.value});
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Box onButtonClick={this.onButtonClick} onNewItem={this.onNewItem} />
        <ItemList elem={this.state.todos}/>
      </div>
    );
  }
}

export default App;
