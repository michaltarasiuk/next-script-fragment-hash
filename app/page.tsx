import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>You are on home page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/1">Go to page 1</Link>
          </li>
          <li>
            <Link href="/2">Go to page 2</Link>
          </li>
          <li>
            <Link href="/3">Go to page 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
