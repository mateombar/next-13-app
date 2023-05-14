import Link from "next/link";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article>
      <h2 className="mb-2">{post.title}</h2>
      <p className="mb-2">{post.body}</p>
      <Link href={`/posts/${id}/comments`}>See comments</Link>
      {children}
    </article>
  )
}
