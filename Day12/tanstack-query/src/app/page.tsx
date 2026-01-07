"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, Post } from "./lib/api";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currPage, setCurrPage] = useState<number>(1);
  const { data, isLoading, isError, error, isFetching } = useQuery<Post[]>({
    queryKey: ["posts", currPage],
    queryFn: () => fetchPosts(currPage),
  });
  console.log(data);
  console.log(currPage);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {(error as Error).message}</h2>;
  }
  return (
    <div>
      <h1 className="text-center text-2xl mb-2">Posts</h1>
      {isFetching && <small>refreshing posts....</small>}
      {data?.map((post) => (
        <div className="border p-4" key={post.id}>
          <h3 className="mb-3">
            {" "}
            <strong>Title: </strong> {post.title}
          </h3>
          <p className="mb-2">
            {" "}
            <strong>Body: </strong>
            {post.body}
          </p>
          <Link
            href={`/posts/${post.id}`}
            className="text-blue-600 cursor-pointer hover:text-blue-400"
          >
            Show In details
          </Link>
        </div>
      ))}
      <div className="m-3 flex justify-center">
        <button
          className="text-xl cursor-pointer mx-2 hover:text-blue-950"
          disabled={currPage === 1}
          onClick={() => setCurrPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <p className="text-2xl border p-1 rounded-full">{currPage}</p>
        <button
          className="text-xl cursor-pointer mx-2 hover:text-blue-950"
          onClick={() => setCurrPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
