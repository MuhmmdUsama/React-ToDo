import { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import Todolist from './components/Todolist';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>ToDo</h1>
      </header>
      <Form input={input} todos={todos} setTodos={setTodos} setInput={setInput} />
      <Todolist todos={todos} />
    </div>
  );
}

export default App;
