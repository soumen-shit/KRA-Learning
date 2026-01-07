import { CreateTodo, Todo } from "@/types/todo";
import { api } from "./axios";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await api.get<Todo[]>("/todos");
  return res.data;
}

export async function createTodo(todo: CreateTodo) {
  const res = await api.post<Todo>("/todos", todo);
  return res.data;
}

export async function updateTodo(id: string, updates: Partial<Todo>) {
  const res = await api.put<Todo>(`/todos/${id}`, updates);
  return res.data;
}

export async function deleteTodo(id: string) {
  const res = await api.delete<Todo>(`/todos/${id}`);
  return res.data;
}
