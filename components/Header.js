// Link is a default Next js compontent, enabling client-side transitions between routes.
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="header">
        <h1>Greg J. Wild</h1>
        <nav className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </nav>
      </header>
    </>
  )
}
