import classes from "./TodoItem.module.css";

interface TodoItemProps {
  text: string;
  onRemoveTodo: () => void;
}

function TodoItem({ text, onRemoveTodo }: TodoItemProps) {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
}

export default TodoItem;
