import Link from "next/link";

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul>
        {comments.map(comment => (
            <li className="mt-3" key={comment.id}>
                <h3 className="mb-2">{comment.name}</h3>
                <p>{comment.body}</p>
            </li>
        ))}
    </ul>
  )
}
