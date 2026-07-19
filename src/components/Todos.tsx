import { useContext } from "react";

import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

function Todos() {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todo}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => todosCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
}

export default Todos;
