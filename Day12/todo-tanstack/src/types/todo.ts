export type Todo = {
  id: string;
  task_Name: string;
  description: string;
  status: boolean;
  createdAt: string;
};

export type CreateTodo = Omit<Todo, "id" | "createdAt">;
