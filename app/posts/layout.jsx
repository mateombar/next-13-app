export default function PostLayout({ children }) {
  return (
    <div>
      <h1 className="mb-3">This is the layout of the posts</h1>
      {children}
    </div>
  );
}
