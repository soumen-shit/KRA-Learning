"use client";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export default function Home() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Counter: {value}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
