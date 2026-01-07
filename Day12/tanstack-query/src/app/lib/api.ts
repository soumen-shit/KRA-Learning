export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchPosts(page: number): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await res.json();
}

export async function fetchPostById(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
}
