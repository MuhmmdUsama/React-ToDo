import { useState } from 'react';
import './App.css';

import Form from './components/Form.js';
import Todolist from './components/Todolist';

function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <header>
        <h1>ToDo {input}</h1>
      </header>
      <Form setInput={setInput} />
      <Todolist />
    </div>
  );
}

export default App;
