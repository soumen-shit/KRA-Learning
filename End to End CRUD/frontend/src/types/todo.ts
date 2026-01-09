export interface Todo {
  id: string;
  title: string;
  desc: string;
  completed: boolean;
  createdAt: string;
}

export type CreateTodo = Omit<Todo, "id" | "createdAt">;