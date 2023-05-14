import { Counter } from "./Counter";

export default function PostLayout({ children }) {
  return (
    <div>
      <small className="mb-2">Home - Post</small>
      <Counter />
      {children}
    </div>
  );
}
