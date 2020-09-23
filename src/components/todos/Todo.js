import React from "react";

const Todo = props => (
  <div>
    <span>
      <li>{props.todo.text}</li>
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </span>
  </div>
);

export default Todo;
