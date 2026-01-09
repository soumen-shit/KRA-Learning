"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { TextField, Button, Paper } from "@mui/material";
import { loginUser } from "@/lib/auth";
import Link from "next/link";
// import { loginUser } from "../../lib/auth";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Paper className="p-6 w-100">
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
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

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isPending}
          >
            {isPending ? "Logging in..." : "Login"}
          </Button>
          {error && <p className="text-red-500 text-sm">Invalid credentials</p>}
        </form>
        <p className="mt-2">
          Do not have account?{" "}
          <Link className="text-blue-600 cursor-pointer" href={"/"}>
            SignUp
          </Link>{" "}
        </p>
      </Paper>
    </div>
  );
};

export default Page;
