import styles from './PostList.module.css';
import Postcard from './Postcard.js';

export default function PostList({ posts }) {
    if (posts === 'undefined') return null;

    return (
        <div>
            {!posts && <div>No posts!</div>}
            <ul className={styles.PostList}>
            {posts &&
                posts.map((post, index) => {
                    if (post.frontmatter.status === "published") {
                        return (
                            <Postcard post={post} key={index}/>
                        )}
                })}
            </ul>
        </div>
    )
}