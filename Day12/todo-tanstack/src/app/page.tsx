"use client";
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "@/lib/api";
import { CreateTodo, Todo } from "@/types/todo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const queryClinet = useQueryClient();
  const [form, setForm] = useState<CreateTodo>({
    task_Name: "",
    description: "",
    status: false,
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
  });

  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: ["todos"],
      });

      setForm({
        task_Name: "",
        description: "",
        status: false,
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Todo> }) =>
      updateTodo(id, updates),

    onMutate: async ({ id, updates }) => {
      await queryClinet.cancelQueries({
        queryKey: ["todos"],
      });

      const previousTodos = queryClinet.getQueryData<Todo[]>(["todos"]);

      queryClinet.setQueryData<Todo[]>(["todos"], (old) =>
        old?.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo))
      );
      return { previousTodos };
    },

    onError: (_err, _vars, context) => {
      queryClinet.setQueryData(["todos"], context?.previousTodos);
    },

    onSettled: () => {
      queryClinet.invalidateQueries({
        queryKey: ["todos"],
      });
      setEditingId(null);
      setForm({
        task_Name: "",
        description: "",
        status: false,
      });
    },
  });

  const deleteMution = useMutation({
    mutationFn: deleteTodo,

    onMutate: async (id: string) => {
      await queryClinet.cancelQueries({
        queryKey: ["todos"],
      });

      const previousTodos = queryClinet.getQueryData<Todo[]>(["todos"]);

      queryClinet.setQueryData<Todo[]>(["todos"], (old) =>
        old?.filter((todo) => todo.id !== id)
      );
      return { previousTodos };
    },

    onError: (_err, _vars, context) => {
      queryClinet.setQueryData(["todos"], context?.previousTodos);
    },

    onSettled: () => {
      queryClinet.invalidateQueries({
        queryKey: ["todos"],
      });
      setForm({
        task_Name: "",
        description: "",
        status: false,
      });
    },
  });

  if (isLoading) {
    return <p className="text-center mt-10">Loading todos...</p>;
  }
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form
        className="bg-white p-4 rounded shadow mb-6 space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (editingId) {
            updateMutation.mutate({
              id: editingId,
              updates: form,
            });
          } else {
            createMutation.mutate(form);
          }
        }}
      >
        <input
          type="text"
          placeholder="Task name"
          className="w-full border p-2 rounded"
          value={form.task_Name}
          onChange={(e) => setForm({ ...form, task_Name: e.target.value })}
          required
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId
            ? "Update Todo"
            : createMutation.isPending
            ? "Adding..."
            : "Add Todo"}
        </button>
      </form>
      {isFetching && <p className="text-sm text-gray-500">updaating...</p>}
      <ul className="space-y-3">
        {data?.map((todo) => (
          <li key={todo.id} className="p-4 bg-white rounded shadow">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() =>
                  updateMutation.mutate({
                    id: todo.id,
                    updates: { status: !todo.status },
                  })
                }
              />
            </label>
            <h3 className="font-semibold">{todo.task_Name}</h3>
            <p className="text-sm text-gray-600">{todo.description}</p>
            <p className="text-sm">
              Status: {todo.status ? "✅ Done" : "❌ Pending"}
            </p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => {
                  setEditingId(todo.id);
                  setForm({
                    task_Name: todo.task_Name,
                    description: todo.description,
                    status: todo.status,
                  });
                }}
                className="text-blue-600 text-sm cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => deleteMution.mutate(todo.id)}
                className="text-red-600 text-sm cursor-pointer"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
