const Form = ({ setInput, todos, setTodos, input }) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.round(Math.random() * 1000) },
    ]);
    setInput('');
  };

  return (
    <form>
      <input
        value={input}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
