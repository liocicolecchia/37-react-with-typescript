import Todo from "../models/todo";

interface TodosProps {
  items: Todo[];
}

function Todos({ items }: TodosProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default Todos;
