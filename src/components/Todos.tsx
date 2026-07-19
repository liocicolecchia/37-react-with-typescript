import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

interface TodosProps {
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}

function Todos({ items, onRemoveTodo }: TodosProps) {
  return (
    <ul className={classes.todo}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => onRemoveTodo(item.id)}
        />
      ))}
    </ul>
  );
}

export default Todos;
