"use client";
import { fetchPostById, Post } from "@/app/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = ({ params }: PageProps) => {
  const { id } = React.use(params);
  const postId: number = Number(id);
  const { data, isLoading, isError, error, isFetching } = useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
    enabled: !!postId,
  });

  if (isLoading) {
    return <h2>Loading post...</h2>;
  }

  if (isError) {
    return <h2>Error: {(error as Error).message}</h2>;
  }

  return (
    <div>
      <h1>Post Details</h1>

      {isFetching && <small>Updating post....</small>}

      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
