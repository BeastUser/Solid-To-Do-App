import { createSignal } from "solid-js";
import type { Todo } from "../types";
// import "../styles/TodoForm.scss";

export default function TodoForm(props: { addTodo: (todo: Todo) => void }) {
  const [text, setText] = createSignal("");
  const [dueDate, setDueDate] = createSignal("");
  const [priority, setPriority] = createSignal<"low" | "medium" | "high">("medium");

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const trimmed = text().trim();
    if (!trimmed) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
      dueDate: dueDate(),
      priority: priority()
    };

    props.addTodo(newTodo);

    // Clear inputs
    setText("");
    setDueDate("");
    setPriority("high");
  };

  return (
<form class="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        class="todo-form__input"
        placeholder="Enter task..."
        value={text()}
        onInput={(e) => setText(e.currentTarget.value)}
      />

      <select
        class="todo-form__select"
        value={priority()}
        onChange={(e) => setPriority(e.currentTarget.value as "low" | "medium" | "high")}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="date"
        class="todo-form__date"
        value={dueDate()}
        onInput={(e) => setDueDate(e.currentTarget.value)}
      />

      <button type="submit" class="todo-form__button">Add</button>
    </form>

  );
}
