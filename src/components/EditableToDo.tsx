import { createSignal, Show } from "solid-js";
import type { Component } from "solid-js";
import type { Todo } from "../types";
import "../styles/EditableTodo.scss";

interface EditableTodoProps {
  todo: Todo;
  updateTodo: (id: number, updated: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
}

const EditableTodo: Component<EditableTodoProps> = (props) => {
  const [isEditing, setIsEditing] = createSignal(false);
  const [tempText, setTempText] = createSignal(props.todo.text);

  const saveEdit = () => {
    props.updateTodo(props.todo.id, { text: tempText() });
    setIsEditing(false);
  };

  const toggleCompleted = (e: Event) => {
    e.stopPropagation();
    props.updateTodo(props.todo.id, { completed: !props.todo.completed });
  };

  return (
    <div class="todo-item" onClick={() => setIsEditing(true)}>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onClick={toggleCompleted}
        onChange={() => {}}
        class="todo-item__checkbox"
      />
      <div class="todo-item__content">
        <Show
          when={isEditing()}
          fallback={
            <>
              <span
                class={`todo-item__text ${props.todo.completed ? "todo-item__text--completed" : ""}`}
              >
                {props.todo.text}
              </span>
              <div class="todo-item__meta">
                Priority: <strong>{props.todo.priority}</strong> | Due:{" "}
                <strong>{props.todo.dueDate}</strong>
              </div>
            </>
          }
        >
          <input
            class="todo-item__input"
            type="text"
            value={tempText()}
            onClick={(e) => e.stopPropagation()}
            onInput={(e) => setTempText(e.currentTarget.value)}
            onBlur={saveEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveEdit();
              if (e.key === "Escape") setIsEditing(false);
            }}
            autofocus
          />
        </Show>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          props.deleteTodo(props.todo.id);
        }}
        class="todo-item__delete"
      >
        ❌
      </button>
    </div>
  );
};

export default EditableTodo;
