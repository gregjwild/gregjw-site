import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import ElevatorPitch from "../components/ElevatorPitch";
import Portfolio from "../components/Portfolio";
import Interests from "../components/Interests";

/* Here's what we're rendering in the index */
const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
        <HeroBanner strapline="All things Greg J. Wild, all the time."/>
        <ElevatorPitch />
        <Portfolio />
        <hr/>
        <Interests />
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
