import Link from 'next/link';
import styles from './Postcard.module.css';

export default function Postcard({post}) {
 return (
    <li key={post.slug} className={styles.Postcard}>
        <span className="postdate">{post.frontmatter.date}</span>
        <Link href={{ pathname: `/blog/${post.slug}` }}>
            <a>{post.frontmatter.title}</a> 
        </Link>
        <span className="postsummary">{post.frontmatter.summary}</span>
    </li>
 )
}