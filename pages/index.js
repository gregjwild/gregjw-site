import Layout from "../components/Layout";

/* Here's what we're rendering in the index */
const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h2 className="title">Good day!</h2>
      <main>
        <p>TODO</p>
      </main>
    </Layout>
  )
}

export default Index

/* 
This is a Next function: it fetches data, and returns it as props to the page component.

We're getting data from the siteconfig.json file.
*/
export async function getStaticProps() {
  // Site Info
  const configData = await import(`../siteconfig.json`)
  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
