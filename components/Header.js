// Link is a default Next js compontent, enabling client-side transitions between routes.
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
      <header className={styles.header}>
        <h1>Greg J. Wild</h1>
        <nav>
          <Link href="/" >
            <a className={styles.navItem}>Home</a>
          </Link>
          <Link href="/blog" >
            <a className={styles.navItem}>Blog</a>
          </Link>
        </nav>
      </header>
  )
}
