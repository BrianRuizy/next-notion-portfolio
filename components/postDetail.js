import React from "react";
import { ColorExtractor } from "react-color-extractor";

import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function PostDetail({ post }) {
  return (
    <article className="flex flex-col gap-8">
      <meta name="theme-color" content="black" />

      <header className="bg-white min-h-[75vh] py-8 ">
        <div className="container max-w-3xl mx-auto px-6 md:mt-12 flex flex-col gap-8">
          <div>
            <h2 className="font-bold text-4xl">
              {post.metadata.title}
            </h2>
            <span>{post.metadata.date}</span>
            <p>{post.metadata.tags.join(", ")}</p>
          </div>

          <div id="picture" className="relative w-[100%] overflow-hidden aspect-video rounded-lg shadow-2xl">
            <Image fill className="object-cover" src={post.metadata.cover} alt={post.metadata.title} priority={"true"}
            />
          </div>

          <div id="palette" className="flex flex-row gap-4 justify-center">
            {/* loop 6 times */}
            {[...Array(6)].map((_, index) => {
              return (
                <div
                  key={index}
                  className="w-8 h-8 rounded border border-white/20"
                ></div>
              );
            })}
          </div>
          <ColorExtractor
            src={post.metadata.cover}
            getColors={(colors) => {
              console.log(colors);
              document
                .querySelector("meta[name=theme-color]")
                .setAttribute("content", colors[0]);
              document.querySelector("header").style.backgroundColor =
                colors[0];
              // document.querySelector("#picture").style.boxShadow = `0 25px 50px -12px ${colors[5]}`;
              [...document.querySelector("#palette").children].forEach(
                (child, index) => {
                  child.style.backgroundColor = colors[index];
                }
              );
            }}
          />
        </div>
      </header>

      <ReactMarkdown className="prose prose-neutral dark:prose-invert">
        {post.markdown}
      </ReactMarkdown>
    </article>
  );
}
