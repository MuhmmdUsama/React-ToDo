import Task from './Task';

const Todolist = ({ todos }) => {
  //   console.log('todos', todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Task key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
