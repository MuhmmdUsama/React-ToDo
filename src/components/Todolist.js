/* eslint-disable */
import Task from './Task';
// eslint-disable-next-line
const Todolist = ({ todos, setTodos }) => (
  //   console.log('todos', todos);
  <div className="todo-container">
    <ul className="todo-list">
      {todos.map((todo) => (
        <Task
          setTodos={setTodos}
          todos={todos}
          key={todo.id}
          todo={todo}
          text={todo.text}
        />
      ))}
    </ul>
  </div>
);
export default Todolist;
