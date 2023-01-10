import React, { useState, useRef, useEffect } from "react";

import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function PostDetail({ post }) {


  return (
    <article className="flex flex-col gap-8">
      <meta name="theme-color" content="indigo" />

      <header className="bg-[indigo] min-h-[75vh] py-8 ">
        <div className="container max-w-3xl mx-auto px-6 md:mt-12 flex flex-col gap-8">
          <div>
            <h2 className="font-black font-serif text-4xl">{post.metadata.title}</h2>
            <span>{post.metadata.date}</span>
            <p>{post.metadata.tags.join(", ")}</p>
          </div>
          
          <div id="picture" className="relative w-[100%]  overflow-hidden aspect-video rounded-lg shadow-2xl ">
            <Image fill className="object-cover" src={post.metadata.cover} alt={post.title}/>
          </div>
        </div>
      
      </header>

      <ReactMarkdown className="prose prose-neutral dark:prose-invert">
        {post.markdown}
      </ReactMarkdown>
    </article>
  );
}


