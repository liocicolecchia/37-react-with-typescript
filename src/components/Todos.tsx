interface TodosProps {
  items: string[];
}

function Todos({ items }: TodosProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default Todos;
