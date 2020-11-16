import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/Layout'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>
  
  return (
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
        <article>
          <h1>{frontmatter.title}</h1>
          <p>First Published: {frontmatter.date}</p>
          {
            frontmatter.updated ? <p>Last Updated: {frontmatter.updated}</p> : null
          }
          <hr/>
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
        <Link href="/">
          <a>Back to post list</a>
        </Link>
      </Layout>
  )
}
/* 
  Here we get our posts, as well as our site config data. 
*/
export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`./../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

/* 
  Here's a Next function: it creates a list of paths to be rendered as HTML when the 
  site is built.
*/
export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    // Gets a list of the MD filenames.
    const keys = context.keys()
    const data = keys.map((key, index) => {
      // Cuts off the ".md" in the filename. It is not welcome here. 
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      // Our URL slug.
      return slug
    })
    return data
  //require.context comes from webpack - it's used to get a list of markdown files.
  })(require.context('./../posts', true, /\.md$/))
  // BEHOLD! Our URL path.
  const paths = blogSlugs.map((slug) => `/blog/${slug}`)
  // An object holding our paths, as well as noting that fallback is false - generating 404s.
  return {
    paths,
    fallback: false,
  }
}
