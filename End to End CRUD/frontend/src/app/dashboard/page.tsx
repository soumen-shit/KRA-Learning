"use client";
import { fetchMe } from "@/lib/auth";
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "@/lib/todos";
import { Button, Paper, TextField } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

const Page = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: fetchMe,
  });

  console.log(data);

  const createMutaion = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setTitle("");
      setDesc("");
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateTodo(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const handleCreate = () => {
    if (!title || !desc) return;
    createMutaion.mutate({ title, desc });
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <Paper className="p-4 mb-6">
        <h1 className="text-xl font-bold mb-4 text-center">
          {data.role === "admin" ? "Admin Page" : "My Todos"}
        </h1>
        <div className="flex gap-4 mb-4">
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />

          <TextField
            label="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            fullWidth
          />

          <Button
            variant="contained"
            onClick={handleCreate}
            disabled={createMutaion.isPending}
          >
            Add
          </Button>
        </div>
      </Paper>

      <div className="space-y-3">
        {todos?.map((todo) => (
          <Paper
            key={todo.id}
            className="p-4 flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    updateMutation.mutate({
                      id: todo.id,
                      data: { completed: !todo.completed },
                    })
                  }
                />
                <h2
                  className={`font-semibold ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.title}
                </h2>
              </div>
              <p className="text-sm text-gray-600 ml-8">{todo.desc}</p>
            </div>
            <Button
              color="error"
              onClick={() => deleteMutation.mutate(todo.id)}
            >
              Delete
            </Button>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Page;
