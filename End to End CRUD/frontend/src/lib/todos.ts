import { Todo } from "@/types/todo";
import { api } from "./axios";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await api.get("/todos");
  return res.data;
};

export const createTodo = async (data: { title: string; desc: string }) => {
  const res = await api.post("/todos", data);
  return res.data;
};

export const updateTodo = async (
  id: string,
  data: Partial<Pick<Todo, "title" | "desc" | "completed">>
) => {
  const res = await api.patch(`/todos/${id}`, data);
  return res.data;
};

export const deleteTodo = async (id: string) => {
  const res = await api.delete(`/todos/${id}`);
  return res.data;
};
