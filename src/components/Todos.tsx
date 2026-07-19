import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

interface TodosProps {
  items: Todo[];
}

function Todos({ items }: TodosProps) {
  return (
    <ul className={classes.todo}>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default Todos;
