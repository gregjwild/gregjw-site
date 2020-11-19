import Link from 'next/link';
import styles from './Postcard.module.css';

export default function Postcard({post}) {
 return (
    <li key={post.slug} className={styles.Postcard}>
        <p className="post-date">{post.frontmatter.date}</p>
        <p>
            <Link href={{ pathname: `/blog/${post.slug}` }}>
                <a>{post.frontmatter.title}</a> 
            </Link>
        </p>
        <p className={styles.postSummary}>{post.frontmatter.summary}</p>
    </li>
 )
}