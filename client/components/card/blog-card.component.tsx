import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
type Props = {
  className?: string;
  blog: any;
};

const BlogCardComponent: React.FC<Props> = ({ className, blog }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden flex ${className}`}>
      <div className="flex w-full h-full flex-wrap overflow-hidden rounded border-2 shadow-xl ">
        <div className="w-2/6">
          <img
            className="object-cover h-40 w-full h-full"
            src="https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80"
          />
        </div>
        <div className="w-4/6 p-2">
          <Link
            href={`/blogs/${blog && blog.slug ? blog.slug : '#'}`}
            className="leading-normal text-2xl font-semibold mb-2"
            dangerouslySetInnerHTML={{ __html: blog && blog.title ? JSON.parse(blog.title) : '' }}
          ></Link>
          <p
            className="truncate max-h-[6rem]"
            dangerouslySetInnerHTML={{ __html: blog && blog.content ? JSON.parse(blog.content) : '' }}
          ></p>

          <div>
            <div className="flex flex-wrap justify-between items-center mt-6">
              <div className="inline-flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://randomuser.me/api/portraits/men/5.jpg" />
                </div>
                <div className="flex-1 pl-2">
                  <h2 className=" mb-1">Vipin Meghwal</h2>
                  <p className=" opacity-50 text-xs">May 18</p>
                </div>
              </div>
              <span className=" opacity-50 flex">
                <FaHeart className="text-xl mx-2" />
                <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                  <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardComponent;
