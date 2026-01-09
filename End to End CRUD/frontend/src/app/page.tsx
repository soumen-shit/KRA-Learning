"use client";

import { registerUser } from "@/lib/auth";
import { Button, MenuItem, Paper, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user");

  const { mutate, isPending, error } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push("/login");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ name, email, password, role });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Paper className="p-6 w-100">
        <h1 className="text-xl font-bold mb-4 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-4">
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Role"
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value as "user" | "admin")}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isPending}
          >
            {isPending ? "Creating..." : "Register"}
          </Button>
          {error && (
            <p className="text-red-500 text-sm">Something went wrong</p>
          )}
        </form>

        <p className="mt-2">
          Already have account?{" "}
          <Link className="text-blue-600 cursor-pointer" href={"/login"}>
            LogIn
          </Link>{" "}
        </p>
      </Paper>
    </div>
  );
}
