import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos items={["Task 1", "Task 2", "Task 3"]} />
    </div>
  );
}

export default App;
