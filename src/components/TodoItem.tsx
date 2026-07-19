import classes from "./TodoItem.module.css";

interface TodoItemProps {
  text: string;
}

function TodoItem({ text }: TodoItemProps) {
  return <li className={classes.item}>{text}</li>;
}

export default TodoItem;
