import { createEffect, createSignal } from "solid-js";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import SearchBar from "./components/SearchBar";
import Navbar from './components/navbar';
import type{ Todo } from "./types";
import './style.css';
import "../src/Styles/app.scss";


type Filter = "all" | "active" | "completed";

function App() {
  const [todos, setTodos] = createSignal<Todo[]>([]);
  const [filter, setFilter] = createSignal<Filter>("all");
  const [query, setQuery] = createSignal("");

  // Load from localStorage
  createEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  });

  // Save to localStorage
  createEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos()));
  });

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos()]);
  };

  const updateTodo = (id: number, updated: Partial<Todo>) => {
    setTodos(todos().map((todo) => (todo.id === id ? { ...todo, ...updated } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos().filter((todo) => todo.id !== id));
  };

  const filteredTodos = () => {
    return todos()
      .filter((todo) => {
        if (filter() === "active") return !todo.completed;
        if (filter() === "completed") return todo.completed;
        return true;
      })
      .filter((todo) => todo.text.toLowerCase().includes(query().toLowerCase()));
  };

  return (
    
    <div class="app-container">
      <Navbar />
    <div class="app-container__box-container">
    <div class="max-w-xl mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4 text-center">✅ My To Do List</h1>
      <TodoForm addTodo={addTodo} />
      <SearchBar query={query()} setQuery={setQuery} />
      <FilterButtons current={filter()} setFilter={setFilter} />
      <div class="todo-list">
      <TodoList todos={filteredTodos()} updateTodo={updateTodo} deleteTodo={deleteTodo} /></div>
    </div>
    </div>
    </div>
  );
}

export default App;


//   return (
//     <div class="box-container">
//     <div class="max-w-xl mx-auto p-4">
//       <h1 class="text-2xl font-bold mb-4 text-center">✅ My To Do List</h1>
//       <TodoForm addTodo={addTodo} />
//       <SearchBar query={query()} setQuery={setQuery} />
//       <FilterButtons current={filter()} setFilter={setFilter} />
//       <div class="todo-list">
//       <TodoList todos={filteredTodos()} updateTodo={updateTodo} deleteTodo={deleteTodo} /></div>
//     </div>
//     </div>
//   );
// }

// export default App;
