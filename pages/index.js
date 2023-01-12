import Head from "next/head";

import { getAllPublished } from "../lib/notion";

import Header from "../components/header";
import PostList from "../components/postList";
import Footer from "../components/footer";

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;

  return (
    <>
      <Head>
        <title>Brian Ruiz | Portfolio</title>
        <meta name="description" content="Brian Ruiz Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className="flex flex-col gap-6">
        <Header />
        <div id="content" className="mb-32 flex flex-col gap-8 md:gap-12">
          <PostList posts={posts} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished();

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};
