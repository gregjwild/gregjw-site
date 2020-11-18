import Link from 'next/link';
import styles from './Postcard.module.css';

export default function Postcard({post}) {
 return (
    <li key={post.slug} className={styles.Postcard}>
        <p className="postdate">{post.frontmatter.date}</p>
        <p>
            <Link href={{ pathname: `/blog/${post.slug}` }}>
                <a>{post.frontmatter.title}</a> 
            </Link>
        </p>
        <p className="postsummary">{post.frontmatter.summary}</p>
    </li>
 )
}