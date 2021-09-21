import React from "react";
import "./App.css";
import { Button } from '@material-ui/core';

function Todo({ todo, index, completeTodo, removeTodo,  }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
        <div>
      {todo.text}
      </div> 
      <div className="Button">
         <Button onClick={() => completeTodo(index)} variant="contained" color="primary">Done</Button>
         <Button onClick={() => removeTodo(index)} variant="contained" color="primary">X</Button>
       </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
    <input 
      placeholder="Write a todo..."
      type="text"
      className="todo-input"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
     <button className="todo-button">Add-todo</button>
  </form>
  );

}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    }
   ]);

  const addTodo = text => {
    const newTodos = [{ text },...todos];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
 
    const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    
  };
  
  return (
    <div className="todo-app">
        <h1 className="header">TO-DO-LIST</h1>
      <div className="todo-list">
      <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
