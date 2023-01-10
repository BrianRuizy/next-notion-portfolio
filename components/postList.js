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
          <p className="text-neutral-400 text-base -mt-1 mb-3">Stories with a deeper dive.</p>
        </div>
        <div 
          id="posts" 
          className="md:container md:max-w-6xl md:mx-auto px-4 relative flex flex-nowrap overflow-x-scroll md:overflow-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-3"
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
        <div className="flex justify-between">
          <div> 
            <div className="flex items-center gap-2">
              <Image src="/youtube-icon.png" width={24} height={24} alt="youtube icon"/>
              <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight">YouTube</h2>
            </div>
            <p className="text-neutral-400 text-base -mt-1 mb-3">Watch my latest videos!</p>
          </div>

          {/* segmented button switch ios style, to witch between PostCardSm and PostCardMd */}
          {/* <div>
            <div className="flex items-center bg-neutral-200 p-[2px] rounded-md">
              <button className="bg-neutral-200 rounded-md text-black/25 py-1 px-6 rounded-l">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="bg-white rounded-md text-black/25 py-1 px-6 rounded-r">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div> */}
        </div>

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
