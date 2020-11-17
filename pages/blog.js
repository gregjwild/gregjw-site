import Layout from "../components/Layout";
import PostList from '../components/PostList';
import matter from 'gray-matter';

/* Here's what we're rendering in the index */
const Blog = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">The Blog</h1>
      <main>
        <PostList posts={posts}/>
      </main>
    </Layout>
  )
}

export default Blog

/* 
This is a Next function: it fetches data, and returns it as props to the page component.

We're getting data from the siteconfig.json file.
*/
export async function getStaticProps() {
  // Site Info
  const configData = await import(`../siteconfig.json`)

  // Posts
  const postsRaw = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index];
      const document = matter(value.default)
      return {
        frontmatter:document.data,
        markdownBody: document.content,
        slug
      }
    })
    return data;

  })(require.context('./posts', true, /\.md$/)); 

  // Convert posts to dates 
  const postsWithDatesConverted = postsRaw => {
      return postsRaw.map(post => {
          post.frontmatter.date = new Date(post.frontmatter.date);
          return post;
      });
  }

  /* Sort dates
    We use slice to avoid mutating postsRaw in place.
    We need to reverse the array, otherwise they'll be displayed oldest-first.
  */
  const postsSorted = postsWithDatesConverted(postsRaw)
    .slice()
    .sort((a, b) => a.frontmatter.date - b.frontmatter.date)
    .reverse()

  // Convert dates to strings (as we need our function to return JSON);
  const posts = postsSorted.map(post => {
      post.frontmatter.date = post.frontmatter.date.toISOString().slice(0,10)
      return post
  })

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
