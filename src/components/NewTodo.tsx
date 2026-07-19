import { SubmitEvent, useRef } from "react";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

function NewTodo({ onAddTodo }: NewTodoProps) {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: SubmitEvent) {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }

    onAddTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;
