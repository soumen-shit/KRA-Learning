import { api } from "./axios";

export const loginUser = async (data: { email: string; password: string }) => {
  const res = await api.post("/auth/login", data);
  console.log("api" , api)
  return res.data;
};

export const registerUser = async (data: {
  email: string;
  password: string;
  name: string;
  role: string;
}) => {
  const res = await api.post("/users/signup", data);
  return res.data;
};

export const logoutUser = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};

export const fetchMe = async () => {
  const res = await api.get("/users/me");
  return res.data;
};
