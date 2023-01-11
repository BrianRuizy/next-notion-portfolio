import Image from "next/image";

import PostCardSm from "./postCardSm";
import PostCardMd from "./postCardMd";
import PostCardLg from "./postCardLg";


export default function postList({ posts }) {
  if (!posts) return <h1>No posts</h1>;

  return (
    <>
      <section>
        <div className="container max-w-6xl mx-auto px-4"> 
          <h2 className="text-2xl font-bold">Case Studies</h2>
          <p className="text-neutral-400 text-base -mt-1 mb-3">Readings with a deep dive</p>
        </div>
        <div 
          id="posts" 
          className="md:container md:max-w-6xl md:mx-auto px-4 relative flex flex-nowrap overflow-x-scroll snap-x snap-mandatory scroll-pl-4 md:overflow-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-3"
          style=
            {{
              // to maintain shadow on scrollbar
              paddingBottom: "2rem",
              marginBottom: "-2rem"
            }}
        >
          {posts.map((post, index) =>
            post.category === "Case Study" ? (
              <PostCardLg post={post} key={index} />
            ) : null
          )}
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <Image src="/youtube-icon.png" width={24} height={24} alt="youtube icon"/>
          <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight">YouTube</h2>
        </div>
        <p className="text-neutral-400 text-base -mt-1 mb-3">Watch my latest videos!</p>
        <div id="posts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {posts.map((post, index) =>
            post.category === "YouTube" ? (
              <PostCardSm post={post} key={index} />
            ) : null
          )}
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight">Blog Posts</h2>
        <p className="text-neutral-400 text-base -mt-1 mb-3">Additional readings</p>
        <div id="posts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {posts.map((post, index) =>
            post.category === "Blog" ? (
              <PostCardMd post={post} key={index} />
            ) : null
          )}
        </div>
      </section>
    </>
  );
}
