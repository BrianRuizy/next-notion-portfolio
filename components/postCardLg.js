import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function PostCardLg({ post, index }) {
  return (
    <Link
      href={`posts/${post.slug}`}
      key={index}
      className="flex flex-col shadow-lg bg-neutral-200 dark:bg-neutral-900 min-w-[80%] md:min-w-[100%] rounded-xl col-span-1 overflow-hidden will-change-transform "
    >
      <div className="relative overflow-hidden aspect-square">
        <Image
          fill
          src={post.cover}
          alt={post.title}
          priority={true}
          className="z-0 object-cover object-center aspect-square absolute w-full h-full hover:scale-105 transition-all duration-1000 ease-in-out"
        />
        <Menu as="div" className="relative flex justify-between p-6">
          <p className="text-xs md:text-sm font-semibold m-0 text-white/80 "
            style={{textShadow: "2px 3px 5px rgba(0,0,0,0.25)"}}
          >{post.date}</p>
          <div>
            <Menu.Button className="bg-white/20 dark:bg-black/20 rounded-full text-white hover:opacity-75 transition duration-200 ease-in-out">
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
                    className="text-black dark:text-white/90 px-4 py-2 text-base w-full flex justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-100 ease-in-out"
                    onClick={() => {
                      navigator.share({
                        title: post.title,
                        url: post.slug,
                        text: "Check out Brian's post!",
                      });
                    }}
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
                    className="text-black dark:text-white/90 px-4 py-2 text-base w-full flex justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-100 ease-in-out "
                    onClick={() => {
                      navigator.clipboard.writeText(post.slug);
                    }}
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
      <div className="flex flex-col gap-1 justify-center min-h-16 flex-1 bg-white dark:bg-neutral-900 p-4 text-center">
        <h2 className="text-lg md:text-xl leading-tight font-bold text-black dark:text-white line-clamp-2">{post.title}</h2>
        <p className="text-neutral-400 text-sm line-clamp-2 pb-1">{post.description}</p>
      </div>
    </Link>
  );
}
