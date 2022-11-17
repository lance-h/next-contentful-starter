import Head from 'next/head'

import { fetchEntries } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'

export default function PostPage({ post }) {
  return (
    <div className="container">
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div>
          <h1>Post: {post.title}</h1>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetchEntries()
  const paths = await res.map((p) => {
    return `/posts/${p.fields.slug}`
  });

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const res = await fetchEntries()
  console.log('GetStaticProps:post', context);
  const post = res.find((p) => p.slug = context.params.slug);

  return {
    props: {
      post: post?.fields,
    },
  }
}
