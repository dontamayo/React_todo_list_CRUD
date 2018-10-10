import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      newTodo:'',
      todos: [
        {id: 1, name: 'eat foods and exercise'},
        {id: 2, name: 'buy some clothes'},
        {id: 3, name: 'write some codes'},
        {id: 4, name: 'get ready for some interviews'},
        {id: 5, name: 'be positive in life'}
    ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(event){
  this.setState({
    newTodo: event.target.value
  });
  //console.log(event.target.name, event.target.value)
}

addTodo(){
  const newTodo = {
    name: this.state.newTodo,
    id: this.state.todos[this.state.todos.length -1].id + 1
  };

const todos = this.state.todos;
  todos.push(newTodo);

  this.setState({
    todos: todos,
    newTodo: ''
  });

}


  render() {
    console.log(this.state.newTodo)

    return (
      <div className="App">

        <div className="container">

          <input
            type="text"
            name="todo"
            className="m-4 form-control"
            placeholder="Add a new to TODO"
            onChange={this.handleChange}
            value={this.state.newTodo}
            />
          <button
            onClick={this.addTodo}
            className="btn-info mb-3 form-control"
            >
            ADD todo
          </button>



          <ul className="list-group">
              {this.state.todos.map((item)=>{
                return <li key={item.id} className="list-group-item">{item.name}</li>
              })
              }

          </ul>

        </div>
      </div>
    );
  }
}

export default App;
