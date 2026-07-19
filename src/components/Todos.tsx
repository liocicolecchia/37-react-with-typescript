import Todo from "../models/todo";
import TodoItem from "./TodoItem";

interface TodosProps {
  items: Todo[];
}

function Todos({ items }: TodosProps) {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default Todos;
