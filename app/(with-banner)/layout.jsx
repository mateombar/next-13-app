import { Counter } from "../components/Counter";

export default function Layout({ children }) {
  return (
    <div>
      <marquee className="mb-2">For sharing - You cant write the breadcrumb here</marquee>
      <Counter />
      {children}
    </div>
  );
}

