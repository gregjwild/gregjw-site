import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main style={{margin: '2.5% 20%'}}>
        <section className="layout" >
          <div className="content">{children}</div>
        </section>
        <footer>
          <p>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</a> 
          i.e. feel free to use it, modify it, and share it, but please attribute it to me, and use this license yourself. If by some small chance you think there's a way to monetize anything, let's talk!</p>
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              <img alt="Creative Commons Licence" style={{borderWidth:0}} src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
          </a>
        </footer>
      </main>
    </>
  )
}
