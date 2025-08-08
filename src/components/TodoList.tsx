// components/TodoList.tsx
import type { Component } from "solid-js";
import type { Todo } from "../types";
import EditableTodo from "./EditableToDo";

import "../styles/TodoList.scss"; 

interface TodoListProps {
  todos: Todo[];
  updateTodo: (id: number, updated: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: Component<TodoListProps> = (props) => {
  return (
    <div class="todo-list">
      {props.todos.length === 0 ? (
        <p class="todo-list__empty">No todos yet. Add some!</p>
      ) : (
        props.todos.map((todo) => (
          <EditableTodo
            todo={todo}
            updateTodo={props.updateTodo}
            deleteTodo={props.deleteTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
