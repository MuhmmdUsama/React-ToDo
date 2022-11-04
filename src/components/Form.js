const Form = ({
  // eslint-disable-next-line
  setInput, todos, setTodos, input,
}) => {
  const inputHandler = (e) => {
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
        <i className="fas fa-plus-square" />
      </button>
    </form>
  );
};

export default Form;
