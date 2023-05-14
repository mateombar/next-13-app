import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export async function ListOfPost() {
  const posts = await fetchPost();

  return posts.slice(0, 5).map((post) => (
    <article className="mt-3" key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h3 className="mb-2">{post.title}</h3>
      </Link>
      <p className="mb-2">{post.body}</p>
      <LikeButton />
    </article>
  ));
}
