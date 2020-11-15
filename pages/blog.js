import Layout from "../components/Layout";
import PostList from '../components/PostList';
import matter from 'gray-matter';

/* Here's what we're rendering in the index */
const Blog = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to my blog!</h1>
      <p className="description">
        {description}
      </p>
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
  const posts = ((context) => {
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

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
