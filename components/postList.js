import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function postList({ posts }) {
  if (!posts) return <h1>No posts</h1>;

  return (
    <>
      <section>
        <div className="container max-w-7xl mx-auto px-6"> 
          <h2 className="text-2xl font-bold">Case Studies</h2>
          <p className="text-neutral-400 text-base -mt-1 mb-3">Stories with a deeper dive.</p>
        </div>
        <div 
          id="posts" 
          className="md:container md:max-w-7xl md:mx-auto px-6 relative flex flex-nowrap overflow-x-scroll md:overflow-auto md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
          style=
            {{
              // to maintain shadow on scrollbar
              paddingBottom: "2rem",
              marginBottom: "-2rem"
            }}
        >
          {posts.map((post, index) =>
            post.category === "Case Study" ? (
              <div
                key={index}
                className="shadow-lg bg-neutral-200 dark:bg-neutral-900 min-h-[30rem] min-w-[95%] rounded-2xl md:rounded-3xl p-6 col-span-1 overflow-hidden will-change-transform"
              >
                <Image
                  fill
                  src={post.cover}
                  alt={post.title}
                  quality={100}
                  className="z-0 object-cover object-center absolute w-full h-full hover:scale-105 transition-all duration-1000 ease-in-out dark:brightness-90"
                />
                <div className="z-10 absolute -inset-2 bg-gradient-to-b from-black/25 h-2/6" />
                <div className="z-20 relative flex flex-col gap-1.5">
                  <div className="flex justify-between gap-4 items-center border-b pb-1 mb-1 border-white/20 ">
                    <p className="text-xs md:text-sm font-semibold m-0 text-white/80">{post.date}</p>
                    <button type="button" className="text-white/80" aria-label="Arrow up-right">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                      </svg>
                    </button>
                  </div>
                  <h2 className="text-2xl leading-tight font-bold text-white md:pr-2">{post.title}</h2>
                  <p className="text-white/70 text-sm md:text-base line-clamp-3">{post.description}</p>
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      <section className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2">
          <Image src="/youtube-icon.png" width={24} height={24} alt="youtube icon"/>
          <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight">
            YouTube
          </h2>
        </div>
        <p className="text-neutral-400 text-base -mt-1 mb-3">
          Watch my latest videos!
        </p>
        <div id="posts" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post, index) =>
            post.category === "YouTube" ? (
              <div
                key={post.slug}
                className="shadow-lg bg-white dark:bg-neutral-900 divide-neutral-200 dark:divide-neutral-800 divide-y rounded-xl flex flex-col justify-between col-span-2 md:col-span-1"
              >
                <div className="p-4 flex justify-between gap-4">
                  <div>
                    <a href={post.slug} className="flex-1 text-black dark:text-white font-bold text-lg leading-tight line-clamp-3">{post.title}</a>
                    <p className="text-neutral-400 text-sm line-clamp-2">{post.description}</p>
                  </div>
                  <div className="relative overflow-hidden min-w-[8rem] w-32 h-32 aspect-square rounded-lg">
                    <Image fill className="object-cover" src={post.cover} alt={post.title}/>
                  </div>
                </div>
                <div className="px-4 py-1 flex justify-between items-center">
                  <p className="text-xs md:text-sm font-semibold m-0 text-neutral-400">{post.date}</p>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="text-neutral-400 hover:text-neutral-600 transition duration-200 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute -right-4 z-50 mt-4 w-56 origin-top-right rounded-lg bg-white/75 backdrop-blur-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-800/75">
                        <div className="py-1 divide-y divide-neutral-200 dark:divide-neutral-700">
                          <Menu.Item>
                            <a
                              href="#"
                              className="text-black dark:text-white/90 px-4 py-2 text-base w-full flex justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-100 ease-in-out"
                            >
                              Share Story
                              <svg
                                xm
                                lns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                                />
                              </svg>
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <a
                              href="#"
                              className="text-black dark:text-white/90 px-4 py-2 text-base w-full flex justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-100 ease-in-out "
                              onClick={() => {navigator.clipboard.writeText(post.slug)}}
                            >
                              Copy Link
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                />
                              </svg>
                            </a>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      <section className="container max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight">Blog Posts</h2>
        <p className="text-neutral-400 text-base -mt-1 mb-3">Additional blogs or links</p>
        <div id="posts" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post, index) =>
            post.category === "Blog" ? (
              <div
                key={post.slug}
                className="shadow-lg bg-white dark:bg-neutral-900 divide-neutral-200 dark:divide-neutral-800 divide-y rounded-xl flex flex-col justify-between col-span-2 md:col-span-1"
              >
                <div className="p-4 flex flex-col-reverse justify-between gap-4">
                  <div>
                    <a href={post.slug} className="flex-1 text-black dark:text-white font-bold text-xl leading-tight line-clamp-3">{post.title}</a>
                    <p className="text-neutral-400 text-sm line-clamp-2">{post.description}</p>
                  </div>
                  <div className="relative overflow-hidden aspect-video rounded-lg">
                    <Image fill className="object-cover" src={post.cover} alt={post.title}/>
                  </div>
                </div>
                <div className="px-4 py-1 flex justify-between items-center">
                  <p className="text-xs md:text-sm font-semibold m-0 text-neutral-400">{post.date}</p>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="text-neutral-400 hover:text-neutral-600 transition duration-200 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute -right-4 z-50 mt-4 w-56 origin-top-right rounded-lg bg-white/75 backdrop-blur-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  dark:bg-neutral-800/75">
                        <div className="py-1 divide-y divide-neutral-200 dark:divide-neutral-700">
                          <Menu.Item>
                            <a
                              href="#"
                              className="text-black dark:text-white/90 px-4 py-2 text-base w-full flex justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-100 ease-in-out"
                            >
                              Share Story
                              <svg
                                xm
                                lns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                                />
                              </svg>
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <a
                              href="#"
                              className="text-black dark:text-white/90 px-4 py-2 text-base w-full flex justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-100 ease-in-out"
                              onClick={() => {navigator.clipboard.writeText(post.slug)}}
                            >
                              Copy Link
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                />
                              </svg>
                            </a>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>
    </>
  );
}
