const Task = ({text}) => {
  console.log('props', text);
  return (
    <div className="todo">
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <li className="todo-item">{text}</li>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Task;
