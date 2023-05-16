import { resolve } from "styled-jsx/css";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Error while loading the comments");
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul className="comments">
      {comments.map((comment) => (
        <li className="mt-2" key={comment.id}>
          <h3 className="mb-2">{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
