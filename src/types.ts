export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate: string; 
  priority: "low" | "medium" | "high";
}
export interface EditableTodoProps {
  todo: Todo;
  updateTodo: (id: number, updated: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
}
export type Filter = "all" | "active" | "completed";